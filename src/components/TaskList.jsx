import TaskItem from './TaskItem.jsx';

export default function TaskList({ tasks, onToggle, onDelete, onEdit, emptyMessage }) {
  if (tasks.length === 0) {
    return <p className="empty-message">{emptyMessage}</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
