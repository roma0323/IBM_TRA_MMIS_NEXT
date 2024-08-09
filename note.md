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

車種層級分析：30使用率
   <BigPieChart />   
疊圖 平均值 曲線平緩


rowbytrain 是否全部都可以點


客車：
http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&qdate=2024-08-04&carcatalog=客車&cartype=PPH
貨車無假資料