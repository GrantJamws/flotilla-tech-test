import { CompanyYearEndData } from ".";
import { calculateCarbonFootprintScore } from "../helpers/Calculations";

export const getOverallCarbonFootprintScore = (yearEndData: CompanyYearEndData[]): number => {
  let runningTotal = 0;
  yearEndData.forEach(yearEndDataItem => {
    yearEndDataItem.accountingData?.forEach(accountingDataItem => {
      runningTotal += calculateCarbonFootprintScore(accountingDataItem.amount, accountingDataItem.category?.value || 0);
    })
  })
  return runningTotal;
};