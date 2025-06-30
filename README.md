📊 Expense Tracker App
A full-stack Expense Tracker built with React, Node.js, Express, and MySQL. Track your income and expenses with an intuitive interface that stores your data in a real database.

🚀 Features

✅ Add transactions (income or expenses)
✅ View total balance, income, and expenses
✅ Delete transactions
✅ Data stored persistently in a MySQL database
✅ RESTful API with Express
✅ Clean and responsive UI with React


🧠 Tech Stack

Frontend

  React (Vite or Create React App)
  CSS modules or plain CSS

Backend

  Node.js + Express
  MySQL (using mysql2 package)

Hosting

  `Frontend: localhost:3000`
  `Backend: localhost:5001/api/expenses`

🔧 Backend Setup

Navigate to the backend folder:
`cd backend`

Install dependencies:
`npm install`

Create a .env file in the backend folder:
`DB_HOST=your-db-host`
`DB_USER=your-db-user`
`DB_PASS=your-db-password`
`DB_NAME=your-db-name`
`DB_PORT=3306`

Start the server:
`node server.js`
Server runs on http://localhost:5001

🌐 Frontend Setup

Navigate to the frontend folder:
`cd src`

Install dependencies:
`npm install`

In frontend/package.json, add this line to connect to backend:
"proxy": "http://localhost:5001"

Start your frontend:
`npm start`

💾 MySQL Database Schema

CREATE TABLE expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255),
  amount DECIMAL(10, 2),
  date DATETIME DEFAULT CURRENT_TIMESTAMP
);

🔄 API Endpoints

GET /api/expenses – Get all transactions
POST /api/expenses – Add a new transaction
DELETE /api/expenses/:id – Delete a transaction

✅ Future Improvements

Add categories (e.g., food, utilities, rent)
Monthly chart or pie chart of expenses
User authentication
Export transactions as CSV

👨‍💻 Author
Arpeet Naik
