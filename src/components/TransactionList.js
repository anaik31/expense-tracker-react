// Import React
import React from 'react';

// Import CSS styles specific to the transaction list
import '../styles/TransactionList.css';

// Functional component that takes transactions and a delete handler as props
function TransactionList({ transactions, onDeleteTransaction }) {
  // Calculate the total balance by summing all transaction amounts
  const total = transactions.reduce((sum, tx) => sum + Number(tx.amount), 0);

  // If there are no transactions, show a friendly message
  if (transactions.length === 0) {
    return (
      <div className="transaction-list">
        <h4>Transaction List</h4>
        <p style={{ color: 'white', fontStyle: 'italic' }}>No transactions yet.</p>
      </div>
    );
  }

  // Render the list of transactions and the total
  return (
    <div className="transaction-list">
      <h4>Transaction List</h4>
      <ul>
        {/* Map over transactions and display each as a list item */}
        {transactions.map(tx => (
          <li key={tx.id} className="transaction-item">
            {/* Show transaction description and amount */}
            <span className="transaction-text">
              {tx.description}: ${tx.amount}
            </span>

            {/* Delete button calls onDeleteTransaction with this transaction's id */}
            <button
              className="delete-btn"
              onClick={() => onDeleteTransaction(tx.id)}
              aria-label={`Delete ${tx.description}`} // Accessibility label
              title="Delete" // Tooltip text
            >
              &minus; {/* Minus sign to indicate deletion */}
            </button>
          </li>
        ))}
      </ul>

      {/* Show total amount formatted to 2 decimals */}
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
}

// Export component for use in App.js
export default TransactionList;
