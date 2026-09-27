export default function TaskStats({ tasks }) {
  const remaining = tasks.filter((t) => !t.completed).length;
  const completed = tasks.length - remaining;

  return (
    <div className="task-stats">
      <span>{remaining} remaining</span>
      <span className="dot">·</span>
      <span>{completed} completed</span>
    </div>
  );
}
