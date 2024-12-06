
export const calculateCounts = (data: any[]) => {
  const counts: { [key: string]: { [key: string]: number } } = {};
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

  data.forEach((item) => {
    let { carcatalog, deptdesc, belongto } = item;
    if (!categories.includes(carcatalog)) {
      carcatalog = "其他";
    }
    if (!allSections.includes(deptdesc)) {
      deptdesc = "其他機務段";
    }
    if (!counts[deptdesc]) {
      counts[deptdesc] = {};
    }
    if (!counts[deptdesc][carcatalog]) {
      counts[deptdesc][carcatalog] = 0;
    }
    counts[deptdesc][carcatalog] += belongto;
  });

  return counts;
};




// ProcessData.tsx

export const createFactoryData = (counts: { [key: string]: { [key: string]: number } }) => {
  const categories = [
    "全部",
    "客車",
    "貨車",
    "柴油客車",
    "柴液機車",
    "柴電機車",
    "電力機車",
    "通勤列車",
    "城際列車",
    "其他",
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
    "其他機務段",
  ];

  return allSections.reduce((acc: { [key: string]: { id: string; name: string; amount: number }[] }, dept: string) => {
    acc[dept] = [
      ...categories.map((name) => {
        let amount = 0;
        if (dept === "全部機務段" && name === "全部") {
          amount = categories.slice(1).reduce((sum, cat) => sum + allSections.slice(1).reduce((sectionSum, section) => sectionSum + (counts[section]?.[cat] || 0), 0), 0);
        } else if (dept === "全部機務段") {
          amount = allSections.slice(1).reduce((sum, section) => sum + (counts[section]?.[name] || 0), 0);
        } else if (name === "全部") {
          amount = categories.slice(1).reduce((sum, cat) => sum + (counts[dept]?.[cat] || 0), 0);
        } else {
          amount = (counts[dept]?.[name] || 0);
        }

        return {
          id: name,
          name,
          amount,
        };
      }),
    ];

    return acc;
  }, {});
};
