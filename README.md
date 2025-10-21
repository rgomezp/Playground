# CoinTracker Monorepo

A monorepo containing the CoinTracker frontend application and mock API service.

## Project Structure

```
cointracker/
├── frontend/                 # React + Vite frontend application
│   ├── src/                 # Frontend source code
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
├── cointracker-mock-api/    # Mock API service
│   ├── src/                 # API source code
│   └── package.json         # API dependencies
└── package.json             # Root package with yarn workspaces
```

## Prerequisites

- Node.js >= 20.0.0
- Yarn >= 1.22.0

## Installation

Install all dependencies for both workspaces:

```bash
yarn install
```

## Development

### Start Frontend Development Server

```bash
yarn dev
```

This will start the Vite development server for the frontend application.

### Start Mock API Server

```bash
yarn dev:api
```

This will start the mock API server in development mode with hot reload.

### Run Both Services Simultaneously

You can run both services in separate terminals:

```bash
# Terminal 1: Start frontend
yarn dev

# Terminal 2: Start API
yarn dev:api
```

## Production

### Build Frontend

```bash
yarn build
```

### Start API in Production

```bash
yarn start:api
```

## Additional Commands

### Reset Mock API Database

```bash
yarn reset-db
```

### Lint Frontend Code

```bash
yarn lint
```

### Preview Frontend Build

```bash
yarn preview
```

## Workspace Management

This project uses Yarn workspaces. You can run commands in specific workspaces:

```bash
# Run commands in frontend workspace
yarn workspace frontend <command>

# Run commands in API workspace
yarn workspace cointracker-mock-api <command>

# List all workspaces
yarn workspaces info
```

## API Documentation

For detailed API documentation, see the [Mock API README](./cointracker-mock-api/README.md).

## Frontend Documentation

The frontend is a React application built with Vite and TypeScript, using Tailwind CSS for styling.