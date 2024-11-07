// components/operation_signal/ClientPage.tsx

"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import BoardTitleSection from "../BoardTitleSection";
import CategorySection from "@/components/ui/accordionSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Signal } from "@/types/type";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getOperationSignal } from "@/api/api";

const infor_for_accordionitem = {
  所屬段: [
    "七堵機務段",
    "臺北機務段",
    "新竹機務段",
    "彰化機務段",
    "嘉義機務段",
    "高雄機務段",
    "臺東機務段",
    "花蓮機務段",
    "宜蘭機務段",
  ],
};

const light_for_accordionitem = {
  燈號: ["全部燈號", "紅燈", "黃燈", "綠燈"],
};

const fetcher = async () => {
  const data = await getOperationSignal();
  return data;
};

const ClientPage: React.FC = () => {
  const { data: signals, error } = useSWR<Signal[]>(
    "/api/operation_signal",
    fetcher
  );
  const [selectTrain, setSelectTrain] = useState<string[]>(["七堵機務段"]);
  const [selectLight, setSelectLight] = useState<string>("全部燈號");
  const [filteredSignals, setFilteredSignals] = useState<Signal[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    if (signals) {
      let filtered = signals.filter((signal) =>
        selectTrain.includes(signal.EQ2_C)
      );

      if (selectLight === "黃燈") {
        filtered = filtered.filter(
          (signal) => signal.SOURCE === "6" || signal.SOURCE === "7"
        );
      } else if (selectLight === "紅燈") {
        filtered = filtered.filter(
          (signal) =>
            signal.SOURCE && signal.SOURCE !== "6" && signal.SOURCE !== "7"
        );
      } else if (selectLight === "綠燈") {
        filtered = filtered.filter((signal) => !signal.SOURCE);
      }

      setFilteredSignals(filtered);
    }
  }, [selectTrain, selectLight, signals, searchText]);

  if (error) return <div>Failed to load</div>;
  if (!signals) return <div>Loading...</div>;

  const handleSelectTrain = (id: string) => {
    setSearchText("");
    setSelectTrain((prevSelectTrain) => {
      if (prevSelectTrain.includes(id)) {
        return prevSelectTrain.filter((trainId) => trainId !== id);
      } else {
        return [...prevSelectTrain, id];
      }
    });
  };

  const handleSelectLight = (id: string) => {
    setSearchText("");
    setSelectLight(id);
  };

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    if (signals) {
      const filtered = signals.filter((signal) =>
        signal.ASSETNUM.includes(searchText)
      );
      setFilteredSignals(filtered);
    }
  };

  const groupByEQ4 = (signals: Signal[]) => {
    return signals.reduce((groups, signal) => {
      const group = groups[signal.EQ4] || [];
      group.push(signal);
      groups[signal.EQ4] = group;
      return groups;
    }, {} as Record<string, Signal[]>);
  };

  const groupedSignals = groupByEQ4(filteredSignals);

  const getButtonBgColor = (source: string | undefined) => {
    if (source === "6" || source === "7") {
      return "bg-[#ffeecf]";
    } else if (source && source !== "6" && source !== "7") {
      return "bg-[#FFDFEA]";
    } else {
      return "bg-[#dfffcf]";
    }
  };

  return (
    <div className="relative flex justify-between p-6 gap-6 h-full">
      {/* First Div */}
      <div className="min-w-[20%] flex items-center justify-center">
        <BoardTitleSection
          title="廠段分類"
          content={
            <>
              <CategorySection
                setSelectTrain={handleSelectTrain}
                data={infor_for_accordionitem}
              />
              <CategorySection
                setSelectTrain={handleSelectLight}
                data={light_for_accordionitem}
              />
              <div className="sticky bottom-0 p-4 flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="search"
                  placeholder="車輛燈號"
                  value={searchText}
                  onChange={handleSearchTextChange}
                />
                <Button variant="secondary" onClick={handleSearch}>
                  查詢
                </Button>
              </div>
            </>
          }
        />
      </div>

      {/* Second Div */}
      <div className="grow flex items-center justify-center">
        <BoardTitleSection
          title={`${selectLight} - ${selectTrain.join(", ")}`}
          content={
            <>
              {selectTrain.length > 0 && (
                <div>
                  {Object.keys(groupedSignals).length > 0 ? (
                    <>
                      {Object.entries(groupedSignals).map(([eq4, signals]) => (
                        <div key={eq4}>
                          <h1 className="p-4 text-lg">{eq4}</h1>
                          <div className="grid-container px-8">
                            {signals.map((signal, index) => (
                              <div key={index} className="grid-item">
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        key={index}
                                        className={`w-full hover:bg-white cursor-default text-gray-700  ${getButtonBgColor(
                                          signal.SOURCE
                                        )}`}
                                      >
                                        {signal.ASSETNUM}
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      {signal.DESC
                                        ? signal.DESC
                                        : signal.ASSETNUM}
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p>No data available</p>
                  )}
                </div>
              )}
            </>
          }
        />
      </div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
          gap: 0.5rem;
        }

        .grid-item {
          width: 8rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ClientPage;
