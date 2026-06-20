# Blog Hub

Welcome to Blog Hub , a full-stack blog application. This repository houses a decoupled architecture featuring a modern single-page application (SPA) client and a standalone RESTful API server.

## 💻 Local Development Setup

To get your development environment running locally, follow these steps to start both servers concurrently.

### Prerequisites

- Ensure you have Node.js installed on your machine.
- Ensure you have PostgreSQL installed and running locally on port 5432.

### 1. Setting Up the Backend (Express)

1. Navigate to the `backend` directory.

   ```
   cd backend
   ```

2. Install the necessary boilerplate dependencies.

   ```
   pnpm install
   ```

3. Boot up the local API development server.

   ```
   pnpm start
   ```

4. The backend will now be listening for requests (defaulting to port 3000).

### 2. Setting Up the Frontend (React + Vite)

1. Open a new terminal window and navigate to the `frontend` directory.
   ```
   cd frontend
   ```
2. Install the required client dependencies.
   ```
   pnpm install
   ```
3. Launch the Vite local development server.

   ```
   pnpm dev
   ```

4. The frontend interface will be available at the local URL provided in your terminal console (typically http://localhost:5173).
