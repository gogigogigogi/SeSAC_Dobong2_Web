export default function TodoItem({ todo, completeDispatch, deleteDispatch }) {
  return (
    <li
      className='todo-item'
      key={todo.id}
      onClick={() => completeDispatch(todo.id)}
    >
      <p className={`todo-item-content ${todo.complete ? 'complete' : null}`}>
        {todo.content}
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
