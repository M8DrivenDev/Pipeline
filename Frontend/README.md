# 🌐 Pipeline – Frontend

The **Pipeline Frontend** is a modern authentication interface built using **React**, **Vite**, and **Tailwind CSS**. It provides a sleek, responsive UI for user signup and login, supporting both **email** and **phone number** based authentication.

This app communicates with the **Pipeline backend** via REST API and stores the authentication token locally to manage user sessions.

---

## 📁 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Pages & Components](#pages--components)
- [Authentication Flow](#authentication-flow)
- [Styling](#styling)
- [Deployment](#deployment)
- [Next Steps](#next-steps)

---

## ✨ Features

- 🔐 Login and signup with email or phone
- 🔄 Persistent session via JWT
- ✅ Auth state handling using React Context or state management
- 📱 Responsive design with Tailwind CSS
- 🔃 API calls with async/await and error handling
- 💬 UI feedback on form validation and auth errors

---

## 🛠️ Tech Stack

| Layer         | Tool              |
|---------------|-------------------|
| Framework     | React             |
| Build Tool    | Vite              |
| Styling       | Tailwind CSS      |
| HTTP Client   | Fetch API         |
| Form Handling | React state       |
| Deployment    | Vercel / Netlify  |

---

## 📂 Folder Structure

```

pipeline-frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/                # Static assets (e.g. images)
│   ├── components/            # Reusable UI components (Input, Button, etc.)
│   ├── pages/                 # Page components (Login, Signup, Dashboard)
│   ├── services/              # API services (auth.js)
│   ├── context/               # Auth context (optional)
│   ├── App.jsx                # Root component
│   └── main.jsx               # Vite entry point
│
├── .env                      # API URL and other env variables
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md

````

---

## 🧪 Installation

1. **Clone the repo:**

```bash
git clone https://github.com/yourusername/pipeline-frontend.git
cd pipeline-frontend
````

2. **Install dependencies:**

```bash
npm install
```


4. **Start the dev server:**

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🧾 Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start development server       |
| `npm run build`   | Build for production           |
| `npm run preview` | Preview built version          |
| `npm run lint`    | Lint your code (if ESLint set) |

---

## 📃 Pages & Components

### Pages

* **`/signup`** – Sign up using email or phone + password
* **`/login`** – Log in using email/phone + password
* **`/dashboard`** – Protected page showing user info (accessible only with token)

### Components

* `InputField.jsx` – Reusable input component with label
* `PrimaryButton.jsx` – Stylized button
* `ErrorMessage.jsx` – Handles and displays API/form validation errors
* `AuthWrapper.jsx` – Layout for auth pages
* `ProtectedRoute.jsx` – Redirects unauthenticated users

---

## 🔄 Authentication Flow

1. User submits **email/phone + password**
2. Frontend sends a `POST` request to `/api/login`
3. If valid:

   * Saves JWT token to `cookie`
   * Redirects user to `/dashboard`
4. Dashboard fetches user info using the token via `/api/isLoggedIn`
5. On logout, the token is cleared from localStorage, and the user is redirected to `/login`

---

## 🎨 Styling

* Fully styled using **Tailwind CSS**
* Mobile-first design
* Consistent layout using flexbox and utility classes
* Dark mode optional (future feature)

---

## 🚀 Deployment

To deploy on **Vercel** or **Netlify**:

1. Push your project to GitHub
2. Import the project on Vercel/Netlify
4. Deploy

---

## 🧩 Next Steps

* ✅ Implement global auth context (e.g., React Context or Zustand)
* 🔐 Use refresh tokens and handle expiry
* 🔍 Improve accessibility and a11y compliance

---

## 🤝 Contributing

Just to let you know, pull requests are welcome. For major changes, please open an issue first.

---

## 📬 Contact

Created with ❤️ by [M8DrivenDev](https://github.com/m8DrivenDev)

---
