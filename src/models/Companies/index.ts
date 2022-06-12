import { GraphQLResult } from "@aws-amplify/api";
import { ListCompaniesQuery } from "../../API";
import { Company } from "../../types";

const mapListCompaniesQuery = (listCompaniesQuery: GraphQLResult<ListCompaniesQuery>): Company[] => {
  return listCompaniesQuery.data?.listCompanies?.items?.map((company: any) => ({
    id: company?.id,
    name: company?.name,
    parentID: company?.parentID,
    industry: company?.industry,
    parentCompany: company?.parent,
    childrenCompanies: company?.children,
  } as Company)) || [];
}

export { mapListCompaniesQuery as mapListCompanies }