#### Nidhaan HealthTech Platform


# User Authentication & Authorization System

This project implements a user authentication and authorization system using Node.js and Express.js. It includes JWT authentication, bcrypt.js for password hashing, role-based access control (Admin, Doctor, Patient, Pharmacy, Trainer), and email/OTP verification using SMTP.

## Features
- User Signup & Login with JWT authentication
- Password hashing using bcrypt.js
- Role-based access control
- Email/OTP verification via SMTP
- Secure API endpoints for different roles

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Token)
- bcrypt.js
- Nodemailer (for OTP verification)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the root directory and add:
     ```env
     PORT=5000
     MONGODB_URL=<your-mongodb-uri>
     JWT_SECRET=<your-secret-key>
     EMAIL=<your-smtp-host>
     EMAIL_PASS=<your-smtp-port>
     ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints
### 1. Authentication
#### **User Signup**
- **Endpoint:** `POST /api/auth/signup`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123",
    "role": "Doctor"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully!",
    "user": { "id": "123456", "email": "johndoe@example.com" }
  }
  ```

#### **User Login**
- **Endpoint:** `POST /api/auth/login`
- **Description:** Authenticates user and returns JWT token.
- **Request Body:**
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your-jwt-token"
  }
  ```

### 2. OTP Verification
#### **Send OTP**
- **Endpoint:** `POST /api/auth/send-otp`
- **Request Body:**
  ```json
  {
    "email": "johndoe@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "message": "OTP sent successfully"
  }
  ```

#### **Verify OTP**
- **Endpoint:** `POST /api/auth/verify-otp`
- **Request Body:**
  ```json
  {
    "email": "johndoe@example.com",
    "otp": "123456"
  }
  ```
- **Response:**
  ```json
  {
    "message": "OTP verified successfully"
  }
  ```

## Role-Based Access Control
- **Admin**: Manage users, view logs
- **Doctor**: Access patient records
- **Patient**: View own records
- **Pharmacy**: Manage medicines
- **Trainer**: Access fitness records



## Medicine Data Management & Orders

### Features
- CRUD APIs for managing medicine inventory
- Stock updates and pricing adjustments
- Real-time synchronization between pharmacy partners and Nidhaan
- Order management APIs for handling medicine orders
- Cart functionalities and checkout system
- Payment integration for online transactions

### API Endpoints
#### **Medicine Inventory Management**
- **Create Medicine**: `POST /api/medicines`
- **Get Medicines**: `GET /api/medicines`
- **Update Medicine**: `PUT /api/medicines/`

#### **Order Management**
- **Add to Cart**: `POST /api/cart`
- **View Cart**: `GET /api/cart`
- **Place Order**: `POST /api/orders`
- **Get Orders**: `GET /api/orders`


