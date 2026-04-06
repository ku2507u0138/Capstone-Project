# Capstone-Project
Google CIA Project of a web application 
# Event Registration System

This is a simple web-based project where users can register for events and their data is stored in a MySQL database.

## Features

* User can enter name, email, phone number
* Select an event from dropdown
* Data is saved in database
* Simple UI and backend connection

## Technologies Used

* HTML, CSS, JavaScript (Frontend)
* Node.js with Express (Backend)
* MySQL (Database)
* XAMPP (for local server)

## How to Run

1. Start XAMPP and turn ON MySQL (and Apache if needed)

2. Open phpMyAdmin and import the `setup.sql` file

3. Go to project folder in terminal

4. Install dependencies:
   npm install express mysql2

5. Run server:
   node server.js

6. Open browser:
   http://localhost:3000

## Folder Structure

* server.js → backend code
* setup.sql → database setup
* public/index.html → frontend

## Notes

* Make sure MySQL is running before starting server
* Default XAMPP MySQL username is root and password is empty

## What I Learned

* How frontend connects to backend
* How to store data in MySQL
* Basics of Node.js and Express

---

This is a basic project made for learning full stack development.
