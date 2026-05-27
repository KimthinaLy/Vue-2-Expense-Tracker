# Expense Tracker

A simple expense tracker built with Vue 3 to practice frontend development fundamentals.

## Tech Stack

- Vue 3 (Composition API + `<script setup>`)
- TypeScript
- Tailwind CSS v4
- localStorage (persistence)
- Vite

## Setup

```bash
npm install
npm run dev
```

For correct social preview links when sharing, copy `.env.example` to `.env` and set `VITE_SITE_URL` to your deployed origin (e.g. `https://your-site.example.com`).

## Features

- Log income and expense transactions
- View balance summary (total income, total expenses, net balance)
- Filter transactions by type and category
- Delete individual transactions or bulk clear by type
- Data persists across sessions via localStorage
