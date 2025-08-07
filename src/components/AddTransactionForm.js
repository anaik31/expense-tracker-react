// Import necessary modules from React
import React, { useState } from 'react';

// Import component-specific CSS
import '../styles/AddTransactionForm.css';

// Functional component definition
function AddTransactionForm({ onAddTransaction }) {
  // React state for the transaction description input
  const [description, setDescription] = useState('');

  // React state for the transaction amount input
  const [amount, setAmount] = useState('');

  /**
   * Handles form submission:
   * - Prevents default form behavior (page reload)
   * - Calls the passed-in onAddTransaction function
   * - Clears the form inputs
   */
  function handleSubmit(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Pass the new transaction object to the parent via callback
    onAddTransaction({ description, amount: Number(amount) });

    // Reset input fields
    setDescription('');
    setAmount('');
  }

  return (
    <div className="form-bubble">
      <h4>Add Transaction Form</h4>

      {/* Form element handles submit */}
      <form onSubmit={handleSubmit}>

        {/* Transaction Description Input */}
        <label style={{ marginBottom: '1rem', display: 'block' }}>
          Enter transaction name:
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>

        {/* Transaction Amount Input */}
        <label style={{ display: 'block' }}>
          Enter transaction amount:
          <input
            className="form-input"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>

        {/* Submit Button */}
        <button type="submit" style={{ marginTop: '1rem' }}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

// Export the component so it can be used in App.js
export default AddTransactionForm;