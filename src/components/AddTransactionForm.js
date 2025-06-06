import React, { useState } from 'react'
import '../styles/AddTransactionForm.css'

function AddTransactionForm() {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // stop page refresh

    console.log("Description: ", description);
    console.log("Amount: ", amount);

    setDescription(''); // reset description input
    setAmount(''); // reset amount input
  }

  return (
    <div className="form-bubble">
      <h4>Add Transaction Form</h4>
      <form onSubmit={handleSubmit}>
        <label style={{ marginBottom: '1rem', display: 'block' }}>
          Enter transaction name:
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>

        <label style={{ display: 'block' }}>
          Enter transaction amount:
          <input
            className="form-input"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </form>
    </div>
  );
}

export default AddTransactionForm;