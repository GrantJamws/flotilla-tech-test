import './styles.scss';

import { useEffect, useState } from 'react';

import { ListCompanyYearEndDataQuery } from '../API';
import { listCompanyYearEndData } from '../graphql/queries';
import { CompanyYearEndData } from '../types';
import callGraphQL from '../helpers/GraphQL';
import { mapListCompanyYearEndData } from '../models/CompanyYearEndData';
import { getOverallCarbonFootprintScore } from '../types/statisticFunctions';

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
      <div>
        <h2>Overall Carbon Footprint Score</h2>
        <h3>{carbonFootprintScore?.toFixed(1)}</h3>
      </div>
      <div>
        <h2>Offices Carbon Footprint Score</h2>
        {
          yearEndData && yearEndData.map(yearEndDataItem => {
            return (
              <div>
                <h3>{yearEndDataItem.company?.name} Carbon Footprint Score</h3>
                <h4>{getOverallCarbonFootprintScore([yearEndDataItem])}</h4>
                <p>{`${yearEndDataItem.yearEndStartDate} - ${yearEndDataItem.yearEndFinishDate}`}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Statistics;