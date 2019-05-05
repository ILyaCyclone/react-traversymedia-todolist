import React from 'react';

function Todos(props) {
  return (
    <div className="todos">
      <h1>Todos</h1>
      count: {props.todos.length}
       {
         props.todos.map((todo) => 
           <h3>{ todo.title }</h3>
         )
      }
    </div>
  );
}

export default Todos;
