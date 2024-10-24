This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Project Name

A brief description of what the project does or its purpose.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

This project is built with [Next.js](https://nextjs.org/), a React framework for production-grade applications with support for server-side rendering (SSR), static site generation (SSG), and more.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Features

- Server-side rendering (SSR) and static generation (SSG)
- API routes for server-side logic
- Full integration with [React](https://reactjs.org/)
- Customizable layouts and dynamic routing
- Optimized performance with automatic static optimization

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-nextjs-project.git
    cd your-nextjs-project
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
```
Visit http://localhost:3000 to view the application in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

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
