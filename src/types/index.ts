export type Company = {
  id: number;
  name: string;
  parentID?: number;
  industry: string;
  parentCompany?: Company;
  childrenCompanies?: Company[];
}

export type CompanyYearEndData = {
  id: number;
  companyID: number;
  yearEndStartDate: Date;
  yearEndFinishDate: Date;
  employees: number;
  turnover: number;
  company?: Company;
  accountingData?: AccountingData[];
}

export type AccountingData = {
  id: number;
  yearEndID: number;
  categoryID: number;
  amount: number;
  category?: Category;
  yearEndData?: CompanyYearEndData;
}

export type Category = {
  id: number;
  name: string;
  value: number;
}

export type Factors = {
  id: number;
  categoryID: number;
  value: number;
  category?: Category;
}
