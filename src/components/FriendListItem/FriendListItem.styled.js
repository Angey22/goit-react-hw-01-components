import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0 8px 16px;
  border-radius: 2px;
  width: 100%;

  box-shadow: ${props => props.theme.shadows.regular};
`;

export const OnlineIndicator = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 16px;

  border-radius: 100%;
  background-color: ${props => props.isOnline ? 'green' : 'red'};
`;

export const FriendImage = styled.img`
  width: 96px;
  height: 96px;
  margin-right: 18px;
  border-radius: 6px;
`;

export const FriendName = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.spacing(8)};
  color: ${props => props.theme.colors.dark};
`;
