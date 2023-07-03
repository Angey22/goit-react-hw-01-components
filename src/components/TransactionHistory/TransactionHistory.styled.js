import styled from '@emotion/styled';

export const BaseTable = styled.table`
  width: 872px;
  margin: 0 auto;
  border-collapse: collapse;

  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;

  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

export const THead = styled.thead`
  color: ${({ theme }) => theme.colors.white};
  background-color: #00bcd5;
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.dark};
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
`;

export const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;
