// ClientPage.tsx

"use client";

import React, { useState, useEffect } from "react";
import BoardTitleSection from "../BoardTitleSection";
import CategorySection from "@/components/ui/accordionSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Signal } from "@/types/type";

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

type ClientPageProps = {
  signals: Signal[];
};

const ClientPage: React.FC<ClientPageProps> = ({ signals }) => {
  const [selectTrain, setSelectTrain] = useState<string[]>(["七堵機務段"]);
  const [selectLight, setSelectLight] = useState<string>("全部燈號");
  const [filteredSignals, setFilteredSignals] = useState<Signal[]>([]);
  const [searchText, setSearchText] = useState<string>("");

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

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    
  };

  const handleSearch = () => {
    const filtered = signals.filter((signal) =>
      signal.ASSETNUM.includes(searchText)
    );
    setFilteredSignals(filtered);
  };

  useEffect(() => {
    let filtered = signals.filter((signal) =>
      selectTrain.includes(signal.EQ2_C)
    );

    if (selectLight === "黃燈") {
      filtered = filtered.filter(
        (signal) => signal.SOURCE === "6" || signal.SOURCE === "7"
      );
    } else if (selectLight === "紅燈") {
      filtered = filtered.filter(
        (signal) => signal.SOURCE && signal.SOURCE !== "6" && signal.SOURCE !== "7"
      );
    } else if (selectLight === "綠燈") {
      filtered = filtered.filter((signal) => !signal.SOURCE);
    }

    setFilteredSignals(filtered);
  }, [selectTrain, selectLight, signals,searchText]);

  useEffect(() => {
    console.log(filteredSignals);
  }, [filteredSignals]);

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
                <Button
                  type="button"
                  className="bg-primary/80 hover:bg-primary"
                  onClick={handleSearch}
                >
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
                    {filteredSignals.length > 0 ? (
                      <div className="grid-container">
                        {filteredSignals.map((signal, index) => (
                          <div key={index} className="grid-item">
                            {signal.ASSETNUM}
                          </div>
                        ))}
                      </div>
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
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 10px;
        }
        .grid-item {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ClientPage;