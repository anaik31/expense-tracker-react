import React from 'react';
import '../styles/TransactionList.css';

function TransactionList({ transactions, onDeleteTransaction }) {
  const total = transactions.reduce((sum, tx) => sum + Number(tx.amount), 0);

  if(transactions.length === 0){
    return (
      <div className="transaction-list">
        <h4>Transaction List</h4>
        <p style={{ color: 'white', fontStyle: 'italic' }}>No transactions yet.</p>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      <h4>Transaction List</h4>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id} className="transaction-item">
            <span className="transaction-text">
              {tx.description}: ${tx.amount}
            </span>
            <button
              className="delete-btn"
              onClick={() => onDeleteTransaction(tx.id)}
              aria-label={`Delete ${tx.description}`}
              title="Delete"
            >
              &minus;
            </button>
          </li>
        ))}
      </ul>
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
}



export default TransactionList;
