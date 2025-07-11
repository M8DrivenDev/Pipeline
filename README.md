# 🚀 Pipeline – Full Stack Authentication System

**Pipeline** is a full-stack authentication system built with modern web technologies. It includes a secure backend API powered by **Node.js**, **Express**, and **MongoDB**, and a clean, responsive frontend built with **React**, **Tailwind CSS**, and **Vite**.

This monorepo contains both the **Frontend** and **Backend** of the Pipeline project.

---

## 📁 Monorepo Structure

```

pipeline/
│
├── backend/          # Node.js + Express + MongoDB (Mongoose)
││   ├── controllers/
││   ├── middleware/
││   ├── models/
││   ├── routes/
││   ├── utils/
││   ├── server.js
││   └── README.md
│
├── frontend/         # React + Vite + Tailwind CSS
││   ├── src/
││   ├── public/
││   ├── index.html
││   ├── App.jsx
││   └── README.md
│
└── README.md         # This file

````

---

## 🛠️ Tech Stack

| Layer        | Stack                                      |
|--------------|---------------------------------------------|
| Backend      | Node.js, Express, MongoDB, Mongoose, JWT   |
| Frontend     | React, Vite, Tailwind CSS                  |
| Auth         | JWT (access token stored in `localStorage`)|
| Tools        | dotenv, bcryptjs, fetch/axios              |
| Deployment   | (Optional) Vercel, Netlify, Render, etc.   |

---

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/pipeline.git
cd pipeline
````

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create `.env` file in `backend/`:

```env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

Start the server:

```bash
npm run dev
```

Runs on `http://localhost:5000`

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

Create `.env` file in `frontend/`:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm run dev
```

Runs on `http://localhost:5173`

---

## 🔐 Authentication Flow

* User can **sign up or log in** using **email or phone number** + password
* A **JWT token** is generated on successful login
* The token is saved in **localStorage**
* Protected routes check for the token to allow access
* Backend exposes a `/api/isLoggedIn` endpoint to verify session

---

## 📦 Scripts Summary

| Location   | Command           | Description                 |
| ---------- | ----------------- | --------------------------- |
| `backend`  | `npm run dev`     | Start backend in dev mode   |
| `frontend` | `npm run dev`     | Start frontend in dev mode  |
| `frontend` | `npm run build`   | Build frontend for prod     |
| `frontend` | `npm run preview` | Preview production frontend |

---

## 🚀 Deployment

Both parts can be deployed independently:

* **Frontend**: Deploy on **Vercel**, **Netlify**, or **Cloudflare Pages**
* **Backend**: Deploy on **Render**, **Railway**, **Fly.io**, or **DigitalOcean**

Could you make sure to update your environment variables for production deployments?

---

## 📈 Roadmap

* ✅ Auth with email/phone
* ✅ Protected routes
* 🔒 Refresh token & auto-renew
* ✉️ Email / SMS verification
* 🔐 Two-factor authentication
* ⚙️ Admin panel (optional)
* 📊 Analytics Dashboard (optional)
* 📱 Mobile app (React Native or Flutter)

---

## 🧠 Developer

> Made with passion by [M8DrivenDev](https://github.com/m8DrivenDev)

---

## 📝 License

This project is licensed under the [MIT License](./LICENSE).

---

## 📬 Feedback

Found a bug? Have a suggestion? Feel free to open an [issue](https://github.com/yourusername/pipeline/issues) or [pull request](https://github.com/yourusername/pipeline/pulls).

```
