# Todo App 📝

A full-stack web application for managing daily tasks and todos with user authentication and persistent data storage.

---

## 🎯 Project Concept & Idea

The **Todo App** is a modern task management application that enables users to:
- **Create an account** with secure authentication
- **Organize tasks** in a personalized to-do list
- **Manage todos** efficiently with persistent database storage
- **Experience seamless workflow** across a complete full-stack architecture

### Key Objectives
This project demonstrates core web development concepts including:
- **User Authentication**: Secure sign-up and sign-in with encrypted passwords
- **Database Integration**: MongoDB for reliable data persistence
- **RESTful API Design**: Express.js backend for CRUD operations
- **User-Centric Design**: Personalized task lists for each authenticated user

---

## 🏗️ Architecture Overview

### Technology Stack

**Backend:**
- **Express.js** - RESTful API server framework
- **Node.js** - JavaScript runtime environment
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - Schema validation and database modeling
- **bcryptjs** - Password hashing and encryption

**Frontend:** (Client-side implementation)
- Interactive web interface for task management

---

## 📋 Core Features

### 1. **User Authentication**
- **Register** - Create a new user account with email, username, and password
- **Sign In** - Secure login with email and password validation
- **Password Security** - Passwords are hashed using bcryptjs before storage

### 2. **Task Management**
- **Create Todos** - Add new tasks to your personal list
- **Organize Tasks** - Each user has their own todo list
- **Data Persistence** - All tasks are saved to MongoDB database

### 3. **User Profiles**
- **Email-based Authentication** - Unique email for account identification
- **Username** - Personalized username for each user
- **Task Association** - Each user's tasks are linked via unique user ID

---

## 📊 Database Schema

### User Model
```
{
  email: String (required, unique),
  password: String (required, hashed),
  username: String,
  list: [ObjectId] (references to List model)
}
```

### List (Todo) Model
```
{
  title: String (required),
  body: String (required),
  list: [ObjectId] (references to user)
}
```

---

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

#### **Sign Up**
- **Endpoint**: `POST /register`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "secure_password",
    "username": "username"
  }
  ```
- **Response**: User object with id and credentials
- **Features**: Email validation, password hashing, duplicate user prevention

#### **Sign In**
- **Endpoint**: `POST /signin`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "secure_password"
  }
  ```
- **Response**: User object (password excluded for security)
- **Features**: Password verification, secure authentication

---

## 🔐 Security Features

- **Password Hashing**: bcryptjs with salt rounds (10) for secure storage
- **Password Comparison**: Secure bcrypt comparison for login validation
- **Data Protection**: Sensitive data (passwords) excluded from API responses
- **Validation**: Email existence checks to prevent duplicate accounts

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB instance running locally or cloud connection

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhinav-singh-2003/Todo-app.git
   cd Todo-app/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file with MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

---

## 📦 Dependencies

- `express: ^5.2.1` - Web framework for API routing
- `mongoose: ^9.6.2` - MongoDB object modeling
- `bcryptjs: ^3.0.3` - Password hashing and encryption

---

## 💡 How It Works

1. **User Registration**
   - User submits email, password, and username
   - System checks if email already exists
   - Password is hashed using bcryptjs
   - New user document is created in MongoDB

2. **User Login**
   - User provides email and password
   - System retrieves user from database
   - Password is compared with stored hash
   - Authenticated user data is returned

3. **Task Management**
   - Authenticated users can create and view their tasks
   - Tasks are stored in MongoDB with user reference
   - User can only access their own tasks

---

## 🎓 Learning Outcomes

This project covers essential full-stack development concepts:
- ✅ RESTful API design principles
- ✅ User authentication and authorization
- ✅ Database schema design and relationships
- ✅ Password security best practices
- ✅ Express middleware and routing
- ✅ MongoDB and Mongoose usage
- ✅ Error handling and validation

---

## 🔄 Project Workflow

```
Client Request → Express Server → Authentication Check → 
MongoDB Query → Database Operation → Response Processing → 
Client Response
```

---

## 📝 Notes

- The app uses **CommonJS** module syntax (`require` and `module.exports`)
- Testing can be performed using tools like **Thunderbolt** or **Postman**
- Database connection is essential for the application to function
- All passwords are encrypted and never stored in plain text

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for bugs and feature requests.

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

**Abhinav Singh**

Repository: [Abhinav-singh-2003/Todo-app](https://github.com/Abhinav-singh-2003/Todo-app)

---

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

Happy organizing! 🎉
