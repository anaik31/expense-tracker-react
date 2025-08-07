// Import React
import React from 'react';

// Balance component receives the transaction list and starting balance as props
function Balance({ transactions, startingBalance }) {
  // Extract the amount from each transaction and convert it to a number
  const amounts = transactions.map(tx => Number(tx.amount));

  // Sum of all positive amounts = total income
  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, curr) => acc + curr, 0);

  // Sum of all negative amounts = total expenses (will be negative)
  const expenses = amounts
    .filter(amount => amount < 0)
    .reduce((acc, curr) => acc + curr, 0);

  // Calculate final balance by adding income and expenses to the starting balance
  const balance = startingBalance + income + expenses;

  // Static date (could be dynamic or passed as a prop instead)
  const asOfDate = 'June 2025';

  // Render the balance summary
  return (
    <div className="totals">
      {/* Balance with date */}
      <h2>
        Balance: ${balance.toFixed(2)}{' '}
        <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
          (as of {asOfDate})
        </span>
      </h2>

      {/* Income and expenses summary */}
      <p>Income: ${income.toFixed(2)}</p>
      <p>Expenses: ${Math.abs(expenses).toFixed(2)}</p>
      {/* Expenses are made positive using Math.abs for cleaner display */}
    </div>
  );
}

// Export component for use in App.js
export default Balance;
