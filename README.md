# 📊 Expense Tracker App

A full-stack Expense Tracker built with **React**, **Node.js**, **Express**, and **MySQL**.  
Track your income and expenses with an intuitive interface that stores your data in a real database.

---

## 🚀 Features

- ✅ Add transactions (income or expenses)  
- ✅ View total balance, income, and expenses  
- ✅ Delete transactions  
- ✅ Data stored persistently in a MySQL database  
- ✅ RESTful API with Express  
- ✅ Clean and responsive UI with React  

---

## 🧠 Tech Stack

**Frontend**

- React (Vite or Create React App)
- CSS modules or plain CSS

**Backend**

- Node.js + Express  
- MySQL (using `mysql2` package)

**Hosting**

- Frontend: `http://localhost:3000`  
- Backend: `http://localhost:5001/api/expenses`

---

## 🔧 Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd backend

2. Install dependencies:

   ```bash
   npm install

3. Create a .env file in the backend folder:

   ```bash
   DB_HOST=your-db-host
   DB_USER=your-db-user
   DB_PASS=your-db-password
   DB_NAME=your-db-name
   DB_PORT=3306

4. Start the server:

   ```bash
   node server.js

Server runs on http://localhost:5001

## 🌐 Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd src

2. Install dependencies:

   ```bash
   npm install

3. In frontend/package.json, add this line to connect to backend:

   ```bash
   "proxy": "http://localhost:5001"

4. Start your frontend:

   ```bash
   npm start

## 💾 MySQL Database Schema

1. Create your SQL table with the following schema:

   ```sql
   CREATE TABLE expenses (
     id INT AUTO_INCREMENT PRIMARY KEY,
     description VARCHAR(255),
     amount DECIMAL(10, 2),
     date DATETIME DEFAULT CURRENT_TIMESTAMP
   );


## 🔄 API Endpoints

1. GET /api/expenses – Get all transactions
2. POST /api/expenses – Add a new transaction
3. DELETE /api/expenses/:id – Delete a transaction

## ✅ Future Improvements

1. Add categories (e.g., food, utilities, rent)
2. Monthly chart or pie chart of expenses
3. User authentication
4. Export transactions as CSV

## 👨‍💻 Author
**Arpeet Naik**  
[LinkedIn Profile](https://www.linkedin.com/in/arpeet-naik)
