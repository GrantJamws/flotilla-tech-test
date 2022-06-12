/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompanies = /* GraphQL */ `
  mutation CreateCompanies($input: CreateCompaniesInput!) {
    createCompanies(input: $input) {
      id
      industry
      name
      parentID
      parent {
        id
        industry
        name
        parentID
        parent {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        children {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
      }
      children {
        id
        industry
        name
        parentID
        parent {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        children {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
      }
    }
  }
`;
export const updateCompanies = /* GraphQL */ `
  mutation UpdateCompanies($input: UpdateCompaniesInput!) {
    updateCompanies(input: $input) {
      id
      industry
      name
      parentID
      parent {
        id
        industry
        name
        parentID
        parent {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        children {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
      }
      children {
        id
        industry
        name
        parentID
        parent {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        children {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
      }
    }
  }
`;
export const deleteCompanies = /* GraphQL */ `
  mutation DeleteCompanies($input: DeleteCompaniesInput!) {
    deleteCompanies(input: $input) {
      id
      industry
      name
      parentID
      parent {
        id
        industry
        name
        parentID
        parent {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        children {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
      }
      children {
        id
        industry
        name
        parentID
        parent {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        children {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
      }
    }
  }
`;
export const createCategories = /* GraphQL */ `
  mutation CreateCategories($input: CreateCategoriesInput!) {
    createCategories(input: $input) {
      id
      name
      value
    }
  }
`;
export const updateCategories = /* GraphQL */ `
  mutation UpdateCategories($input: UpdateCategoriesInput!) {
    updateCategories(input: $input) {
      id
      name
      value
    }
  }
`;
export const deleteCategories = /* GraphQL */ `
  mutation DeleteCategories($input: DeleteCategoriesInput!) {
    deleteCategories(input: $input) {
      id
      name
      value
    }
  }
`;
export const createFactors = /* GraphQL */ `
  mutation CreateFactors($input: CreateFactorsInput!) {
    createFactors(input: $input) {
      categoryID
      category {
        id
        name
        value
      }
      id
      value
    }
  }
`;
export const updateFactors = /* GraphQL */ `
  mutation UpdateFactors($input: UpdateFactorsInput!) {
    updateFactors(input: $input) {
      categoryID
      category {
        id
        name
        value
      }
      id
      value
    }
  }
`;
export const deleteFactors = /* GraphQL */ `
  mutation DeleteFactors($input: DeleteFactorsInput!) {
    deleteFactors(input: $input) {
      categoryID
      category {
        id
        name
        value
      }
      id
      value
    }
  }
`;
export const createCompanyYearEndData = /* GraphQL */ `
  mutation CreateCompanyYearEndData($input: CreateCompanyYearEndDataInput!) {
    createCompanyYearEndData(input: $input) {
      companyID
      company {
        id
        industry
        name
        parentID
        parent {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        children {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
      }
      id
      yearEndStartDate
      yearEndFinishDate
      employees
      turnover
      accountingData {
        id
        yearEndID
        yearEndData {
          companyID
          company {
            id
            industry
            name
            parentID
          }
          id
          yearEndStartDate
          yearEndFinishDate
          employees
          turnover
          accountingData {
            id
            yearEndID
            categoryID
            amount
          }
        }
        categoryID
        category {
          id
          name
          value
        }
        amount
      }
    }
  }
`;
export const updateCompanyYearEndData = /* GraphQL */ `
  mutation UpdateCompanyYearEndData($input: UpdateCompanyYearEndDataInput!) {
    updateCompanyYearEndData(input: $input) {
      companyID
      company {
        id
        industry
        name
        parentID
        parent {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        children {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
      }
      id
      yearEndStartDate
      yearEndFinishDate
      employees
      turnover
      accountingData {
        id
        yearEndID
        yearEndData {
          companyID
          company {
            id
            industry
            name
            parentID
          }
          id
          yearEndStartDate
          yearEndFinishDate
          employees
          turnover
          accountingData {
            id
            yearEndID
            categoryID
            amount
          }
        }
        categoryID
        category {
          id
          name
          value
        }
        amount
      }
    }
  }
`;
export const deleteCompanyYearEndData = /* GraphQL */ `
  mutation DeleteCompanyYearEndData($input: DeleteCompanyYearEndDataInput!) {
    deleteCompanyYearEndData(input: $input) {
      companyID
      company {
        id
        industry
        name
        parentID
        parent {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        children {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
      }
      id
      yearEndStartDate
      yearEndFinishDate
      employees
      turnover
      accountingData {
        id
        yearEndID
        yearEndData {
          companyID
          company {
            id
            industry
            name
            parentID
          }
          id
          yearEndStartDate
          yearEndFinishDate
          employees
          turnover
          accountingData {
            id
            yearEndID
            categoryID
            amount
          }
        }
        categoryID
        category {
          id
          name
          value
        }
        amount
      }
    }
  }
`;
export const createAccountingData = /* GraphQL */ `
  mutation CreateAccountingData($input: CreateAccountingDataInput!) {
    createAccountingData(input: $input) {
      id
      yearEndID
      yearEndData {
        companyID
        company {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        id
        yearEndStartDate
        yearEndFinishDate
        employees
        turnover
        accountingData {
          id
          yearEndID
          yearEndData {
            companyID
            id
            yearEndStartDate
            yearEndFinishDate
            employees
            turnover
          }
          categoryID
          category {
            id
            name
            value
          }
          amount
        }
      }
      categoryID
      category {
        id
        name
        value
      }
      amount
    }
  }
`;
export const updateAccountingData = /* GraphQL */ `
  mutation UpdateAccountingData($input: UpdateAccountingDataInput!) {
    updateAccountingData(input: $input) {
      id
      yearEndID
      yearEndData {
        companyID
        company {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        id
        yearEndStartDate
        yearEndFinishDate
        employees
        turnover
        accountingData {
          id
          yearEndID
          yearEndData {
            companyID
            id
            yearEndStartDate
            yearEndFinishDate
            employees
            turnover
          }
          categoryID
          category {
            id
            name
            value
          }
          amount
        }
      }
      categoryID
      category {
        id
        name
        value
      }
      amount
    }
  }
`;
export const deleteAccountingData = /* GraphQL */ `
  mutation DeleteAccountingData($input: DeleteAccountingDataInput!) {
    deleteAccountingData(input: $input) {
      id
      yearEndID
      yearEndData {
        companyID
        company {
          id
          industry
          name
          parentID
          parent {
            id
            industry
            name
            parentID
          }
          children {
            id
            industry
            name
            parentID
          }
        }
        id
        yearEndStartDate
        yearEndFinishDate
        employees
        turnover
        accountingData {
          id
          yearEndID
          yearEndData {
            companyID
            id
            yearEndStartDate
            yearEndFinishDate
            employees
            turnover
          }
          categoryID
          category {
            id
            name
            value
          }
          amount
        }
      }
      categoryID
      category {
        id
        name
        value
      }
      amount
    }
  }
`;
