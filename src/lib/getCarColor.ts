// utils/getCarColor.ts

export const getCarColor = (carcatalog: string): string => {
    const colorMap: { [key: string]: string } = {
      "城際列車": "#538164",
      "電力機車": "#FFBB54",
      "柴電機車": "#D9730D",
      "柴液機車": "#C3554E",
      "客車": "#8F65AF",
      "柴油客車": "#9F8170",
      "貨車": "#537Fa1",
      "通勤列車": "#28BF02",
      "全局": "#397EFF",
      "動力車": "#00BBC7",
      "非常態列車": "#1f2937",
      "故障通報": "#0E1F40",
      "行車責任事故": "#2A5EBF",
      "ATP": "#537FD1",
      "庫存餘額": "#537FD1",
      "領用金額": "#0E1F40",

    };
  
    return colorMap[carcatalog] || "#000000"; // Default color
  };