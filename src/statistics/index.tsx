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
      <div
        className="statistic">
        <div
          className="header">
          <h3 className="title">
            Overall Carbon Footprint Score
          </h3>
        </div>
        <h4 className="value">
          {carbonFootprintScore?.toFixed(1)}
        </h4>
      </div>
      <div
        className="statistic-group">
        <h2 className="title">Offices Carbon Footprint Score</h2>
        <div
          className="list">
          {
            yearEndData && yearEndData.map(yearEndDataItem => {
              return (
                <div
                className="statistic">
                  <h4 className="value">
                    {getOverallCarbonFootprintScore([yearEndDataItem]).toFixed(1)}
                  </h4>
                  <div
                    className="header">
                    <h3 className="title">
                      {yearEndDataItem.company?.name}
                    </h3>
                    <p className="subtitle">
                      {`${yearEndDataItem.yearEndStartDate} - ${yearEndDataItem.yearEndFinishDate}`}
                    </p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Statistics;