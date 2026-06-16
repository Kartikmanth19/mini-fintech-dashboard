# 💰 Mini Fintech Dashboard

A modern **MERN Stack** personal finance tracker built as part of the **CiferX SDE Internship Assignment**. The application enables users to track income and expenses, analyze spending habits, and gain financial insights through an interactive dashboard.

---

## 🌐 Live Demo

**Frontend (Vercel):**
https://mini-fintech-dashboard-gilt.vercel.app/

**Backend API (Render):**
https://mini-fintech-dashboard-p67c.onrender.com/

---

## 📌 Features

### 🔐 Authentication

* Simple login system using React Router and Local Storage
* Protected dashboard routes
* Logout functionality

### 💳 Transaction Management

* Add new transactions
* Record income and expenses
* Store amount, category, type, date, and notes

### 📊 Dashboard Analytics

* Total Income
* Total Expenses
* Net Balance
* Top Spending Category

### 📈 Data Visualization

* Interactive Pie Chart showing spending distribution by category
* Real-time updates after adding transactions

### 🔍 Filtering

* Filter transactions by category
* Easy-to-read transaction history table

### 💡 Financial Insights

* Rule-based spending insights generated from user transactions

### 🎨 Modern UI

* Responsive design
* Dark fintech-inspired theme
* Glassmorphism cards and gradient components
* Mobile-friendly layout

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Chart.js
* React ChartJS 2
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* CORS
* Dotenv

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

```
mini-fintech-dashboard/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js (v18 or later)
* npm
* Git
* MongoDB Atlas account

---

## ⚙️ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend:

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

## ⚙️ Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000/api/transactions
```

Run the frontend:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔑 Demo Credentials

Use the following credentials to access the application:

**Email:**

```
demo@ciferx.com
```

**Password:**

```
ciferx123
```

---

## 📡 API Endpoints

### Transactions

| Method | Endpoint                    | Description           |
| ------ | --------------------------- | --------------------- |
| GET    | `/api/transactions`         | Get all transactions  |
| POST   | `/api/transactions`         | Add a new transaction |
| GET    | `/api/transactions/summary` | Get financial summary |
| GET    | `/api/transactions/insight` | Get spending insight  |

---

## 📸 Screenshots

You can add screenshots of:

* Login Page
* Dashboard Overview
* Add Transaction Form
* Spending Pie Chart
* Transaction Table

to enhance the repository presentation.

---

## 🎯 Assignment Requirements Covered

| Requirement              | Status |
| ------------------------ | ------ |
| Add Transactions         | ✅      |
| Transaction Listing      | ✅      |
| Transaction Filtering    | ✅      |
| Summary View             | ✅      |
| Net Balance Calculation  | ✅      |
| Top Spending Category    | ✅      |
| Spending Insight         | ✅      |
| Pie Chart Visualization  | ✅      |
| Public GitHub Repository | ✅      |
| Hosted Application       | ✅      |

---

## 👨‍💻 Author

**Kartik**

Built as part of the **CiferX SDE Internship Assignment (2026)**.

---

## 📄 License

This project is developed solely for educational and evaluation purposes.
