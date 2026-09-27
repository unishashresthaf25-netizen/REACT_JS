import { useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import FilterBar from './components/FilterBar.jsx';
import TaskList from './components/TaskList.jsx';
import TaskStats from './components/TaskStats.jsx';
import { useTasks } from './hooks/useTasks.js';

export default function App() {
  const { tasks, addTask, editTask, toggleComplete, deleteTask } = useTasks();
  const [filter, setFilter] = useState('All');

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  const emptyMessage =
    tasks.length === 0
      ? 'No tasks yet. Add one above to get started.'
      : `No ${filter.toLowerCase()} tasks.`;

  return (
    <>
      <header className="app-header">
        <h1>Taskboard</h1>
        <p className="tagline">Plan your day, one task at a time</p>
      </header>

      <TaskForm onAdd={addTask} />

      <div className="toolbar">
        <FilterBar activeFilter={filter} onFilterChange={setFilter} />
        <TaskStats tasks={tasks} />
      </div>

      <TaskList
        tasks={visibleTasks}
        onToggle={toggleComplete}
        onDelete={deleteTask}
        onEdit={editTask}
        emptyMessage={emptyMessage}
      />
    </>
  );
}
