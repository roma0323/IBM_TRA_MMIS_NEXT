// MaintenanceDetailSection.tsx

import React from "react";
import BoardTitleSection from "@/components/BoardTitleSection"; // Import the Section component
import MaintenanceCard from "@/components/locomotive_depot/MaintenanceCard";

interface MaintenanceDetailSectionProps {
  maintenanceData: any[];
}

const MaintenanceDetailSection: React.FC<MaintenanceDetailSectionProps> = ({
  maintenanceData,
}) => {
  return (
    <div className="min-w-[25%] flex items-center justify-center">
      <BoardTitleSection
        title="車輛詳情"
        content={
          <div>
            {!Array.isArray(maintenanceData) || maintenanceData.length === 0 ? (
              <div>無資料</div>
            ) : (
              maintenanceData.map((data, index) => (
                <MaintenanceCard
                  key={index}
                  maintenanceData={data}
                  index={index + 1}
                />
              ))
            )}
          </div>
        }
      />
    </div>
  );
};

export default MaintenanceDetailSection;
