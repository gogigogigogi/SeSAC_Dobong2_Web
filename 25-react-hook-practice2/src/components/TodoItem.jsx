export default function TodoItem({ todo, completeDispatch, deleteDispatch }) {
  return (
    <li
      className='todo-item'
      key={todo.id}
      onClick={() => completeDispatch(todo.id)}
    >
      <p className={`todo-item-content ${todo.completed ? 'complete' : null}`}>
        {todo.text}
      </p>
      <button
        className='todo-item-button'
        onClick={() => deleteDispatch(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}
