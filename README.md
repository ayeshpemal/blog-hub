# Blog Hub

Welcome to **Blog Hub**, a full-stack production-grade blog application engineered to practice complete, end-to-end software development lifecycle (SDLC) pipelines, from local initialization to automated cloud deployment.

This repository features a completely decoupled, multi-container architecture:

- **Frontend:** A high-performance web client powered by **Next.js** (utilizing the native React 19 Compiler and pnpm), optimized out-of-the-box for top-tier SEO and Server-Side Rendering (SSR).
- **Backend:** A lightweight, stateless **Express RESTful API** acting as a headless JSON data layer.
- **Database:** Persistent relational data storage driven by **PostgreSQL**.

By maintaining an explicitly decoupled structure rather than packing everything into a single framework, this project serves as a practical, real-world sandbox for mastering complex engineering mechanics, including multi-stage Docker builds, cross-container networking via Docker Compose, Nginx reverse proxy routing, and multi-image automated CI/CD pipelines via GitHub Actions.

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
   pnpm run start
   ```

4. The backend will now be listening for requests (defaulting to port 5000).

### 2. Setting Up the Frontend (Next)

1. Open a new terminal window and navigate to the `frontend` directory.
   ```
   cd frontend
   ```
2. Install the required client dependencies.
   ```
   pnpm install
   ```
3. Launch the Next local development server.

   ```
   pnpm run dev
   ```

4. The frontend interface will be available at the local URL provided in your terminal console (typically http://localhost:3000).
