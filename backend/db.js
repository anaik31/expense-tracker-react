// Import the MySQL2 library for database connections
const mysql = require('mysql2');

// Load environment variables from the .env file
require('dotenv').config();

// Create a connection to the MySQL database using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,      // Database server address
  user: process.env.DB_USER,      // Database username
  password: process.env.DB_PASS,  // Database password
  database: process.env.DB_NAME,  // Name of the database to connect to
  port: process.env.DB_PORT       // Database port (usually 3306 for MySQL)
});

// Attempt to connect to the database
db.connect(err => {
  if (err) {
    // Log an error if the connection fails
    console.error('MySQL connection failed:', err.message);
    throw err; // Stop execution if connection cannot be established
  }
  console.log('MySQL Connected!'); // Confirm successful connection
});

// Export the database connection for use in other files
module.exports = db;
