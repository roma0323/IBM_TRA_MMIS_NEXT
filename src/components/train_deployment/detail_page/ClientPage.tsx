'use client'
import React, { useState, useEffect } from 'react';
import DataSection from '@/components/train_deployment/detail_page/DataSection';
import TrainCategorySection from '@/components/train_deployment/detail_page/TrainCategorySection';
import DepotSection from '@/components/train_deployment/detail_page/DepotSection';
import MaintenanceSection from '@/components/train_deployment/detail_page/MaintenanceSection';
import SlideNavigation from '@/components//SlideNavigation'; 
import TrainOverviewSection from "@/components/locomotive_depot/TrainOverviewSection";
import MaintenanceDetailSection from "@/components/locomotive_depot/MaintenanceDetailSection";

type ClientPageProps = {
  initialData: any[];
};

const DetailClientPage: React.FC<ClientPageProps> = ({ initialData }) => {
  const [selectedTrainName, setSelectedTrainName] = useState('');
  const [isTrainDetailVisible, setIsTrainDetailVisible] = useState(false);
  const [maintenanceData, setMaintenanceData] = useState<any[]>([]);
  const [filteredTrainData, setFilteredTrainData] = useState<any[]>([]); // New state for filtered train data

  const [trainData, setTrainData] = useState<{ trainName: string, trainCount: number }[]>([]);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const response = await fetch(`http://tra.webtw.xyz:8888/maximo/zz_data?method=getCarTypeList&carcatalog=${initialData[0].carcatalog}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();

        const dynamicTrainData = data.map((item: { kpi_oprtype: string; cardesc: string; }) => ({
          trainName: item.cardesc,
          trainCount: Math.floor(Math.random() * 100) + 50 
        }));

        setTrainData(dynamicTrainData);
      } catch (error) {
        console.error('Error fetching train data:', error);
      }
    };

    fetchTrainData();
  }, []);

  // Function to handle train click and fetch dynamic data
  const handleTrainTypeClick = async (trainName: string) => {
    if(!canMoveLeft){
      handleMouseEnter('right');
    }
    setSelectedTrainName(trainName);
    setIsTrainDetailVisible(!isTrainDetailVisible);
    try {
      const response = await fetch(`http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&multiplier=0&qdate=2024-08-04&carcatalog=${initialData[0].carcatalog}&cartype=${trainName}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log("Fetched Data: ", data);

      setFilteredTrainData(data.data); // Set fetched data to state
    } catch (error) {
      console.error("Error fetching train details: ", error);
    }
  };

  const handleTrainClick = async (dept: string, cartype: string, divData: string) => {
    try {
      const response = await fetch(`http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusDetailList&multiplier=0&dept=${dept}&cartype=${cartype}&qtype=${divData}&qdate=2024-08-04`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      // console.log(data,"dataaa")
      setMaintenanceData(data);
    } catch (error) {
      console.error("Error fetching maintenance data:", error);
    }
  };

//mouse slide

  const cntSum = initialData.reduce((acc, item) => acc + item.current_cnt, 0);
  const readySum = initialData.reduce((acc, item) => acc + item.current_ready, 0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5;
  const visibleSlides = 3;
  const handleMouseEnter = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex >= totalSlides - visibleSlides ? prevIndex : prevIndex + 1));
    }
  };
  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex < totalSlides - visibleSlides;
//mouse slide

  return (
    <div className="flex w-full p-6 relative overflow-hidden bg-neutral-100">
      <div
        className="flex w-full gap-8 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 26}%)` }}
      >
        <div className="min-w-[25%] h-full flex items-center justify-center">
          <DataSection cntSum={cntSum} readySum={readySum} />
        </div>
        <div className="min-w-[25%] h-full flex items-center justify-center">
          <TrainCategorySection
            initialData={initialData}
            trainData={trainData}
            selectedTrainName={selectedTrainName}
            isDetailVisible={isTrainDetailVisible}
            handleTrainClick={handleTrainTypeClick} // Pass the handleTrainClick function
          />
        </div>
        
        {/* Second Div */}
        <TrainOverviewSection
          filteredTrainData={filteredTrainData} // Pass fetched data to TrainOverviewSection
          selectedArea={initialData[0].carcatalog}
          selectedLabel={selectedTrainName}
          handleTrainClick={handleTrainClick}
          handleMouseEnter={handleMouseEnter}
        />

        {/* Third Div */}
        <MaintenanceDetailSection
          maintenanceData={maintenanceData}
        />
      </div>
      <SlideNavigation direction="left" onHover={handleMouseEnter} isVisible={canMoveLeft} />
      <SlideNavigation direction="right" onHover={handleMouseEnter} isVisible={canMoveRight} />
    </div>
  );
};

export default DetailClientPage;
