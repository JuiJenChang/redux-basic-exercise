import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const [todoItem, setTodoItem] = useState("");

  const todolist = useSelector(state => state.addTodoReducer.todolist);
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: { todoItem }
    });
    setTodoItem("");
  };

  const removeTodo = e => {
    dispatch({
      type: "REMOVE_TODO",
      payload: { e }
    });
  };
  console.log(todolist);

  return (
    <div>
      <div>
        <input value={todoItem} onChange={e => setTodoItem(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todolist.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => removeTodo(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
