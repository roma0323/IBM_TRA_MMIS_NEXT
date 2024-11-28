import { Recent30days } from "@/types/type";

export function processAreaChart30DayData({ data }: { data: Recent30days[] }) {
  const group1: Record<string, { AVAILABLE: number; TOTAL: number }> = {}; // EQ11 is RSTL, USUALFLAG is "1"
  const group2: Record<string, { AVAILABLE: number; TOTAL: number }> = {}; // EQ11 is RSTA, USUALFLAG is "1"
  const group3: Record<string, { AVAILABLE: number; TOTAL: number }> = {}; // EQ11 is RSTF or RSTP, USUALFLAG is "1"
  const group4: Record<string, { AVAILABLE: number; TOTAL: number }> = {}; // USUALFLAG is "0"
  const group5: Record<string, { AVAILABLE: number; TOTAL: number }> = {}; // Sum of all types of data

  data.forEach((item) => {
    const { ALL_D, AVAILABLE, TOTAL, EQ11, USUALFLAG } = item;
    const availableNum = parseFloat(AVAILABLE);
    const totalNum = parseFloat(TOTAL);

    let group = null;
    if (USUALFLAG === "1") {
      if (EQ11 === "RSTL") {
        group = group1;
      } else if (EQ11 === "RSTA") {
        group = group2;
      } else if (EQ11 === "RSTF" || EQ11 === "RSTP") {
        group = group3;
      }
    } else if (USUALFLAG === "0") {
      group = group4;
    }

    if (group) {
      if (!group[ALL_D]) {
        group[ALL_D] = { AVAILABLE: 0, TOTAL: 0 };
      }
      group[ALL_D].AVAILABLE += availableNum;
      group[ALL_D].TOTAL += totalNum;
    }

    // Update group5 with the sum of all data
    if (!group5[ALL_D]) {
      group5[ALL_D] = { AVAILABLE: 0, TOTAL: 0 };
    }
    group5[ALL_D].AVAILABLE += availableNum;
    group5[ALL_D].TOTAL += totalNum;
  });

  const groupArray = (
    group: Record<string, { AVAILABLE: number; TOTAL: number }>
  ) =>
    Object.keys(group).map((date) => {
      const { AVAILABLE, TOTAL } = group[date];
      const RATION = Math.round((AVAILABLE / TOTAL) * 100);
      return { name: date, RATION };
    });

  const final_output = {
    "動力車": groupArray(group1),
    "客車": groupArray(group2),
    "貨車": groupArray(group3),
    "非常態列車": groupArray(group4),
    "全局": groupArray(group5),
  };

  return final_output;
}

export function  processTotalAndAvailableData ({ data }: { data: Recent30days[] }) { 
  const result: {
    "動力車"?: { AVAILABLE: number; TOTAL: number; },
    "客車"?: { AVAILABLE: number; TOTAL: number; },
    "貨車"?: { AVAILABLE: number; TOTAL: number; },
    "非常態列車"?: { AVAILABLE: number; TOTAL: number; },
    "全局"?: { AVAILABLE: number; TOTAL: number; },
  } = {};

 

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayDate = yesterday.toISOString().split('T')[0];

  data.forEach(item => {
    if (item.ALL_D === yesterdayDate) {
      const available = parseInt(item.AVAILABLE, 10);
      const total = parseInt(item.TOTAL, 10);

      
      if (item.USUALFLAG === "1") {
        if (item.EQ11 === "RSTL") {
          result["動力車"] = {
            AVAILABLE: available,
            TOTAL: total,
          };
        } else if (item.EQ11 === "RSTA") {
          result["客車"] = {
            AVAILABLE: available,
            TOTAL: total,
          };
        } else if (item.EQ11 === "RSTF" || item.EQ11 === "RSTP") {
          if (!result["貨車"]) {
            result["貨車"] = { AVAILABLE: 0, TOTAL: 0 };
          }
          result["貨車"].AVAILABLE += available;
          result["貨車"].TOTAL += total;
        }
      } else if (item.USUALFLAG === "0") {
        if (!result["非常態列車"]) {
          result["非常態列車"] = { AVAILABLE: 0, TOTAL: 0 };
        }
        result["非常態列車"].AVAILABLE += available;
        result["非常態列車"].TOTAL += total;
      }
      if (!result["全局"]) {
        result["全局"] = { AVAILABLE: 0, TOTAL: 0 };
      }
      result["全局"].AVAILABLE += available;
      result["全局"].TOTAL += total;
    }
  });

  return result;
};

  