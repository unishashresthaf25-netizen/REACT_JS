import { useState } from 'react';

const CATEGORY_CLASS = {
  Work: 'badge-work',
  Personal: 'badge-personal',
  Urgent: 'badge-urgent',
};

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.text);

  function saveEdit() {
    const trimmed = draft.trim();
    if (trimmed) onEdit(task.id, trimmed);
    else setDraft(task.text);
    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') saveEdit();
    if (e.key === 'Escape') {
      setDraft(task.text);
      setIsEditing(false);
    }
  }

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label="Mark complete"
      />

      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={draft}
          autoFocus
          onChange={(e) => setDraft(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className="task-text" onDoubleClick={() => setIsEditing(true)}>
          {task.text}
        </span>
      )}

      <span className={`badge ${CATEGORY_CLASS[task.category] || ''}`}>{task.category}</span>

      <button className="icon-btn" onClick={() => setIsEditing(true)} aria-label="Edit task">
        ✎
      </button>
      <button className="icon-btn" onClick={() => onDelete(task.id)} aria-label="Delete task">
        ✕
      </button>
    </li>
  );
}
