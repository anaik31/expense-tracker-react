const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const db = require('./db');
const expenseRoutes = require('./routes/expenses');

app.use(cors());
app.use(express.json());
app.use('/api/expenses', expenseRoutes);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));