import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

export default function TransactionHistory({ transactionData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionData.map(transaction => (
          <tr key={transaction.id}>
            <TransactionHistoryItem transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
