import PropTypes from 'prop-types';

import { BaseTable, THead, Td, Th, Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
  return (
    <BaseTable>
  <THead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </THead>

  <tbody>
  {items.map((item) => {
    return (
      <Tr key={item.id}>
        <Td>{item.type}</Td>
        <Td>{item.amount}</Td>
        <Td>{item.currency}</Td>
      </Tr>
    );
  })}
  </tbody>
</BaseTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
