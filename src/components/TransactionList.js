import React from 'react';
import '../styles/TransactionList.css'

function TransactionList({transactions}){

  const total = transactions.reduce((sum, tx) => sum + Number(tx.amount), 0);

  return(
    <div className = "transaction-list">
    <h4>Transaction List</h4>
    <ul>
      {transactions.map((tx, index) => (
        <li  key = {index}>
          {tx.description}: ${tx.amount}
        </li>
      ))}
    </ul>
    <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
}

export default TransactionList;