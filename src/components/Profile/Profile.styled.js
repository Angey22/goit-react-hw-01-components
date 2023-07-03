import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${props => props.theme.spacing(62.5)};
  height: ${props => props.theme.spacing(82.5)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(2)};
  background: ${props => props.theme.colors.white};
`;

export const Description = styled.div`

  width: 100%;
  height: ${props => props.theme.spacing(64)};
  padding-top: 30px;
`;

export const AvatarImg = styled.img`
  width: ${props => props.theme.spacing(25)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;

  border-radius: ${props => props.theme.spacing(25)};
  background: ${props => props.theme.colors.gray};
`;

export const NameText = styled.p`
  margin-bottom: 14px;

  font-weight: 500;
  text-align: center;
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.profDark};
`;

export const TagText = styled.p`
  margin-bottom: 12px;

  font-weight: 400;
  text-align: center;
  font-size: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.profGray};
`;

export const LocationText = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.profGray};
`;

export const StatsList = styled.ul`
  display: flex;

  border-top: 1px solid ${props => props.theme.colors.gray};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 18px;
  padding-bottom: 20px;
  width: 100%;
  background-color: #d0ddc9;

  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.gray};
  }
`;

export const StatsItemLabel = styled.span`
  display: inline-block;
  margin-bottom: 8px;

  font-weight: 400;
  text-align: center;
  font-size: ${props => props.theme.spacing(3)};
  color: #768696;
`;

export const StatsItemQuantity = styled.span`
  display: inline-block;
  font-weight: 500;
  text-align: center;
  font-size: ${props => props.theme.spacing(3)};
  color: #1f3349;
`;
