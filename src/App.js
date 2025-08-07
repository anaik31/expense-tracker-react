// React imports
import React, { useState, useEffect } from 'react';

// Component imports
import Header from './components/Header';
import AddTransactionForm from './components/AddTransactionForm';
import TransactionsList from './components/TransactionList';
import Balance from './components/Balance';

// Stylesheet import
import './styles/App.css';

// Root component of the application
function App() {
  // State to hold the list of transactions
  const [transactions, setTransactions] = useState([]);

  /**
   * useEffect to run once on component mount.
   * This fetches the list of expenses from the backend API.
   */
  useEffect(() => {
    fetch('/api/expenses') // Make a GET request to the backend
      .then(res => res.json()) // Parse the JSON response
      .then(data => setTransactions(data)) // Store the transactions in state
      .catch(err => console.error('Error fetching transactions:', err)); // Log any errors
  }, []); // Empty dependency array = run only once on mount

  /**
   * Handler function to add a new transaction
   * @param {Object} newTx - The new transaction to be added
   */
  const handleAddTransaction = (newTx) => {
    fetch('/api/expenses', {
      method: 'POST', // HTTP method
      headers: { 'Content-Type': 'application/json' }, // Indicate JSON payload
      body: JSON.stringify(newTx) // Convert JS object to JSON
    })
      .then(res => res.json()) // Get the saved transaction (usually includes an ID)
      .then(savedTx => {
        // Update state by adding the new transaction to the beginning of the list
        setTransactions(prev => [savedTx, ...prev]);
      })
      .catch(err => console.error('Failed to add transaction:', err));
  };

  /**
   * Handler function to delete a transaction
   * @param {string} id - The ID of the transaction to delete
   */
  const handleDeleteTransaction = (id) => {
    fetch(`/api/expenses/${id}`, {
      method: 'DELETE', // HTTP method
    })
      .then(res => {
        if (!res.ok) throw new Error('Delete failed'); // Check for a successful response
        // Remove the deleted transaction from local state
        setTransactions(prev => prev.filter(tx => tx.id !== id));
      })
      .catch(err => console.error(err));
  };

  // The main UI returned by the App component
  return (
    <div className="app">
      {/* Static header component */}
      <Header />

      {/* Bubble container for the form and balance display */}
      <div className="app-bubble">
        <div className="form-and-list">
          {/* Form to add new transactions, passes handler as prop */}
          <AddTransactionForm onAddTransaction={handleAddTransaction} />

          {/* Displays list of transactions and provides delete functionality */}
          <TransactionsList
            transactions={transactions}
            onDeleteTransaction={handleDeleteTransaction}
          />
        </div>

        {/* Displays current balance based on transactions */}
        <Balance
          transactions={transactions}
          startingBalance={31307.97} // You can customize this as needed
          asOfDate={new Date().toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
          })}
        />
      </div>
    </div>
  );
}

// Export the App component as default
export default App;
