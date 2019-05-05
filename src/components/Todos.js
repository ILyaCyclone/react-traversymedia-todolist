import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos(props) {
  return (
    <div className="todos">
      <h1>Todos</h1>
      <b>count</b>: {props.todos.length}
       {
         props.todos.map((todo) => (
           <TodoItem key={todo.id} todo={todo}
              toggleCompleted={props.toggleCompleted}
              deleteTodo={props.deleteTodo} />
         ))
        }
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
