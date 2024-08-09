後端ＡＰＩ重寫

車型層級分析：車輛數 使用率
 <TrainOverviewSection
          filteredTrainData={filteredTrainData} // Pass fetched data to TrainOverviewSection
          selectedArea={initialData[0].carcatalog}
          selectedLabel={selectedTrainName}
          handleTrainClick={handleTrainClick}
          handleMouseEnter={handleMouseEnter}
        />
車種層級分析：各車型比例
   <BigPieChart />

車種層級分析：30使用率（包含前30~60天）
   <UseRateAreaChart />   



內網不知道有沒有：
非常態資料


改善：
rowbytrain 是否全部都可以點
