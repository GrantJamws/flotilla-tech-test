/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCompaniesInput = {
  id: number,
  industry: string,
  name?: string | null,
  parentID?: number | null,
};

export type UpdateCompaniesInput = {
  id: number,
  industry: string,
  name?: string | null,
  parentID?: number | null,
};

export type DeleteCompaniesInput = {
  id: number,
  industry: string,
};

export type CreateCategoriesInput = {
  id: number,
  name: string,
};

export type UpdateCategoriesInput = {
  id: number,
  name: string,
};

export type DeleteCategoriesInput = {
  id: number,
  name: string,
};

export type CreateFactorsInput = {
  categoryID: number,
  id: number,
  value: number,
};

export type UpdateFactorsInput = {
  categoryID: number,
  id: number,
  value?: number | null,
};

export type DeleteFactorsInput = {
  categoryID: number,
  id: number,
};

export type CreateCompanyYearEndDataInput = {
  companyID: number,
  id: number,
  yearEndStartDate: string,
  yearEndFinishDate: string,
  employees: number,
  turnover: number,
};

export type UpdateCompanyYearEndDataInput = {
  companyID: number,
  id: number,
  yearEndStartDate?: string | null,
  yearEndFinishDate?: string | null,
  employees?: number | null,
  turnover?: number | null,
};

export type DeleteCompanyYearEndDataInput = {
  companyID: number,
  id: number,
};

export type CreateAccountingDataInput = {
  id: number,
  yearEndID: number,
  categoryID: number,
  amount: number,
};

export type UpdateAccountingDataInput = {
  id: number,
  yearEndID: number,
  categoryID?: number | null,
  amount?: number | null,
};

export type DeleteAccountingDataInput = {
  id: number,
  yearEndID: number,
};

export type TableCompaniesFilterInput = {
  id?: TableIntFilterInput | null,
  industry?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  parentID?: TableIntFilterInput | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< number | null > | null,
};

export type TableCategoriesFilterInput = {
  id?: TableIntFilterInput | null,
  name?: TableStringFilterInput | null,
};

export type TableFactorsFilterInput = {
  categoryID?: TableIntFilterInput | null,
  id?: TableIntFilterInput | null,
  value?: TableFloatFilterInput | null,
};

export type TableFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
};

export type TableCompanyYearEndDataFilterInput = {
  companyID?: TableIntFilterInput | null,
  id?: TableIntFilterInput | null,
  yearEndStartDate?: TableStringFilterInput | null,
  yearEndFinishDate?: TableStringFilterInput | null,
  employees?: TableIntFilterInput | null,
  turnover?: TableFloatFilterInput | null,
};

export type TableAccountingDataFilterInput = {
  id?: TableIntFilterInput | null,
  yearEndID?: TableIntFilterInput | null,
  categoryID?: TableIntFilterInput | null,
  amount?: TableIntFilterInput | null,
};

export type CreateCompaniesMutationVariables = {
  input: CreateCompaniesInput,
};

export type CreateCompaniesMutation = {
  createCompanies:  {
    __typename: "Companies",
    id: string,
    industry: string,
    name: string | null,
    parentID: string | null,
    parent:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    children:  Array< {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null > | null,
  } | null,
};

export type UpdateCompaniesMutationVariables = {
  input: UpdateCompaniesInput,
};

export type UpdateCompaniesMutation = {
  updateCompanies:  {
    __typename: "Companies",
    id: string,
    industry: string,
    name: string | null,
    parentID: string | null,
    parent:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    children:  Array< {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null > | null,
  } | null,
};

export type DeleteCompaniesMutationVariables = {
  input: DeleteCompaniesInput,
};

export type DeleteCompaniesMutation = {
  deleteCompanies:  {
    __typename: "Companies",
    id: string,
    industry: string,
    name: string | null,
    parentID: string | null,
    parent:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    children:  Array< {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null > | null,
  } | null,
};

export type CreateCategoriesMutationVariables = {
  input: CreateCategoriesInput,
};

export type CreateCategoriesMutation = {
  createCategories:  {
    __typename: "Categories",
    id: string,
    name: string,
    value: number | null,
  } | null,
};

export type UpdateCategoriesMutationVariables = {
  input: UpdateCategoriesInput,
};

export type UpdateCategoriesMutation = {
  updateCategories:  {
    __typename: "Categories",
    id: string,
    name: string,
    value: number | null,
  } | null,
};

export type DeleteCategoriesMutationVariables = {
  input: DeleteCategoriesInput,
};

export type DeleteCategoriesMutation = {
  deleteCategories:  {
    __typename: "Categories",
    id: string,
    name: string,
    value: number | null,
  } | null,
};

export type CreateFactorsMutationVariables = {
  input: CreateFactorsInput,
};

export type CreateFactorsMutation = {
  createFactors:  {
    __typename: "Factors",
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    id: string,
    value: number,
  } | null,
};

export type UpdateFactorsMutationVariables = {
  input: UpdateFactorsInput,
};

export type UpdateFactorsMutation = {
  updateFactors:  {
    __typename: "Factors",
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    id: string,
    value: number,
  } | null,
};

export type DeleteFactorsMutationVariables = {
  input: DeleteFactorsInput,
};

export type DeleteFactorsMutation = {
  deleteFactors:  {
    __typename: "Factors",
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    id: string,
    value: number,
  } | null,
};

export type CreateCompanyYearEndDataMutationVariables = {
  input: CreateCompanyYearEndDataInput,
};

export type CreateCompanyYearEndDataMutation = {
  createCompanyYearEndData:  {
    __typename: "CompanyYearEndData",
    companyID: string,
    company:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    id: string,
    yearEndStartDate: string,
    yearEndFinishDate: string,
    employees: number,
    turnover: number,
    accountingData:  Array< {
      __typename: "AccountingData",
      id: string,
      yearEndID: string,
      yearEndData:  {
        __typename: "CompanyYearEndData",
        companyID: string,
        company:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        id: string,
        yearEndStartDate: string,
        yearEndFinishDate: string,
        employees: number,
        turnover: number,
        accountingData:  Array< {
          __typename: "AccountingData",
          id: string,
          yearEndID: string,
          categoryID: string,
          amount: number,
        } | null > | null,
      } | null,
      categoryID: string,
      category:  {
        __typename: "Categories",
        id: string,
        name: string,
        value: number | null,
      } | null,
      amount: number,
    } | null > | null,
  } | null,
};

export type UpdateCompanyYearEndDataMutationVariables = {
  input: UpdateCompanyYearEndDataInput,
};

export type UpdateCompanyYearEndDataMutation = {
  updateCompanyYearEndData:  {
    __typename: "CompanyYearEndData",
    companyID: string,
    company:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    id: string,
    yearEndStartDate: string,
    yearEndFinishDate: string,
    employees: number,
    turnover: number,
    accountingData:  Array< {
      __typename: "AccountingData",
      id: string,
      yearEndID: string,
      yearEndData:  {
        __typename: "CompanyYearEndData",
        companyID: string,
        company:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        id: string,
        yearEndStartDate: string,
        yearEndFinishDate: string,
        employees: number,
        turnover: number,
        accountingData:  Array< {
          __typename: "AccountingData",
          id: string,
          yearEndID: string,
          categoryID: string,
          amount: number,
        } | null > | null,
      } | null,
      categoryID: string,
      category:  {
        __typename: "Categories",
        id: string,
        name: string,
        value: number | null,
      } | null,
      amount: number,
    } | null > | null,
  } | null,
};

export type DeleteCompanyYearEndDataMutationVariables = {
  input: DeleteCompanyYearEndDataInput,
};

export type DeleteCompanyYearEndDataMutation = {
  deleteCompanyYearEndData:  {
    __typename: "CompanyYearEndData",
    companyID: string,
    company:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    id: string,
    yearEndStartDate: string,
    yearEndFinishDate: string,
    employees: number,
    turnover: number,
    accountingData:  Array< {
      __typename: "AccountingData",
      id: string,
      yearEndID: string,
      yearEndData:  {
        __typename: "CompanyYearEndData",
        companyID: string,
        company:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        id: string,
        yearEndStartDate: string,
        yearEndFinishDate: string,
        employees: number,
        turnover: number,
        accountingData:  Array< {
          __typename: "AccountingData",
          id: string,
          yearEndID: string,
          categoryID: string,
          amount: number,
        } | null > | null,
      } | null,
      categoryID: string,
      category:  {
        __typename: "Categories",
        id: string,
        name: string,
        value: number | null,
      } | null,
      amount: number,
    } | null > | null,
  } | null,
};

export type CreateAccountingDataMutationVariables = {
  input: CreateAccountingDataInput,
};

export type CreateAccountingDataMutation = {
  createAccountingData:  {
    __typename: "AccountingData",
    id: string,
    yearEndID: string,
    yearEndData:  {
      __typename: "CompanyYearEndData",
      companyID: string,
      company:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      id: string,
      yearEndStartDate: string,
      yearEndFinishDate: string,
      employees: number,
      turnover: number,
      accountingData:  Array< {
        __typename: "AccountingData",
        id: string,
        yearEndID: string,
        yearEndData:  {
          __typename: "CompanyYearEndData",
          companyID: string,
          id: string,
          yearEndStartDate: string,
          yearEndFinishDate: string,
          employees: number,
          turnover: number,
        } | null,
        categoryID: string,
        category:  {
          __typename: "Categories",
          id: string,
          name: string,
          value: number | null,
        } | null,
        amount: number,
      } | null > | null,
    } | null,
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    amount: number,
  } | null,
};

export type UpdateAccountingDataMutationVariables = {
  input: UpdateAccountingDataInput,
};

export type UpdateAccountingDataMutation = {
  updateAccountingData:  {
    __typename: "AccountingData",
    id: string,
    yearEndID: string,
    yearEndData:  {
      __typename: "CompanyYearEndData",
      companyID: string,
      company:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      id: string,
      yearEndStartDate: string,
      yearEndFinishDate: string,
      employees: number,
      turnover: number,
      accountingData:  Array< {
        __typename: "AccountingData",
        id: string,
        yearEndID: string,
        yearEndData:  {
          __typename: "CompanyYearEndData",
          companyID: string,
          id: string,
          yearEndStartDate: string,
          yearEndFinishDate: string,
          employees: number,
          turnover: number,
        } | null,
        categoryID: string,
        category:  {
          __typename: "Categories",
          id: string,
          name: string,
          value: number | null,
        } | null,
        amount: number,
      } | null > | null,
    } | null,
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    amount: number,
  } | null,
};

export type DeleteAccountingDataMutationVariables = {
  input: DeleteAccountingDataInput,
};

export type DeleteAccountingDataMutation = {
  deleteAccountingData:  {
    __typename: "AccountingData",
    id: string,
    yearEndID: string,
    yearEndData:  {
      __typename: "CompanyYearEndData",
      companyID: string,
      company:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      id: string,
      yearEndStartDate: string,
      yearEndFinishDate: string,
      employees: number,
      turnover: number,
      accountingData:  Array< {
        __typename: "AccountingData",
        id: string,
        yearEndID: string,
        yearEndData:  {
          __typename: "CompanyYearEndData",
          companyID: string,
          id: string,
          yearEndStartDate: string,
          yearEndFinishDate: string,
          employees: number,
          turnover: number,
        } | null,
        categoryID: string,
        category:  {
          __typename: "Categories",
          id: string,
          name: string,
          value: number | null,
        } | null,
        amount: number,
      } | null > | null,
    } | null,
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    amount: number,
  } | null,
};

export type GetCompaniesQueryVariables = {
  id: string,
};

export type GetCompaniesQuery = {
  getCompanies:  {
    __typename: "Companies",
    id: string,
    industry: string,
    name: string | null,
    parentID: string | null,
    parent:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    children:  Array< {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null > | null,
  } | null,
};

export type ListCompaniesQueryVariables = {
  filter?: TableCompaniesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompaniesQuery = {
  listCompanies:  {
    __typename: "CompaniesConnection",
    items:  Array< {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCategoriesQueryVariables = {
  id: string,
  name: string,
};

export type GetCategoriesQuery = {
  getCategories:  {
    __typename: "Categories",
    id: string,
    name: string,
    value: number | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: TableCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories:  {
    __typename: "CategoriesConnection",
    items:  Array< {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFactorsQueryVariables = {
  id: string,
  categoryID: string,
};

export type GetFactorsQuery = {
  getFactors:  {
    __typename: "Factors",
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    id: string,
    value: number,
  } | null,
};

export type ListFactorsQueryVariables = {
  filter?: TableFactorsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFactorsQuery = {
  listFactors:  {
    __typename: "FactorsConnection",
    items:  Array< {
      __typename: "Factors",
      categoryID: string,
      category:  {
        __typename: "Categories",
        id: string,
        name: string,
        value: number | null,
      } | null,
      id: string,
      value: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCompanyYearEndDataQueryVariables = {
  id: string,
  companyID: string,
};

export type GetCompanyYearEndDataQuery = {
  getCompanyYearEndData:  {
    __typename: "CompanyYearEndData",
    companyID: string,
    company:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    id: string,
    yearEndStartDate: string,
    yearEndFinishDate: string,
    employees: number,
    turnover: number,
    accountingData:  Array< {
      __typename: "AccountingData",
      id: string,
      yearEndID: string,
      yearEndData:  {
        __typename: "CompanyYearEndData",
        companyID: string,
        company:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        id: string,
        yearEndStartDate: string,
        yearEndFinishDate: string,
        employees: number,
        turnover: number,
        accountingData:  Array< {
          __typename: "AccountingData",
          id: string,
          yearEndID: string,
          categoryID: string,
          amount: number,
        } | null > | null,
      } | null,
      categoryID: string,
      category:  {
        __typename: "Categories",
        id: string,
        name: string,
        value: number | null,
      } | null,
      amount: number,
    } | null > | null,
  } | null,
};

export type ListCompanyYearEndDataQueryVariables = {
  filter?: TableCompanyYearEndDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompanyYearEndDataQuery = {
  listCompanyYearEndData:  {
    __typename: "CompanyYearEndDataConnection",
    items:  Array< {
      __typename: "CompanyYearEndData",
      companyID: string,
      company:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      id: string,
      yearEndStartDate: string,
      yearEndFinishDate: string,
      employees: number,
      turnover: number,
      accountingData:  Array< {
        __typename: "AccountingData",
        id: string,
        yearEndID: string,
        yearEndData:  {
          __typename: "CompanyYearEndData",
          companyID: string,
          id: string,
          yearEndStartDate: string,
          yearEndFinishDate: string,
          employees: number,
          turnover: number,
        } | null,
        categoryID: string,
        category:  {
          __typename: "Categories",
          id: string,
          name: string,
          value: number | null,
        } | null,
        amount: number,
      } | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAccountingDataQueryVariables = {
  id: string,
  yearEndID: string,
};

export type GetAccountingDataQuery = {
  getAccountingData:  {
    __typename: "AccountingData",
    id: string,
    yearEndID: string,
    yearEndData:  {
      __typename: "CompanyYearEndData",
      companyID: string,
      company:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      id: string,
      yearEndStartDate: string,
      yearEndFinishDate: string,
      employees: number,
      turnover: number,
      accountingData:  Array< {
        __typename: "AccountingData",
        id: string,
        yearEndID: string,
        yearEndData:  {
          __typename: "CompanyYearEndData",
          companyID: string,
          id: string,
          yearEndStartDate: string,
          yearEndFinishDate: string,
          employees: number,
          turnover: number,
        } | null,
        categoryID: string,
        category:  {
          __typename: "Categories",
          id: string,
          name: string,
          value: number | null,
        } | null,
        amount: number,
      } | null > | null,
    } | null,
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    amount: number,
  } | null,
};

export type ListAccountingDataQueryVariables = {
  filter?: TableAccountingDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountingDataQuery = {
  listAccountingData:  {
    __typename: "AccountingDataConnection",
    items:  Array< {
      __typename: "AccountingData",
      id: string,
      yearEndID: string,
      yearEndData:  {
        __typename: "CompanyYearEndData",
        companyID: string,
        company:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        id: string,
        yearEndStartDate: string,
        yearEndFinishDate: string,
        employees: number,
        turnover: number,
        accountingData:  Array< {
          __typename: "AccountingData",
          id: string,
          yearEndID: string,
          categoryID: string,
          amount: number,
        } | null > | null,
      } | null,
      categoryID: string,
      category:  {
        __typename: "Categories",
        id: string,
        name: string,
        value: number | null,
      } | null,
      amount: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCompaniesSubscriptionVariables = {
  id?: number | null,
  industry?: string | null,
  name?: string | null,
  parentID?: number | null,
};

export type OnCreateCompaniesSubscription = {
  onCreateCompanies:  {
    __typename: "Companies",
    id: string,
    industry: string,
    name: string | null,
    parentID: string | null,
    parent:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    children:  Array< {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null > | null,
  } | null,
};

export type OnUpdateCompaniesSubscriptionVariables = {
  id?: number | null,
  industry?: string | null,
  name?: string | null,
  parentID?: number | null,
};

export type OnUpdateCompaniesSubscription = {
  onUpdateCompanies:  {
    __typename: "Companies",
    id: string,
    industry: string,
    name: string | null,
    parentID: string | null,
    parent:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    children:  Array< {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null > | null,
  } | null,
};

export type OnDeleteCompaniesSubscriptionVariables = {
  id?: number | null,
  industry?: string | null,
  name?: string | null,
  parentID?: number | null,
};

export type OnDeleteCompaniesSubscription = {
  onDeleteCompanies:  {
    __typename: "Companies",
    id: string,
    industry: string,
    name: string | null,
    parentID: string | null,
    parent:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    children:  Array< {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null > | null,
  } | null,
};

export type OnCreateCategoriesSubscriptionVariables = {
  id?: number | null,
  name?: string | null,
};

export type OnCreateCategoriesSubscription = {
  onCreateCategories:  {
    __typename: "Categories",
    id: string,
    name: string,
    value: number | null,
  } | null,
};

export type OnUpdateCategoriesSubscriptionVariables = {
  id?: number | null,
  name?: string | null,
};

export type OnUpdateCategoriesSubscription = {
  onUpdateCategories:  {
    __typename: "Categories",
    id: string,
    name: string,
    value: number | null,
  } | null,
};

export type OnDeleteCategoriesSubscriptionVariables = {
  id?: number | null,
  name?: string | null,
};

export type OnDeleteCategoriesSubscription = {
  onDeleteCategories:  {
    __typename: "Categories",
    id: string,
    name: string,
    value: number | null,
  } | null,
};

export type OnCreateFactorsSubscriptionVariables = {
  categoryID?: number | null,
  id?: number | null,
  value?: number | null,
};

export type OnCreateFactorsSubscription = {
  onCreateFactors:  {
    __typename: "Factors",
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    id: string,
    value: number,
  } | null,
};

export type OnUpdateFactorsSubscriptionVariables = {
  categoryID?: number | null,
  id?: number | null,
  value?: number | null,
};

export type OnUpdateFactorsSubscription = {
  onUpdateFactors:  {
    __typename: "Factors",
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    id: string,
    value: number,
  } | null,
};

export type OnDeleteFactorsSubscriptionVariables = {
  categoryID?: number | null,
  id?: number | null,
  value?: number | null,
};

export type OnDeleteFactorsSubscription = {
  onDeleteFactors:  {
    __typename: "Factors",
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    id: string,
    value: number,
  } | null,
};

export type OnCreateCompanyYearEndDataSubscriptionVariables = {
  companyID?: number | null,
  id?: number | null,
  yearEndStartDate?: string | null,
  yearEndFinishDate?: string | null,
  employees?: number | null,
};

export type OnCreateCompanyYearEndDataSubscription = {
  onCreateCompanyYearEndData:  {
    __typename: "CompanyYearEndData",
    companyID: string,
    company:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    id: string,
    yearEndStartDate: string,
    yearEndFinishDate: string,
    employees: number,
    turnover: number,
    accountingData:  Array< {
      __typename: "AccountingData",
      id: string,
      yearEndID: string,
      yearEndData:  {
        __typename: "CompanyYearEndData",
        companyID: string,
        company:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        id: string,
        yearEndStartDate: string,
        yearEndFinishDate: string,
        employees: number,
        turnover: number,
        accountingData:  Array< {
          __typename: "AccountingData",
          id: string,
          yearEndID: string,
          categoryID: string,
          amount: number,
        } | null > | null,
      } | null,
      categoryID: string,
      category:  {
        __typename: "Categories",
        id: string,
        name: string,
        value: number | null,
      } | null,
      amount: number,
    } | null > | null,
  } | null,
};

export type OnUpdateCompanyYearEndDataSubscriptionVariables = {
  companyID?: number | null,
  id?: number | null,
  yearEndStartDate?: string | null,
  yearEndFinishDate?: string | null,
  employees?: number | null,
};

export type OnUpdateCompanyYearEndDataSubscription = {
  onUpdateCompanyYearEndData:  {
    __typename: "CompanyYearEndData",
    companyID: string,
    company:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    id: string,
    yearEndStartDate: string,
    yearEndFinishDate: string,
    employees: number,
    turnover: number,
    accountingData:  Array< {
      __typename: "AccountingData",
      id: string,
      yearEndID: string,
      yearEndData:  {
        __typename: "CompanyYearEndData",
        companyID: string,
        company:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        id: string,
        yearEndStartDate: string,
        yearEndFinishDate: string,
        employees: number,
        turnover: number,
        accountingData:  Array< {
          __typename: "AccountingData",
          id: string,
          yearEndID: string,
          categoryID: string,
          amount: number,
        } | null > | null,
      } | null,
      categoryID: string,
      category:  {
        __typename: "Categories",
        id: string,
        name: string,
        value: number | null,
      } | null,
      amount: number,
    } | null > | null,
  } | null,
};

export type OnDeleteCompanyYearEndDataSubscriptionVariables = {
  companyID?: number | null,
  id?: number | null,
  yearEndStartDate?: string | null,
  yearEndFinishDate?: string | null,
  employees?: number | null,
};

export type OnDeleteCompanyYearEndDataSubscription = {
  onDeleteCompanyYearEndData:  {
    __typename: "CompanyYearEndData",
    companyID: string,
    company:  {
      __typename: "Companies",
      id: string,
      industry: string,
      name: string | null,
      parentID: string | null,
      parent:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      children:  Array< {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    id: string,
    yearEndStartDate: string,
    yearEndFinishDate: string,
    employees: number,
    turnover: number,
    accountingData:  Array< {
      __typename: "AccountingData",
      id: string,
      yearEndID: string,
      yearEndData:  {
        __typename: "CompanyYearEndData",
        companyID: string,
        company:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        id: string,
        yearEndStartDate: string,
        yearEndFinishDate: string,
        employees: number,
        turnover: number,
        accountingData:  Array< {
          __typename: "AccountingData",
          id: string,
          yearEndID: string,
          categoryID: string,
          amount: number,
        } | null > | null,
      } | null,
      categoryID: string,
      category:  {
        __typename: "Categories",
        id: string,
        name: string,
        value: number | null,
      } | null,
      amount: number,
    } | null > | null,
  } | null,
};

export type OnCreateAccountingDataSubscriptionVariables = {
  id?: number | null,
  yearEndID?: number | null,
  categoryID?: number | null,
  amount?: number | null,
};

export type OnCreateAccountingDataSubscription = {
  onCreateAccountingData:  {
    __typename: "AccountingData",
    id: string,
    yearEndID: string,
    yearEndData:  {
      __typename: "CompanyYearEndData",
      companyID: string,
      company:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      id: string,
      yearEndStartDate: string,
      yearEndFinishDate: string,
      employees: number,
      turnover: number,
      accountingData:  Array< {
        __typename: "AccountingData",
        id: string,
        yearEndID: string,
        yearEndData:  {
          __typename: "CompanyYearEndData",
          companyID: string,
          id: string,
          yearEndStartDate: string,
          yearEndFinishDate: string,
          employees: number,
          turnover: number,
        } | null,
        categoryID: string,
        category:  {
          __typename: "Categories",
          id: string,
          name: string,
          value: number | null,
        } | null,
        amount: number,
      } | null > | null,
    } | null,
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    amount: number,
  } | null,
};

export type OnUpdateAccountingDataSubscriptionVariables = {
  id?: number | null,
  yearEndID?: number | null,
  categoryID?: number | null,
  amount?: number | null,
};

export type OnUpdateAccountingDataSubscription = {
  onUpdateAccountingData:  {
    __typename: "AccountingData",
    id: string,
    yearEndID: string,
    yearEndData:  {
      __typename: "CompanyYearEndData",
      companyID: string,
      company:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      id: string,
      yearEndStartDate: string,
      yearEndFinishDate: string,
      employees: number,
      turnover: number,
      accountingData:  Array< {
        __typename: "AccountingData",
        id: string,
        yearEndID: string,
        yearEndData:  {
          __typename: "CompanyYearEndData",
          companyID: string,
          id: string,
          yearEndStartDate: string,
          yearEndFinishDate: string,
          employees: number,
          turnover: number,
        } | null,
        categoryID: string,
        category:  {
          __typename: "Categories",
          id: string,
          name: string,
          value: number | null,
        } | null,
        amount: number,
      } | null > | null,
    } | null,
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    amount: number,
  } | null,
};

export type OnDeleteAccountingDataSubscriptionVariables = {
  id?: number | null,
  yearEndID?: number | null,
  categoryID?: number | null,
  amount?: number | null,
};

export type OnDeleteAccountingDataSubscription = {
  onDeleteAccountingData:  {
    __typename: "AccountingData",
    id: string,
    yearEndID: string,
    yearEndData:  {
      __typename: "CompanyYearEndData",
      companyID: string,
      company:  {
        __typename: "Companies",
        id: string,
        industry: string,
        name: string | null,
        parentID: string | null,
        parent:  {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null,
        children:  Array< {
          __typename: "Companies",
          id: string,
          industry: string,
          name: string | null,
          parentID: string | null,
        } | null > | null,
      } | null,
      id: string,
      yearEndStartDate: string,
      yearEndFinishDate: string,
      employees: number,
      turnover: number,
      accountingData:  Array< {
        __typename: "AccountingData",
        id: string,
        yearEndID: string,
        yearEndData:  {
          __typename: "CompanyYearEndData",
          companyID: string,
          id: string,
          yearEndStartDate: string,
          yearEndFinishDate: string,
          employees: number,
          turnover: number,
        } | null,
        categoryID: string,
        category:  {
          __typename: "Categories",
          id: string,
          name: string,
          value: number | null,
        } | null,
        amount: number,
      } | null > | null,
    } | null,
    categoryID: string,
    category:  {
      __typename: "Categories",
      id: string,
      name: string,
      value: number | null,
    } | null,
    amount: number,
  } | null,
};
