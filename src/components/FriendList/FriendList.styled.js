import styled from '@emotion/styled';

export const FriendListBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  margin: 0 auto;
  gap: 20px;

  width: 420px;

  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.regular};
`;
