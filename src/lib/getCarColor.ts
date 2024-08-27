// utils/getCarColor.ts

export const getCarColor = (carcatalog: string): string => {
    const colorMap: { [key: string]: string } = {
      "城際列車": "#538164",
      "電力機車": "#FFBB54",
      "柴電機車": "#D9730D",
      "柴液機車": "#C3554E",
      "客車": "#00BBC7",
      "柴油客車": "#9F8170",
      "貨車": "#8F65AF",
      "通勤列車": "#28BF02",
      "全局": "#397EFF",
      "動力車": "#397EFF",
      "非常態列車": "#1f2937",
    };
  
    return colorMap[carcatalog] || "#000000"; // Default color
  };