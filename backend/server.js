// Import required modules
const express = require('express'); // Web framework for building APIs
const cors = require('cors'); // Middleware to enable Cross-Origin Resource Sharing
require('dotenv').config(); // Loads environment variables from a .env file

// Create an instance of the Express app
const app = express();

// Import the database connection
const db = require('./db'); // Ensures DB is connected when server starts

// Import routes
const expenseRoutes = require('./routes/expenses'); // Handles expense-related API endpoints

// Middleware
app.use(cors()); // Allow requests from different domains (important for frontend-backend communication)
app.use(express.json()); // Parse incoming JSON request bodies

// Mount expense routes at /api/expenses
// Example: GET /api/expenses, POST /api/expenses
app.use('/api/expenses', expenseRoutes);

// Set the server port (5001 is the backend API port)
const PORT = 5001;

// Start the server and listen for incoming requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
