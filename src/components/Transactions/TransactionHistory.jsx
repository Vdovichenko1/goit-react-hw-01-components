import PropTypes from 'prop-types';
import { Transaction, HeaderTable, ListTransactions } from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
    return (
        <Transaction>
  <thead>
    <HeaderTable>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </HeaderTable>
  </thead>

  <ListTransactions>
    {items.map(({id, type,amount,currency}) => <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)}
  </ListTransactions>
</Transaction>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired})
  ).isRequired,
  };