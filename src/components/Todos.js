import React from 'react';
import TodoItem from './TodoItem';

function Todos(props) {
  return (
    <div className="todos">
      <h1>Todos</h1>
      <b>count</b>: {props.todos.length}
       {
         props.todos.map((todo) => (
           <TodoItem key={todo.id} todo={todo} />
         ))
        }
    </div>
  );
}

export default Todos;
