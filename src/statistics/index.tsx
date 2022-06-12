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
      <div
        className="statistic-group">
        <h2 className="title">Offices Carbon Footprint Score</h2>
        <div
          className="list">
          {
            yearEndData && yearEndData.map(yearEndDataItem => {
              return (
                <Statistic
                  filled>
                  <StatisticValue
                    value={getOverallCarbonFootprintScore([yearEndDataItem]).toFixed(1) || 0} />
                  <StatisticHeader
                    title={yearEndDataItem.company?.name || ""}
                    subtitle={`${yearEndDataItem.yearEndStartDate} - ${yearEndDataItem.yearEndFinishDate}`} />
                </Statistic>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Statistics;