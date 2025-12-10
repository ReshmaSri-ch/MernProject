#Employee Management System (MERN Stack)

A full-stack Employee Management System built using the MERN (MongoDB, Express, React, Node.js) stack.
This system helps XYZ Enterprises efficiently Add, Search, and Update employee information through a simple and intuitive interface.

##Features
###Add Employee

Allows the user to save employee details such as:

EmployeeName

EmployeeID (unique)

Designation

Department

JoiningDate

###Search Employee

Search employee by EmployeeID

Displays details in a textarea

Shows an error message if employee not found

###Update Employee

Update the Designation of an employee

Input EmployeeID → fetch details → update form displayed dynamically

###Homepage Navigation

React Router used to navigate between:

Add Employee

Search Employee

Update Employee

## Tech Stack
Frontend

React.js

React Router

Axios

Bootstrap / CSS

Backend

Node.js

Express.js

REST API

Mongoose

Database

MongoDB / MongoDB Atlas

Database Name: Employees

## Project Structure
Employee-Management-System/
│
├── server/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   └── package.json
│
└── client/
    ├── src/
    │   ├── pages/
    │   │   ├── AddEmployee.jsx
    │   │   ├── SearchEmployee.jsx
    │   │   └── UpdateEmployee.jsx
    │   ├── Home.jsx
    │   └── App.js
    └── package.json

##API Endpoints
➤ Add Employee

POST /api/employees/add

➤ Search Employee

GET /api/employees/:employeeID

➤ Update Employee

PUT /api/employees/update/:employeeID

## Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Backend Setup
cd server
npm install


Create .env file in /server:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Run backend:

npm start

3️⃣ Frontend Setup
cd client
npm install
npm start


The frontend runs at:

http://localhost:3000

##Running the App

Backend → http://localhost:5000

Frontend → http://localhost:3000

Keep both running for full MERN functionality.
