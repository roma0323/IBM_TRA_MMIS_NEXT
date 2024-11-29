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
      "全部機務段",
      "七堵機務段",
      "臺北機務段",
      "新竹機務段",
      "彰化機務段",
      "嘉義機務段",
      "高雄機務段",
      "花蓮機務段",
      "臺東機務段",
      "宜蘭機務段",
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
          amount: dept === "全部機務段" ? totalAllAmount : totalAmount,
        },
        ...categories.map((name) => ({
          id: name,
          name,
          amount: dept === "全部機務段" ? totalCounts[name] : (counts[dept]?.[name] || 0), // Use the calculated count or 0 if not found
        })),
      ];
  
      return acc;
    }, {});
  };