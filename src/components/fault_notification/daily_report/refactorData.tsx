// utils/dataUtils.ts
import { FailListItem } from "@/types/type";

type FailLevel = "A" | "B" | "C" | "All";

interface Counter {
  [key: string]: {
    all_fail_quantity: number;
    Maintenance_fail_quantity: number;
    other_fail_quantity: number;
  };
}

export const refactorData = (data: FailListItem[]) => {
  const counter: Counter = initializeCounter();

  data.forEach(({ fail_lvl }) => {
    if (counter[fail_lvl]) {
      incrementCounter(counter, fail_lvl as FailLevel);
    }
  });

  calculateAllTotals(counter);

  return prepareReportLevelCardData(counter);
};

const initializeCounter = (): Counter => ({
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

const incrementCounter = (counter: Counter, fail_lvl: FailLevel) => {
  counter[fail_lvl].all_fail_quantity += 1;
  counter[fail_lvl].Maintenance_fail_quantity += 1;
  counter[fail_lvl].other_fail_quantity += 1;
};

const calculateAllTotals = (counter: Counter) => {
  const allLevelCounts = counter["All"];
  ["A", "B", "C"].forEach((lvl) => {
    allLevelCounts.all_fail_quantity += counter[lvl].all_fail_quantity;
    allLevelCounts.Maintenance_fail_quantity += counter[lvl].Maintenance_fail_quantity;
    allLevelCounts.other_fail_quantity += counter[lvl].other_fail_quantity;
  });
};

const prepareReportLevelCardData = (counter: Counter) => {
  return ["A", "B", "C", "All"].map((lvl) => ({
    fail_lvl: lvl,
    ...counter[lvl],
  }));
};