import { GraphQLResult } from "@aws-amplify/api";
import { ListCompanyYearEndDataQuery } from "../../API";
import { CompanyYearEndData } from "../../types";

const mapListCompanyYearEndDataQuery = (listCompanyYearEndData: GraphQLResult<ListCompanyYearEndDataQuery>): CompanyYearEndData[] => {
  return listCompanyYearEndData.data?.listCompanyYearEndData?.items?.map((companyYearEndData: any) => ({
    id: companyYearEndData?.id,
    companyID: companyYearEndData?.companyID,
    yearEndStartDate: companyYearEndData?.yearEndStartDate,
    yearEndFinishDate: companyYearEndData?.yearEndFinishDate,
    employees: companyYearEndData?.employees,
    turnover: companyYearEndData?.turnover,
    accountingData: companyYearEndData?.accountingData,
    company: companyYearEndData?.company,
  } as CompanyYearEndData)) || [];
}

const getFromCompanyYearEndDataList = (companysYearEndDataList: CompanyYearEndData[], ids: number[]): CompanyYearEndData[] | undefined => {
  return companysYearEndDataList.filter((companysYearEndData) => !(companysYearEndData.companyID in ids));
}

export { mapListCompanyYearEndDataQuery as mapListCompanyYearEndData }
export { getFromCompanyYearEndDataList }