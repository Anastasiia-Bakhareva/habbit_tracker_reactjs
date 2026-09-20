# Habit Tracker

A simple habit tracking app built with React, TypeScript, and Vite. Add daily habits, mark them as done, and keep track of your streaks — all saved locally in your browser.

## Features

- **Add and delete habits** — create new habits through a simple form; the "Add" button stays disabled until you type a name, so you can't submit an empty habit.
- **Daily progress tracking** — each habit shows how many times it's been completed today in a `0/1 done today` format.
- **Streak counter** — tracks consecutive days a habit has been completed.
- **Calendar navigation** — browse previous days/weeks freely; navigation into the future is limited to the current week.
- **Persistent state** — habits and progress are saved to `localStorage`, so nothing resets when you refresh the page.

## Tech Stack

- **React** + **TypeScript**
- **Vite** — build tool and dev server
- **React Context API** — global habit state management (`HabitProvider`)
- **Custom hook** — `useLocalStorage` for syncing state with the browser's local storage

## Project Structure

```
src/
├── components/
│   ├── Button.tsx
│   ├── HabitForm.tsx
│   ├── HabitList.tsx
│   └── Header.tsx
├── context/
│   └── HabitProvider.tsx
├── hooks/
│   └── useLocalStorage.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

## What I Learned

This project was a hands-on introduction to structuring a React app with TypeScript: separating UI components from shared state (via Context API), building a reusable custom hook for persistence, and handling UI edge cases like disabled states and date-based navigation limits.
