import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewToDo from './components/NewToDo';

import { Todo } from './todo.model';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }]);
    console.log(text);
  };


  const todoDeleteHandler = (todoId: string) => {
    setTodos(preTodos => {
      return preTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler}></NewToDo>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}></TodoList>
    </div>
  );
}

export default App;
