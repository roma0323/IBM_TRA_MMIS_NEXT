// TrainDataContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface TrainDataContextProps {
  selectedTrainData: { cartype: string; belongto: number; clickedData: number } | null;
  setSelectedTrainData: (data: { cartype: string; belongto: number; clickedData: number } | null) => void;
}

const TrainDataContext = createContext<TrainDataContextProps | undefined>(undefined);

export const TrainDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedTrainData, setSelectedTrainData] = useState<TrainDataContextProps["selectedTrainData"]>(null);

  return (
    <TrainDataContext.Provider value={{ selectedTrainData, setSelectedTrainData }}>
      {children}
    </TrainDataContext.Provider>
  );
};

export const useTrainData = () => {
  const context = useContext(TrainDataContext);
  if (!context) {
    throw new Error("useTrainData must be used within a TrainDataProvider");
  }
  return context;
};
