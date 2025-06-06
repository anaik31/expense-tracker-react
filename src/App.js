import React, {useState} from 'react';
import Header from './components/Header';
import AddTransactionForm from './components/AddTransactionForm';
import TransactionsList from './components/TransactionList';
import './styles/App.css';

function App() {

  const[transactions, setTransactions] = useState([]);

  return (
    <div className = "app">
    <Header/>
    <div className="app-bubble">
    <AddTransactionForm/>
    <TransactionsList transactions={transactions}/>
    </div>
    </div>
  );
}

export default App;
