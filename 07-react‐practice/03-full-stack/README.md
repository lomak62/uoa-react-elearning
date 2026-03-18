# 03 - Fetch JSON

Exercise from the **React Practice** module of the UOA E-Learning React JS Developer for entry level Job Program.

## Description

A React customer directory that fetches data from a MongoDB database and displays each record (name, email, address) as an item in a numbered list.

This exercise builds on the previous version, which fetched data from a local JSON file using the Fetch API. The key changes introduced are:

- Replaced the Fetch API with **Axios** for cleaner HTTP requests
- Replaced the local JSON mockup (`/api/customers.json`) with a real **MongoDB** database collection
- Built an **Express server** (`server.js`) as a local backend, proxied through Vite during development
- Built an **API handler** (`api/customers.ts`) for **Vercel serverless functions** to fetch data from MongoDB in production
- Added a **loading spinner** to provide feedback while data is being fetched
- Added an **empty state** message when no customers are found

![Screenshot](screenshot.png)

## Key Concepts

- `useEffect` hook
- Axios for HTTP requests
- Rendering lists with `key`
- Loading, error, and empty state handling
- Express backend with MongoDB
- Vercel serverless functions
- Vite dev server proxy

## Tech Stack

React 19 &bull; TypeScript &bull; Vite &bull; Axios &bull; Bootstrap &bull; Express &bull; MongoDB

## Running the Exercise

```bash
npm install
npm run server  # Terminal 1 — Express + MongoDB on :3001
npm run dev     # Terminal 2 — Vite on :5173
```
