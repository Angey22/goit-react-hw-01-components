import PropTypes from 'prop-types';

import { StatisticBox, StatisticLabel, StatisticPercentage } from './StatisticItem.styled';

import { getRandomHexColor } from '../../utils/randomColor'

export const StatisticItem = ({label, percentage}) => {
  return (
    <StatisticBox style={{
      backgroundColor: getRandomHexColor(),
    }}>
      <StatisticLabel>{label}</StatisticLabel>
      <StatisticPercentage>{percentage}%</StatisticPercentage>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};


