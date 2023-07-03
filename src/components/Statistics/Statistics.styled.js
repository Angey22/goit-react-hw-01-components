import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  display: inline-block;

  margin-right: auto;
  margin-left: auto;

  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadows.regular};

  padding-top: ${props => {
    if(props.cardTitle) {
      return '30px';
    } else {return 'none';
  }
    }};
`;

export const StatisticTitle = styled.h2`
  margin-bottom: 30px;

  font-size: ${props => props.theme.spacing(6)};
  font-weight: 500;
  text-transform: uppercase;

  color: ${props => props.theme.colors.dark};

  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
