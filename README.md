# Frigate

A modern web application with React frontend and Express backend, featuring authentication and protected routes.

## Features

- **Authentication System**
  - Login/Logout functionality
  - Protected routes
  - Token-based authentication
  - Persistent sessions

- **Frontend (React + TypeScript)**
  - Modern UI with Tailwind CSS
  - React Router for navigation
  - Context API for state management
  - Type-safe development

- **Backend (Express + TypeScript)**
  - RESTful API
  - CORS configuration
  - Environment variable support
  - Type-safe endpoints

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## Project Structure

```
frigate/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── contexts/   # React context providers
│   │   ├── pages/      # React page components
│   │   ├── services/   # API service functions
│   │   └── styles/     # CSS and styling files
│   └── package.json    # Frontend dependencies
│
├── backend/            # Express backend server
│   ├── src/
│   │   └── index.ts   # Main server file
│   └── package.json   # Backend dependencies
│
└── README.md          # Project documentation
```

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SaltDustco/frigate.git
   cd frigate
   ```

2. Install dependencies:
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Start the development servers:
   ```bash
   # Start backend server (from backend directory)
   npm run dev

   # Start frontend server (from frontend directory)
   npm run dev
   ```

4. Access the application:
   - Frontend: http://localhost:5173 (or next available port)
   - Backend: http://localhost:3000

## Development

### Frontend Development

The frontend is built with:
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

Key files:
- `src/contexts/AuthContext.tsx` - Authentication state management
- `src/pages/Login.tsx` - Login page component
- `src/pages/Dashboard.tsx` - Protected dashboard page
- `src/services/authService.ts` - Authentication API service

### Backend Development

The backend is built with:
- Express
- TypeScript
- CORS middleware

Key files:
- `src/index.ts` - Main server file with routes and middleware

## Environment Variables

Create a `.env` file in the backend directory:
```
PORT=3000
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
