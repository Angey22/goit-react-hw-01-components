import PropTypes from 'prop-types';

// import { StatisticItem } from 'components';

import { StatisticsList, StatisticTitle, StatisticsCard } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
  return (
    <StatisticsCard cardTitle={title}>
      {title&&<StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        <li>mhgmjghj</li>
        {/* {stats.map((item, index)=> <StatisticItem key={item.id } title={item.title} total={item.total} icon={icons[index]}/>)} */}
      </StatisticsList>
    </StatisticsCard>
  );
};

Statistics.propTypes={
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired
};
