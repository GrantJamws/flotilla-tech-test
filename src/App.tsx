import './App.scss';

import { useEffect, useState } from 'react';

import { ListCompaniesQuery } from './API';
import NavBar from './components/NavBar';
import callGraphQL from './helpers/GraphQL';
import { listCompanies } from './graphql/queries';
import { mapListCompanies } from './models/Companies';
import { Company } from './types';
import Statistics from './statistics';

const App = () => {
  const companyID = 1;
  const [company, setCompany] = useState<Company>();
  const [companyIDs, setCompanyIDs] = useState<number[]>();

  const getCompany = async () => {
    await callGraphQL<ListCompaniesQuery>(listCompanies, {filter: {id: {eq: companyID}}})
      .then((result) => {
        const companiesList = mapListCompanies(result);
        setCompany(companiesList[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCompany();
  }, []);

  useEffect(() => {
    if (company) {
      const childrenIDs = company.childrenCompanies?.map(childrenCompany => childrenCompany.id) || [];
      setCompanyIDs([...childrenIDs, company.id]);
    }
  }, [company]);

  return (
    <div className="App">
      <NavBar />
      {
        companyIDs &&
          <Statistics
            companyIDs={companyIDs} />
      }
    </div>
  );
}

export default App;