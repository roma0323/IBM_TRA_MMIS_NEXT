// utils/dataUtils.ts
import { FailListItem } from "@/types/type";

export const refactorData = (data: FailListItem[]) => {
  const counter = initializeCounter();

  data.forEach(({ fail_lvl }) => {
    if (counter[fail_lvl]) {
      incrementCounter(counter, fail_lvl);
    }
  });

  calculateAllTotals(counter);

  return prepareReportLevelCardData(counter);
};

const initializeCounter = () => ({
  A: createCounter(),
  B: createCounter(),
  C: createCounter(),
  All: createCounter(),
});

const createCounter = () => ({
  all_fail_quantity: 0,
  Maintenance_fail_quantity: 0,
  other_fail_quantity: 0,
});

const incrementCounter = (counter: any, fail_lvl: string) => {
  counter[fail_lvl].all_fail_quantity += 1;
  counter[fail_lvl].Maintenance_fail_quantity += 1;
  counter[fail_lvl].other_fail_quantity += 1;
};

const calculateAllTotals = (counter: any) => {
  const allLevelCounts = counter["All"];
  ["A", "B", "C"].forEach((lvl) => {
    allLevelCounts.all_fail_quantity += counter[lvl].all_fail_quantity;
    allLevelCounts.Maintenance_fail_quantity += counter[lvl].Maintenance_fail_quantity;
    allLevelCounts.other_fail_quantity += counter[lvl].other_fail_quantity;
  });
};

const prepareReportLevelCardData = (counter: any) => {
  return ["A", "B", "C", "All"].map((lvl) => ({
    fail_lvl: lvl,
    ...counter[lvl],
  }));
};