# Full Stack Calculator Application

## Project Overview

This project is a Full Stack Calculator Application developed as part of the Auxplutes Technical Assessment Assignment.

The application includes a responsive frontend interface and a RESTful backend API to perform arithmetic operations.

The project demonstrates frontend-backend integration, API communication, validation handling, modular architecture, and responsive UI implementation.

---

## Features

* Addition
* Subtraction
* Multiplication
* Division
* Divide-by-zero validation
* Invalid input handling
* Responsive user interface
* Backend REST API integration
* Clear button functionality
* Keyboard support (Enter key)

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### API Communication

* REST API
* JSON

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Postman

---

## Project Structure

calculator-app/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── calculator.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md

---

## API Endpoint

### POST `/calculate`

### Sample Request


{
  "num1": 10,
  "num2": 20,
  "operation": "add"
}


### Sample Response


{
  "result": 30
}

---

## How to Run the Project

### Backend Setup

1. Navigate to backend folder

cd backend


2. Install dependencies

npm install

3. Run backend server

node server.js

---

### Frontend Setup

1. Open `frontend` folder
2. Open `index.html` using Live Server in VS Code

---

## Implemented Functionalities

* User input validation
* Divide-by-zero handling
* REST API communication
* Dynamic result rendering
* Responsive UI design
* Error handling

---

## Future Improvements

* Scientific calculator operations
* Calculation history
* User authentication
* Database integration
* Deployment support

---

## Author

Developed by Shreyas as part of the Auxplutes Technical Assessment Assignment.
