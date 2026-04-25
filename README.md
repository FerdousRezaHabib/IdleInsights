# IdleInsights

IdleInsights is a MERN-style web app for tracking tasks, logging distractions, running focus sessions, and reviewing analytics to understand and reduce procrastination.

## Features

- **JWT auth**: register/login and use protected API routes
- **Tasks**: create/update/delete intended tasks
- **Logs**: quick logging + editing/deleting log entries
- **Focus sessions**: start/pause/resume/end sessions, record distractions and check-ins
- **Modes**: activate productivity modes and manage mode sub-tasks
- **Analytics**: summary + chart endpoints for dashboard-style insights
- **Profile**: update profile and upload a profile picture

## Tech stack

- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT
- **Frontend**: React + Vite, Axios, Chart.js

## Repo structure

- `backend/` — Express API server
- `frontend/` — React (Vite) client
- `postman-collection.json` — Postman collection for the API

## Getting started (local development)

### Prerequisites

- Node.js (LTS recommended)
- MongoDB (local or Atlas)

### 1) Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
# Required
MONGODB_URI=mongodb://127.0.0.1:27017/idleinsights
JWT_SECRET=replace-with-a-long-random-string

# Optional (defaults to 5000)
PORT=5000
```

Run the API:

```bash
npm run dev
```

By default the backend listens on `http://localhost:5000` and exposes routes under `http://localhost:5000/api`.

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Vite serves the app on `http://localhost:5173` by default.

## Important: API base URL / port alignment

The backend defaults to port `5000` (see `backend/src/server.js`).

The frontend currently hardcodes the backend URL to **port `5500`** in a couple places:

- API calls: `frontend/src/services/api.js` (`baseURL: 'http://localhost:5500/api'`)
- Profile images: `frontend/src/pages/ProfilePage.jsx` (`BACKEND_URL = 'http://localhost:5500'`)

To run the app successfully, pick one of these options:

- **Option A (no code change):** set `PORT=5500` in `backend/.env`
- **Option B (recommended for consistency with Postman and backend default):** change the frontend URLs to `http://localhost:5000` (both files above)

Note: the included Postman collection defaults to `http://localhost:5000/api`.

## API overview

Base path: `/api`

### Auth (public)

- `POST /api/auth/register`
- `POST /api/auth/login`

### Protected routes

All routes below require:

- `Authorization: Bearer <JWT>`

Tasks:

- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

Logs:

- `GET /api/logs`
- `POST /api/logs`
- `PUT /api/logs/:id`
- `DELETE /api/logs/:id`

Analytics:

- `GET /api/analytics/summary`
- `GET /api/analytics/charts`

Sessions:

- `POST /api/sessions/start`
- `GET /api/sessions/active`
- `GET /api/sessions/history`
- `GET /api/sessions/:id`
- `PATCH /api/sessions/:id/pause`
- `PATCH /api/sessions/:id/resume`
- `POST /api/sessions/:id/distraction`
- `POST /api/sessions/:id/focus-lost`
- `POST /api/sessions/:id/focus-regained`
- `POST /api/sessions/:id/check-in`
- `POST /api/sessions/:id/end`

Modes:

- `GET /api/modes/active`
- `POST /api/modes/activate`
- `PUT /api/modes/:id`
- `POST /api/modes/:id/subtasks`
- `PATCH /api/modes/:id/subtasks`
- `DELETE /api/modes/:id/subtasks`
- `POST /api/modes/:id/complete-subtask`
- `POST /api/modes/:id/save-template`
- `POST /api/modes/:id/distraction-session`
- `POST /api/modes/:id/distraction-session/end`
- `POST /api/modes/:id/friction-pause`
- `DELETE /api/modes/:id`

Profile:

- `GET /api/profile`
- `PUT /api/profile`
- `POST /api/profile/upload-picture` (multipart form field: `profilePicture`)
- `DELETE /api/profile/picture`

Uploads are served from:

- `GET /uploads/...`

## Postman

Import `postman-collection.json` into Postman.

- Collection variable `baseUrl` defaults to `http://localhost:5000/api`
- After register/login, the collection stores the JWT into the `token` variable

## Scripts

Backend (from `backend/`):

- `npm run dev` — start with nodemon
- `npm start` — start with node

Frontend (from `frontend/`):

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
