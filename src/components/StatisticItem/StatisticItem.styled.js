import styled from '@emotion/styled';


export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 16px 16px 16px;

  width: 100%;

  &:first-of-type {
    border-radius: 0 0 0 4px;
  }

  &:last-of-type {
    border-radius: 0 0 4px 0 ;
  }
`;

export const StatisticLabel = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  width: 32px;

  text-align: center;
  font-size: ${props => props.theme.spacing(3)};
  font-weight: 400;
  color: ${props => props.theme.colors.white};
`;

export const StatisticPercentage = styled.span`
  display: inline-block;
  text-align: center;
  font-size: ${props => props.theme.spacing(4)};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`;
