import React, { useReducer, useRef, useState } from 'react';
import TodoItem from './TodoItem';

const TODO_ACTION_TYPE = {
  add: 'ADD',
  delete: 'DELETE',
  complete: 'COMPLETE',
};

const reducer = (prevState, action) => {
  // (새로운 Todo 추가 로직)
  switch (action.type) {
    case TODO_ACTION_TYPE.add:
      const idArr = prevState.map((todo) => {
        return todo.id;
      });
      const newId = prevState.length ? Math.max(...idArr) + 1 : 1;
      return [
        ...prevState,
        {
          id: newId,
          content: action.payload,
          complete: false,
        },
      ];

    // (Todo 완료 상태 토글 로직)
    case TODO_ACTION_TYPE.complete:
      return prevState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    // (Todo 삭제 로직)
    case TODO_ACTION_TYPE.delete:
      const deletedTodoList = prevState.filter((todo) => {
        return todo.id !== action.payload;
      });

      return deletedTodoList;

    default:
      return;
  }
};

const TodoApp = () => {
  // 상태 관리
  const [todoList, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState('');
  const inputRef = useRef();

  // 추가 이벤트 핸들러
  const addTodoHandler = (content) => {
    dispatch({ type: TODO_ACTION_TYPE.add, payload: content });
    setInput('');
    inputRef.current.focus();
  };
  const completeTodoHandler = (id) => {
    dispatch({ type: TODO_ACTION_TYPE.complete, payload: id });
  };
  const deleteTodoHandler = (id) => {
    dispatch({ type: TODO_ACTION_TYPE.delete, payload: id });
  };

  return (
    <div className='todo-list-container'>
      <h1 className='todo-list-header'>Todo App</h1>
      <div className='todo-list-input-box'>
        <input
          className='todo-list-input'
          value={input}
          placeholder='Add a new todo'
          ref={inputRef}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className='todo-list-button'
          onClick={() => addTodoHandler(input)}
        >
          Add
        </button>
      </div>
      <ul className='todo-list-box'>
        {todoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              completeDispatch={completeTodoHandler}
              deleteDispatch={deleteTodoHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
