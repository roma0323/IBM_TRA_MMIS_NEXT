// ProcessData.tsx

export const calculateCounts = (data: any[]) => {
    const counts: { [key: string]: { [key: string]: number } } = {};
  
    data.forEach((item) => {
      const { carcatalog, deptdesc } = item;
      if (!counts[deptdesc]) {
        counts[deptdesc] = {};
      }
      if (!counts[deptdesc][carcatalog]) {
        counts[deptdesc][carcatalog] = 0;
      }
      counts[deptdesc][carcatalog]++;
    });
  
    return counts;
  };
  
  export const createFactoryData = (counts: { [key: string]: { [key: string]: number } }) => {
    const categories = [
      "客車",
      "貨車",
      "柴油客車",
      "柴液機車",
      "柴電機車",
      "電力機車",
      "通勤列車",
      "城際列車",
    ];
  
    const allSections = [
      "全部機廠",
      "富岡機廠",
      "潮州機廠",
      "花蓮機廠",
    ];
  
    const totalCounts = categories.reduce((acc, category) => {
      acc[category] = allSections.reduce((sum, section) => sum + (counts[section]?.[category] || 0), 0);
      return acc;
    }, {} as { [key: string]: number });
  
    const totalAllAmount = allSections.reduce((sum, section) => {
      return sum + categories.reduce((catSum, category) => catSum + (counts[section]?.[category] || 0), 0);
    }, 0);
  
    return allSections.reduce((acc: { [key: string]: { id: string; name: string; amount: number }[] }, dept: string) => {
      const totalAmount = categories.reduce((sum, name) => sum + (counts[dept]?.[name] || 0), 0);
  
      acc[dept] = [
        {
          id: "全部",
          name: "全部",
          amount: dept === "全部機廠" ? totalAllAmount : totalAmount,
        },
        ...categories.map((name) => ({
          id: name,
          name,
          amount: dept === "全部機廠" ? totalCounts[name] : (counts[dept]?.[name] || 0), // Use the calculated count or 0 if not found
        })),
      ];
  
      return acc;
    }, {});
  };