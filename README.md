# Task Management App

## Overview

This is a **Role-Based Task Management Application** where users can manage tasks based on their roles. Admin users have the ability to manage all tasks and users, while regular users can only manage their own tasks.

## Features

### Frontend Features:
1. **User Authentication Pages**:
   - Pages for registration and login.
   - Authentication tokens are stored using JWT.
2. **Task Management UI**:
   - Users can create, view, edit, and delete tasks.
   - Tasks are categorized and can be marked as completed.
   - Admin users can manage all tasks.
3. **Role-Based Access**:
   - Regular users can only manage their own tasks, while admins can manage tasks for all users.
4. **Task Sorting and Filtering**:
   - Sort tasks by priority, due date, or category.
   - Filters available for completed tasks or tasks in progress.
5. **Task Details Modal**:
   - A modal displays task details when clicked.
6. **Notifications**:
   - Implemented using React Toastify to show toast messages on task creation, updates, and deletions.
7. **Pagination**:
   - Tasks are loaded in batches of 10 per page for better performance.
8. **Validation**:
   - Frontend validation implemented for all forms (login, registration, and task creation).
9. **Unit Testing**:
   - Unit tests for at least 3 components using React Testing Library and Jest.

### Backend Features:
1. **User Authentication & Role Management**:
   - User registration and login with JWT.
   - Roles for Admin and User with role-based access control.
2. **Task Management API**:
   - Endpoints to create, update, delete, and view tasks.
   - Admins can manage all tasks, while regular users manage their own.
3. **Task Due Dates**:
   - Tasks past their due date are automatically marked as "Overdue."
4. **Advanced Querying**:
   - Support for filtering and sorting tasks by status, due date, and priority.
5. **User Task Limit**:
   - Regular users are limited to creating a maximum of 10 tasks.
6. **Password Reset**:
   - Password reset functionality using NodeMailer.
7. **Security**:
   - Rate limiting implemented for login attempts to prevent brute-force attacks.
   - Helmet.js used for additional security headers.
8. **Comprehensive Testing**:
   - Unit tests for at least 5 API endpoints using Jest.

## Project Structure

### Frontend
The frontend is built using React and consists of the following main components:
- **Authentication (Registration & Login Pages)**
- **Task Management UI**
- **Role-Based Dashboard**

### Backend
The backend is built using Node.js, Express, and MongoDB with the following main features:
- **User Authentication and Role Management**
- **Task Management API**
- **Role-Based Authorization**
- **Task Filtering, Sorting, and Pagination**

## Deliverables

1. **Postman API Collection**:
   - Comprehensive documentation of API routes for the backend.
   - Postman collection added to the repository.
2. **Deployment**:
   - The frontend and backend are deployed separately using Vercel or Heroku.
   - Live URLs for both services are provided below.


## Live URLs
- **Frontend**: [https://your-frontend-url.com](https://your-frontend-url.com)
- **Backend**: [https://your-backend-url.com](https://your-backend-url.com)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/task-management-app.git

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
    npm install
    
    cd ../backend
    npm install

3. Create .env files in both frontend and backend directories:
     Frontend .env:
     ```bash
     REACT_APP_API_URL=http://localhost:5000/api
      ```
     
     Backend .env:
     ```bash
     PORT=5000
    DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskDB
    JWT_SECRET=your_jwt_secret
    NODEMAILER_USER=your_email@example.com
    NODEMAILER_PASS=your_password


4. Run the frontend and backend in development mode:
     Frontend:
     ```bash
     cd frontend
     npm start
     ```

     Backend:
     ```bash
     cd backend
     npm start

5. Access the application in your browser at:

   Frontend: **http://localhost:3000**
   Backend API: **http://localhost:5000**

## API Documentation
  **Authentication:**
  POST **/api/auth/register**: Register a new user.
  POST **/api/auth/login**: Login with email and password.

  **Task Management:**
  GET **/api/tasks**: Get all tasks for the authenticated user.
  POST **/api/tasks**: Create a new task.
  PUT **/api/tasks/:id**: Update an existing task.
  DELETE **/api/tasks/:id**: Delete a task.

  **Admin Endpoints:**
  GET **/api/admin/users**: Get a list of all users (Admin only).
  GET **/api/admin/tasks**: Get all tasks across users (Admin only).
  


