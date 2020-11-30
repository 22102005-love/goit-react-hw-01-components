import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.headString}>
          <th className={s.column}>Type</th>
          <th className={s.column}>Amount</th>
          <th className={s.column}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={s.string} key={item.id}>
            <td className={s.column}>{item.type}</td>
            <td className={s.column}>{item.amount}</td>
            <td className={s.column}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propType = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
