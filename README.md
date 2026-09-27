# Taskboard — Personal Task Manager

A simple React to-do app for adding, organizing, and tracking daily tasks by category,
with data that persists across page refreshes.

## Features

- Add tasks with a category (Work, Personal, Urgent)
- Edit a task's text inline (double-click the text, or use the pencil icon)
- Mark tasks complete/incomplete with a checkbox
- Delete tasks
- Filter tasks by status: All / Active / Completed
- Live count of remaining vs. completed tasks
- Data persisted with `localStorage` — survives a page refresh
- Responsive layout (desktop and mobile)

## Technologies Used

- React 19 (functional components, hooks: `useState`, `useEffect`)
- Vite
- Plain CSS (no UI framework)

## Setup

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

## Project Structure

```
src/
  components/
    TaskForm.jsx     - controlled form for adding a task (text + category)
    FilterBar.jsx      - All / Active / Completed filter buttons
    TaskList.jsx         - renders the filtered list, handles empty state
    TaskItem.jsx           - single task row: complete toggle, inline edit, delete
    TaskStats.jsx            - live remaining/completed counts
  hooks/
    useTasks.js               - localStorage-backed task state and CRUD operations
  App.jsx                       - top-level state, filtering logic, layout
```

## Screenshots

_Add 2–3 screenshots of the running app here before submitting, e.g.:_

```
![Task list with categories](screenshots/list.png)
![Editing a task](screenshots/edit.png)
![Filtered view](screenshots/filter.png)
```

## Known Limitations

- Categories are a fixed set (Work, Personal, Urgent) and cannot be customized.
- No due dates or reminders.
- Task order is fixed by creation time (newest first) — no manual reordering.
