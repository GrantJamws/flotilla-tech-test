/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompanies = /* GraphQL */ `
  subscription OnCreateCompanies(
    $id: Int
    $industry: String
    $name: String
    $parentID: Int
  ) {
    onCreateCompanies(
      id: $id
      industry: $industry
      name: $name
      parentID: $parentID
    ) {
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
export const onUpdateCompanies = /* GraphQL */ `
  subscription OnUpdateCompanies(
    $id: Int
    $industry: String
    $name: String
    $parentID: Int
  ) {
    onUpdateCompanies(
      id: $id
      industry: $industry
      name: $name
      parentID: $parentID
    ) {
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
export const onDeleteCompanies = /* GraphQL */ `
  subscription OnDeleteCompanies(
    $id: Int
    $industry: String
    $name: String
    $parentID: Int
  ) {
    onDeleteCompanies(
      id: $id
      industry: $industry
      name: $name
      parentID: $parentID
    ) {
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
export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories($id: Int, $name: String) {
    onCreateCategories(id: $id, name: $name) {
      id
      name
      value
    }
  }
`;
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories($id: Int, $name: String) {
    onUpdateCategories(id: $id, name: $name) {
      id
      name
      value
    }
  }
`;
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories($id: Int, $name: String) {
    onDeleteCategories(id: $id, name: $name) {
      id
      name
      value
    }
  }
`;
export const onCreateFactors = /* GraphQL */ `
  subscription OnCreateFactors($categoryID: Int, $id: Int, $value: Float) {
    onCreateFactors(categoryID: $categoryID, id: $id, value: $value) {
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
export const onUpdateFactors = /* GraphQL */ `
  subscription OnUpdateFactors($categoryID: Int, $id: Int, $value: Float) {
    onUpdateFactors(categoryID: $categoryID, id: $id, value: $value) {
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
export const onDeleteFactors = /* GraphQL */ `
  subscription OnDeleteFactors($categoryID: Int, $id: Int, $value: Float) {
    onDeleteFactors(categoryID: $categoryID, id: $id, value: $value) {
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
export const onCreateCompanyYearEndData = /* GraphQL */ `
  subscription OnCreateCompanyYearEndData(
    $companyID: Int
    $id: Int
    $yearEndStartDate: AWSDate
    $yearEndFinishDate: AWSDate
    $employees: Int
  ) {
    onCreateCompanyYearEndData(
      companyID: $companyID
      id: $id
      yearEndStartDate: $yearEndStartDate
      yearEndFinishDate: $yearEndFinishDate
      employees: $employees
    ) {
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
export const onUpdateCompanyYearEndData = /* GraphQL */ `
  subscription OnUpdateCompanyYearEndData(
    $companyID: Int
    $id: Int
    $yearEndStartDate: AWSDate
    $yearEndFinishDate: AWSDate
    $employees: Int
  ) {
    onUpdateCompanyYearEndData(
      companyID: $companyID
      id: $id
      yearEndStartDate: $yearEndStartDate
      yearEndFinishDate: $yearEndFinishDate
      employees: $employees
    ) {
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
export const onDeleteCompanyYearEndData = /* GraphQL */ `
  subscription OnDeleteCompanyYearEndData(
    $companyID: Int
    $id: Int
    $yearEndStartDate: AWSDate
    $yearEndFinishDate: AWSDate
    $employees: Int
  ) {
    onDeleteCompanyYearEndData(
      companyID: $companyID
      id: $id
      yearEndStartDate: $yearEndStartDate
      yearEndFinishDate: $yearEndFinishDate
      employees: $employees
    ) {
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
export const onCreateAccountingData = /* GraphQL */ `
  subscription OnCreateAccountingData(
    $id: Int
    $yearEndID: Int
    $categoryID: Int
    $amount: Int
  ) {
    onCreateAccountingData(
      id: $id
      yearEndID: $yearEndID
      categoryID: $categoryID
      amount: $amount
    ) {
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
export const onUpdateAccountingData = /* GraphQL */ `
  subscription OnUpdateAccountingData(
    $id: Int
    $yearEndID: Int
    $categoryID: Int
    $amount: Int
  ) {
    onUpdateAccountingData(
      id: $id
      yearEndID: $yearEndID
      categoryID: $categoryID
      amount: $amount
    ) {
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
export const onDeleteAccountingData = /* GraphQL */ `
  subscription OnDeleteAccountingData(
    $id: Int
    $yearEndID: Int
    $categoryID: Int
    $amount: Int
  ) {
    onDeleteAccountingData(
      id: $id
      yearEndID: $yearEndID
      categoryID: $categoryID
      amount: $amount
    ) {
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
