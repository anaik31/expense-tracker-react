const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all expenses
router.get('/', (req, res) => {
  db.query('SELECT * FROM expenses', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Add an expense
router.post('/', (req, res) => {
  const { description, amount, date } = req.body;
  const sql = 'INSERT INTO expenses (description, amount, date) VALUES (?, ?, ?)';
  db.query(sql, [description, amount, date], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, description, amount, date });
  });
});

module.exports = router;
