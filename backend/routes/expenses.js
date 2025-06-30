const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all expenses
router.get('/', (req, res) => {
  db.query('SELECT * FROM expenses ORDER BY date DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Add new expense
router.post('/', (req, res) => {
  const { description, amount } = req.body;
  const date = new Date(); // current date

  db.query(
    'INSERT INTO expenses (description, amount, date) VALUES (?, ?, ?)',
    [description, amount, date],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: results.insertId, description, amount, date });
    }
  );
});

// Delete an expense by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM expenses WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json({ message: 'Expense deleted', id });
  });
});


module.exports = router;

