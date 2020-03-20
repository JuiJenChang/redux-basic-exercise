import React from "react";
import "./App.css";
import Counter from "./counter/index";
import TodoList from './todolist/TodoList';

const App = () => (
  <div>
    <Counter />
    <TodoList />
  </div>
);

export default App;
