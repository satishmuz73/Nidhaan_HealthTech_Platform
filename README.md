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



# Gym & Yoga Services API

This project provides APIs for managing Gym & Yoga services including trainer bookings, class schedules, membership management, and virtual class interactions.

## Features

- **Trainer Management**: Create and manage trainers, their specializations, and available times.
- **Class Scheduling**: Schedule physical gym and yoga classes with trainers.
- **Membership Management**: Create and manage user memberships with validity periods and types.
- **Virtual Classes**: Schedule and manage virtual classes, including providing video links for sessions.
- **Authentication**: Token-based user authentication for access to private routes.


## API Endpoints

### 1. **Trainer Routes** (`/api/trainers`)
- `GET /` - Get all trainers
- `POST /` - Add a new trainer

### 2. **Class Routes** (`/api/classes`)
- `GET /` - Get all scheduled classes
- `POST /` - Schedule a new class

### 3. **Membership Routes** (`/api/memberships`)
- `GET /` - Get all memberships
- `POST /` - Create a new membership

### 4. **Virtual Class Routes** (`/api/virtualClasses`)
- `GET /` - Get all virtual classes
- `POST /` - Schedule a new virtual class

## Authentication

- All routes require a valid JWT token for access (except the trainer registration endpoint).
- To authenticate, include the token in the `x-auth-token` header for protected routes.

## Error Handling

- If any required field is missing in requests, the API will return a `400` error with a message indicating the missing field.
- Server errors will return a `500` error with the message "Internal Server Error."

## Example Requests

### 1. **Add a Trainer** (POST `/api/trainers`)
```json
curl -X POST http://localhost:5000/api/trainers -H "Content-Type: application/json" -d '{
    "name": "John Doe",
    "specialization": "Yoga",
    "availableTimes": [{"date": "2025-02-28", "time": "10:00 AM"}]
}'
```
### 2. **Schedule a Class** (POST `/api/classes`)
```json
curl -X POST http://localhost:5000/api/classes -H "Content-Type: application/json" -d '{
    "instructorId": "609a2bcfcf3f1a2ff434572d",
    "className": "Yoga Beginner",
    "dateTime": "2025-02-28T10:00:00Z"
}'
```




