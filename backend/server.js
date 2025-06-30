const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const db = require('./db');
const expenseRoutes = require('./routes/expenses');

app.use(cors());
app.use(express.json());
app.use('/api/expenses', expenseRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/api/test-db', (req, res) => {
  db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
      console.error('Test query failed:', err.message);
      return res.status(500).json({ success: false, message: 'Database connection failed', error: err.message });
    }
    res.json({ success: true, message: 'Database connected successfully!', result: results[0].result });
  });
});
