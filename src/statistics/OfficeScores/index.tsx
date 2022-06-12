import './styles.scss';

import { useEffect, useState } from 'react';
import { CompanyYearEndData } from '../../types';
import Statistic from '../../components/Statistic';
import StatisticValue from '../../components/Statistic/Value';
import { getOverallCarbonFootprintScore } from '../../types/statisticFunctions';
import StatisticHeader from '../../components/Statistic/Header';
import { Ascend, Descend } from 'grommet-icons';
import IconButton from '../../components/IconButton';

interface OfficeScoresProps {
  data: CompanyYearEndData[];
}

const OfficeScores: React.FC<OfficeScoresProps> = ({ data }) => {
  const [orderedData, setOrderedData] = useState<CompanyYearEndData[]>(data);
  const [sortDesc, setSortDesc] = useState(true);

  const orderData = () => {
    if(sortDesc){
      setOrderedData(data.sort((a, b) => b.carbonFootprintScore - a.carbonFootprintScore));
    } else {
      setOrderedData(data.sort((a, b) => a.carbonFootprintScore - b.carbonFootprintScore));
    }
  };

  useEffect(() => {
    orderData();
  }, [sortDesc]);

  const handleSortClick = () => {
    setSortDesc(!sortDesc);
  };

  return (
    <div
      className="office-scores">
      <div
        className="group-header">
        <h2 className="title">Offices Carbon Footprint Score</h2>
        <IconButton
          onClick={handleSortClick}
          icon={sortDesc ? <Ascend /> : <Descend />} />
      </div>
      <div
        className="list">
        {
          orderedData.map(dataItem => {
            return (
              <Statistic
                filled>
                <StatisticValue
                  value={dataItem.carbonFootprintScore || 0} />
                <StatisticHeader
                  title={dataItem.company?.name || ""}
                  subtitle={`${dataItem.yearEndStartDate} - ${dataItem.yearEndFinishDate}`} />
              </Statistic>
            );
          })
        }
      </div>
    </div>
  );
}

export default OfficeScores;