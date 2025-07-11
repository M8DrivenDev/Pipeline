# 📡 Pipeline – Authentication Backend API

Pipeline is a robust, scalable backend authentication system built using **Node.js**, **Express**, and **MongoDB** (via **Mongoose**). It supports user authentication using **email or phone number**, with JWT-based session management and complete middleware-based security.

---

## 📁 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Controllers Breakdown](#controllers-breakdown)
- [Middleware](#middleware)
- [Validation Logic](#validation-logic)
- [Error Handling](#error-handling)
- [Security](#security)
- [Next Steps](#next-steps)

---

## ✨ Features

- ✅ User registration with email or phone number
- ✅ Login with email or phone number + password
- ✅ JWT-based authentication
- ✅ Session check via `isLoggedInController`
- ✅ Centralized error handling
- ✅ Secure password hashing using `bcryptjs`
- ✅ Environment-based config separation

---

## 🛠️ Tech Stack

| Layer           | Technology       |
|----------------|------------------|
| Runtime        | Node.js          |
| Framework      | Express.js       |
| Database       | MongoDB          |
| ORM/ODM        | Mongoose         |
| Auth           | JWT, bcryptjs    |
| Validation     | Custom middleware / Zod (optional) |
| Environment    | dotenv           |
| Logging        | Console / Custom |
| Testing        | Jest or Postman (manual) |

---

## 📂 Folder Structure

```

pipeline/
│
├── controllers/
│   └── authControllers.js       # Handles signup, login, session checks
│
├── middleware/
│   ├── authMiddleware.js        # isLoggedIn check using JWT
│   └── errorHandler.js          # Global error handling
│
├── models/
│   └── User.js                  # Mongoose schema for users
│
├── routes/
│   └── authRoutes.js            # Defines routes and attaches controllers
│
├── utils/
│   └── jwt.js                   # Token generation and verification utils
│
├── .env                         # Environment variables
├── server.js                    # Main entry point
└── README.md                    # This file

````

---

## 🧪 Installation

1. **Clone the repo:**

```bash
git clone https://github.com/yourusername/pipeline.git
cd pipeline
````

2. **Install dependencies:**

```bash
npm install
```

3. **Set up `.env` variables:**

```env
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-super-secret
JWT_EXPIRES_IN=7d
```

4. **Run the server:**

```bash
npm run dev
```

> The server will start on `http://localhost:5000`

---

## 🔐 Environment Variables

| Key              | Description                   |
| ---------------- | ----------------------------- |
| PORT             | Server port (default: 5000)   |
| MONGO\_URI       | MongoDB connection URI        |
| JWT\_SECRET      | Secret key for signing tokens |
| JWT\_EXPIRES\_IN | Token expiry duration         |

---

## 🚦 API Endpoints

| Method | Endpoint          | Description                | Auth Required |
| ------ | ----------------- | -------------------------- | ------------- |
| POST   | `/api/signup`     | Register a new user        | ❌             |
| POST   | `/api/login`      | Login via email or phone   | ❌             |
| GET    | `/api/isLoggedIn` | Check if user is logged in | ✅             |

---

## 🧠 Controllers Breakdown

### 🔹 `signupController`

* Validates required fields (email or phone + password)
* Ensures uniqueness
* Hashes password with `bcryptjs`
* Saves the user
* Returns JWT token on success

### 🔹 `loginController`

* Accepts either email or phone + password
* Finds user based on either field
* Verifies password
* Returns JWT token if valid

### 🔹 `isLoggedInController`

* Requires a valid JWT token in `Authorization` header
* Verifies token and user existence
* Returns user info if authenticated

---

## 🧱 Middleware

### 🔒 `authMiddleware.js`

* Checks `Authorization: Bearer <token>`
* Verifies the token with JWT
* Attaches `req.user` if valid
* Returns 401 if unauthorized

```js
export const isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // or fetch full user if needed
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
```

---

## 🧹 Validation Logic

* Signup/login fields are checked for:

  * Presence
  * Valid email/phone
  * Password strength
* Could be extended with libraries like **Zod** or **Joi**

---

## 💥 Error Handling

Global error handling middleware that captures:

* Validation errors
* Mongoose errors
* JWT errors
* Unknown routes (404)

Each controller uses `try-catch` and passes errors to `next(err)`

---

## 🔐 Security

* Passwords hashed with **bcryptjs** (salt rounds = 10)
* JWTs are signed with a secure secret key
* Never expose raw error messages in production
* Ensure `.env` is ignored in `.gitignore`

---

## 🚧 Next Steps

* ✅ Add user roles (admin, user)
* 🔒 Refresh token mechanism
* 📧 Email/Phone verification
* 🔐 Two-Factor Authentication

---

## 📬 Contact

Built with 💻 by [M8DrivenDev](https://github.com/m8DrivenDev)

Feel free to open an issue or pull request!
