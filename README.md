# Evolve K9

This website was developed for a client who owns a dog training business, providing them with a streamlined platform to promote their services and capture leads for dog training programs. The client requested a simple, no-frills design focused on functionality. A form was requested so that the client could collect leads. The form integrates with Google APIs to seamlessly send submissions to both their email inbox and a Google Sheet for easy lead management.

## Table of Contents

-   [Getting Started](#getting-started)
-   [Features](#features)
-   [Installation](#installation)
-   [Running the Project](#running-the-project)
-   [Environment Variables](#environment-variables)
-   [Folder Structure](#folder-structure)

## Getting Started

This project is built with [Next.js](https://nextjs.org/), a React framework for production-grade applications with support for server-side rendering (SSR), static site generation (SSG), and more.

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/) (v18.8 or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Features

-   Server-side rendering (SSR) and static generation (SSG)
-   API routes for server-side logic
-   Full integration with [React](https://reactjs.org/)
-   Customizable layouts and dynamic routing
-   Optimized performance with automatic static optimization

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/austin-corwin/evolve-k9.git
    cd evolve-k9
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Project

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit http://localhost:3000 to view the application in the browser. You can start editing the page by modifying app/page.tsx. The page will reload if you make edits. You will also see any lint errors in the console.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

After building, start the production server:

```bash
npm start
# or
yarn start
```

## Folder Structure

Here's an overview of the main directories and their purpose:

```bash
.
├── _components    # Reusable UI components
├── _features      # Main UI features
├── _state         # Hooks/stores to return state-managed data
├── (routes)       # Next.js page routes
│   ├── contact      # Contact page
│   └── privacy      # Privacy page
│   └── terms        # Terms page
│   └── page.tsx     # Home page
├── api            # Functions handling interaction with Google APIs
├── public         # Static assets such as images
├── styles         # Global and component-specific styles
├── _config        # Configuration files
├── .env.local     # Environment variables
└── package.json   # Project dependencies and scripts

```
