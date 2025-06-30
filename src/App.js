import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTransactionForm from './components/AddTransactionForm';
import TransactionsList from './components/TransactionList';
import Balance from './components/Balance'
import './styles/App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions on mount
  useEffect(() => {
    fetch('/api/expenses')
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error('Error fetching transactions:', err));
  }, []);

  // Handler to add transaction: POST to backend, then update state
  const handleAddTransaction = (newTx) => {
    fetch('/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTx)
    })
      .then(res => res.json())
      .then(savedTx => {
        setTransactions(prev => [savedTx, ...prev]);
      })
      .catch(err => console.error('Failed to add transaction:', err));
  };

  const handleDeleteTransaction = (id) => {
    fetch(`/api/expenses/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) throw new Error('Delete failed');
        // Remove from local state
        setTransactions(prev => prev.filter(tx => tx.id !== id));
      })
      .catch(err => console.error(err));
  };


  return (
    <div className="app">
      <Header />
      <div className="app-bubble">
        <div className="form-and-list">
          <AddTransactionForm onAddTransaction={handleAddTransaction} />
          <TransactionsList transactions={transactions} onDeleteTransaction={handleDeleteTransaction} />
        </div>
        <Balance
          transactions={transactions}
          startingBalance={31307.97}
          asOfDate="June 2025"
        />
      </div>
    </div>
  );
}

export default App;
