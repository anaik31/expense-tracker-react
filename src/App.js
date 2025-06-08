import React, { useState } from 'react';
import Header from './components/Header';
import AddTransactionForm from './components/AddTransactionForm';
import TransactionsList from './components/TransactionList';
import Balance from './components/Balance'
import './styles/App.css';

function App() {

  const [transactions, setTransactions] = useState([]);

  return (
    <div className="app">
      <Header />
      <div className="app-bubble">
        <div className="form-and-list">
          <AddTransactionForm 
          onAddTransaction={newTx => setTransactions([...transactions, newTx])} 
          />
          <TransactionsList 
          transactions={transactions} 
          />
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
