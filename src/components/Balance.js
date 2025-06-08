import React from 'react';

function Balance({ transactions, startingBalance}) {
  const amounts = transactions.map(tx => Number(tx.amount));
  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, curr) => acc + curr, 0);

  const expenses = amounts
    .filter(amount => amount < 0)
    .reduce((acc, curr) => acc + curr, 0);

  const balance = startingBalance + income + expenses;

  const asOfDate = 'June 2025'

  return (
    <div className="totals">
      <h2>Balance: ${balance.toFixed(2)}{' '}
        <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
          (as of {asOfDate})
        </span>
      </h2>
      <p>Income: ${income.toFixed(2)}</p>
      <p>Expenses: ${Math.abs(expenses).toFixed(2)}</p>
    </div>
  );
}

export default Balance;
