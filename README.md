# 🚀 IdleInsights: Procrastination Analysis & Management System

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen.svg)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-purple.svg)](https://vitejs.dev/)

**IdleInsights** is a comprehensive, full-stack application designed to help users track, analyze, and systematically overcome procrastination. By leveraging data-driven insights (PVI calculation, root cause analysis) and offering actionable psychological modes, IdleInsights empowers you to reclaim your productivity.

## ✨ Features

- **🔐 User Authentication:** Secure sign-up and login using JWT and bcrypt.
- **📊 Interactive Dashboard:** Visual analytics of your procrastination habits powered by Chart.js.
- **✅ Task Management:** Create, track, and manage your tasks efficiently.
- **⏱️ Procrastination Logging:** Log avoidance behaviors and identify their root causes.
- **🧠 Psychological Intervention Modes:**
  - **Task Deconstructor:** Break down overwhelming tasks into manageable steps.
  - **Digital Friction:** Strategies to reduce digital distractions.
  - **Next Action Clarifier:** Figure out the exact next physical step to take.
  - **Single Context Lock:** Focus purely on one task context at a time.
  - **Done Over Perfect:** Overcome perfectionism by prioritizing completion.
  - **Novelty Injection:** Add novelty to boring tasks to stimulate dopamine.
- **⚡ Quick Logging:** Use the `Ctrl+L` global shortcut for rapid logging.
- **👤 Profile Management:** Customize your user profile and settings.

## 🛠️ Technology Stack

### Frontend
- **React 19**
- **Vite** (Build Tool)
- **React Router v7** (Navigation)
- **Chart.js & react-chartjs-2** (Data Visualization)
- **Lucide React** (Icons)
- **Axios** (API Requests)

### Backend
- **Node.js & Express.js**
- **MongoDB & Mongoose** (Database)
- **JSON Web Tokens (JWT)** (Authentication)
- **Bcrypt.js** (Password Hashing)
- **Multer** (File Uploads)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local instance or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/IdleInsights.git
   cd IdleInsights
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   *Create a `.env` file in the `backend` directory and configure the following variables:*
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```
   *If you need to configure an API base URL, set it in the `.env` file within the `frontend` folder (e.g., `VITE_API_URL=http://localhost:5000`).*

### Running the Application

1. **Start the Backend Server** (from the `backend` directory)
   ```bash
   npm run dev
   ```
   *(The server will run on `http://localhost:5000`)*

2. **Start the Frontend Development Server** (from the `frontend` directory)
   ```bash
   npm run dev
   ```
   *(The app will be accessible at `http://localhost:5173`)*

## 📁 Project Structure

```text
IdleInsights/
├── backend/               # Node.js Express Server
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middlewares (auth, etc.)
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API endpoints
│   ├── services/          # Business logic & services
│   └── src/server.js      # Entry point
│
├── frontend/              # React Vite Application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images, fonts
│   │   ├── components/    # Reusable UI components & Modes
│   │   ├── contexts/      # React Contexts (Session, QuickLog)
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page level components
│   │   ├── services/      # API integration
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Entry point
│   └── vite.config.js     # Vite configuration
│
└── README.md              # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.
