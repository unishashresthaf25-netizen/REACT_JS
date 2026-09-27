import { useState, useEffect } from 'react';

const STORAGE_KEY = 'task-manager-tasks';

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text, category) {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      category,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  }

  function editTask(id, newText) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  }

  function toggleComplete(id) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return { tasks, addTask, editTask, toggleComplete, deleteTask };
}
