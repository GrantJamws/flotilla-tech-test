import './styles.scss';

import { useEffect, useState } from 'react';

import { ListCompanyYearEndDataQuery } from '../API';
import { listCompanyYearEndData } from '../graphql/queries';
import { CompanyYearEndData } from '../types';
import callGraphQL from '../helpers/GraphQL';
import { mapListCompanyYearEndData } from '../models/CompanyYearEndData';
import { getOverallCarbonFootprintScore } from '../types/statisticFunctions';
import Statistic from '../components/Statistic';
import StatisticHeader from '../components/Statistic/Header';
import StatisticValue from '../components/Statistic/Value';
import OfficeScores from './OfficeScores';

interface StatisticsProp {
  companyIDs: number[];
}

const Statistics: React.FC<StatisticsProp> = ({ companyIDs }) => {
  const [yearEndData, setYearEndData] = useState<CompanyYearEndData[]>();
  const [carbonFootprintScore, setCarbonFootprintScore] = useState<number>();

  const getData = async () => {
    await callGraphQL<ListCompanyYearEndDataQuery>(listCompanyYearEndData, {filter: {companyID: {in: companyIDs}}})
      .then((result) => {
        setYearEndData(mapListCompanyYearEndData(result));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    companyIDs.length > 0 && getData();
  }, []);

  useEffect(() => {
    yearEndData && setCarbonFootprintScore(getOverallCarbonFootprintScore(yearEndData));
  }, [yearEndData]);

  return (
    <div className="statistics">
      <Statistic>
        <StatisticValue
          value={carbonFootprintScore?.toFixed(1) || 0} />
        <StatisticHeader
          title="Overall Carbon Footprint Score"/>
      </Statistic>
      {
        yearEndData &&
            <OfficeScores
              data={yearEndData}/>
      }
    </div>
  );
}

export default Statistics;