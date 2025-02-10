# Trip-Planner
Trip Planner Application
#Overview
This project is a Trip Planner Application that allows users to plan their trips, view routes, and share their travel experiences through blog posts. The application consists of a Node.js backend with Express.js and MongoDB for user authentication and a frontend built with HTML, CSS, and JavaScript. The frontend includes features like route planning using Google Maps, exporting route details as a PDF, and a blog section for sharing travel experiences.

Features
Backend (Node.js + Express.js + MongoDB)
User Authentication:

Users can sign up with a username, email, and password.

Passwords are securely hashed using bcryptjs.

Email validation is performed to ensure valid email formats.

Duplicate user checks are implemented to prevent multiple registrations with the same email.

Database:

MongoDB is used to store user data (username, email, and hashed password).

API Endpoints:

POST /signup: Handles user registration.

Frontend (HTML + CSS + JavaScript)
Login/Signup Page:

A responsive and visually appealing login/signup form.

Form submission is handled using JavaScript's fetch API to communicate with the backend.

Trip Planner Dashboard:

Google Maps Integration:

Users can enter a starting point and destination to view the route.

Supports multiple travel modes: Driving, Walking, and Bicycling.

Route Information:

Displays distance and duration for the selected route.

Export as PDF:

Users can export route details (starting point, destination, travel mode, and route info) as a PDF.

Blog Section:

Users can share their travel experiences by posting blogs.

Blogs are stored in the browser's localStorage.

Blogs are displayed in a list format on the page.

Technologies Used
Backend
Node.js: JavaScript runtime for building the backend.

Express.js: Web framework for handling HTTP requests and routing.

MongoDB: NoSQL database for storing user data.

Mongoose: MongoDB object modeling for Node.js.

bcryptjs: Library for hashing passwords.

Frontend
HTML: Structure of the web pages.

CSS: Styling and layout of the web pages.

JavaScript: Logic for interacting with the backend and Google Maps API.

Google Maps API: For displaying maps and calculating routes.

jsPDF: Library for generating PDFs.
I have used the gomaps.api which use the google maps api
