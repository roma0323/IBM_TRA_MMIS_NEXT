// components/operation_signal/ClientPage.tsx

"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useSWR, { mutate } from "swr";

import Loading from "@/components/Loading";
import BoardTitleSection from "../BoardTitleSection";
import CategorySection from "@/components/ui/accordionSection";
import AccordionSectionMulti from "@/components/ui/AccordionSectionMulti";
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
  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";

  const { data: signals, error } = useSWR<Signal[]>(
    `operation_signal${date}`,
    fetcher
  );
  const [selectTrain, setSelectTrain] = useState<string[]>([]);
  const [selectLight, setSelectLight] = useState<string>("全部燈號");
  const [filteredSignals, setFilteredSignals] = useState<Signal[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [lastRefreshTime, setLastRefreshTime] = useState<Date | null>(null);

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
  }, [selectTrain, selectLight, signals, searchText,lastRefreshTime]);

  // Refresh signals data every minute
  useEffect(() => {
    const interval = setInterval(() => {
      mutate(`operation_signal${date}`);
      setLastRefreshTime(new Date()); // Update the last refresh time
    }, 60000); // 60000 ms = 1 minute

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [date]);

  if (error) return <div>Failed to load</div>;
  if (!signals)
    return (
      <>
        <Loading />
      </>
    );

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

  const filterAndSortSignals = (signals: Signal[]) => {
    const priority = { 紅燈: 1, 黃燈: 2, 綠燈: 3 };
    const getPriority = (signal: Signal) => {
      if (signal.SOURCE === "6" || signal.SOURCE === "7")
        return priority["黃燈"];
      if (signal.SOURCE && signal.SOURCE !== "6" && signal.SOURCE !== "7")
        return priority["紅燈"];
      return priority["綠燈"];
    };

    const uniqueSignals = new Map<string, Signal>();

    signals.forEach((signal) => {
      const existingSignal = uniqueSignals.get(signal.ASSETNUM);
      if (
        !existingSignal ||
        getPriority(signal) < getPriority(existingSignal)
      ) {
        uniqueSignals.set(signal.ASSETNUM, signal);
      }
    });

    return Array.from(uniqueSignals.values()).sort(
      (a, b) => getPriority(a) - getPriority(b)
    );
  };

  const groupedSignals = groupByEQ4(filteredSignals);

  const getButtonBgColor = (source: string | undefined) => {
    if (source === "6" || source === "7") {
      return "bg-[#ffee11]";
    } else if (source && source !== "6" && source !== "7") {
      return "bg-[#ff1f1f]";
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
              <AccordionSectionMulti
                setSelectTrain={handleSelectTrain}
                data={infor_for_accordionitem}
              />
              <CategorySection
                setSelectTrain={handleSelectLight}
                data={light_for_accordionitem}
              />
              <div className="sticky bottom-0 p-4 flex w-full items-center space-x-2">
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
            
              <div className="w-full grid-container px-8 pt-6">
                <Button
                  className={` hover:bg-white text-base font-bold text-black  ${getButtonBgColor(
                    ""
                  )}`}
                >
                  可營運
                </Button>

                <Button
                  className={` hover:bg-white text-base font-bold text-black  ${getButtonBgColor(
                    "6"
                  )}`}
                >
                  試駛，迴送
                </Button>
                <Button
                  className={` hover:bg-white text-base font-bold text-black  ${getButtonBgColor(
                    "red"
                  )}`}
                >
                  不可營運
                </Button>
                
              </div>
              {lastRefreshTime && (
                <div className="text-sm text-right text-gray-500 px-8">
                  上次更新時間: {lastRefreshTime.toLocaleTimeString()}
                </div>
              )}

              {selectTrain.length > 0 && (
                <div>
                  {Object.keys(groupedSignals).length > 0 ? (
                    <>
                      {Object.entries(groupedSignals).map(([eq4, signals]) => (
                        <div key={eq4}>
                          <h1 className="p-4 text-lg">{eq4}</h1>
                          <div className="grid-container px-8">
                            {filterAndSortSignals(signals).map(
                              (signal, index) => (
                                <div key={index} className="grid-item">
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Button
                                          key={index}
                                          className={`w-full hover:bg-white cursor-default text-base font-bold text-black  ${getButtonBgColor(
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
                              )
                            )}
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p>無資料</p>
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