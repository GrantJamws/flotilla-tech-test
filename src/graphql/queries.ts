/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompanies = /* GraphQL */ `
  query GetCompanies($id: ID!) {
    getCompanies(id: $id) {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: TableCompaniesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!, $name: String!) {
    getCategories(id: $id, name: $name) {
      id
      name
      value
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: TableCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        value
      }
      nextToken
    }
  }
`;
export const getFactors = /* GraphQL */ `
  query GetFactors($id: ID!, $categoryID: ID!) {
    getFactors(id: $id, categoryID: $categoryID) {
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
export const listFactors = /* GraphQL */ `
  query ListFactors(
    $filter: TableFactorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFactors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        categoryID
        category {
          id
          name
          value
        }
        id
        value
      }
      nextToken
    }
  }
`;
export const getCompanyYearEndData = /* GraphQL */ `
  query GetCompanyYearEndData($id: ID!, $companyID: ID!) {
    getCompanyYearEndData(id: $id, companyID: $companyID) {
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
export const listCompanyYearEndData = /* GraphQL */ `
  query ListCompanyYearEndData(
    $filter: TableCompanyYearEndDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyYearEndData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAccountingData = /* GraphQL */ `
  query GetAccountingData($id: ID!, $yearEndID: ID!) {
    getAccountingData(id: $id, yearEndID: $yearEndID) {
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
export const listAccountingData = /* GraphQL */ `
  query ListAccountingData(
    $filter: TableAccountingDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountingData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
