import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    itemStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            backgroundColor: "#f4f4f4",
            padding: '10px',
            border: "1px #ccc solid"
        }
    }


  render() {
    const { title, id, completed } = this.props.todo;
    return (
      <div style={this.itemStyle()}>
        <input type="checkbox" checked={completed} onChange={this.props.toggleCompleted.bind(this, id)} />
        {title}
        {' '}
        <button style={deleteBtnStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
      </div>
    )
  }
}



const deleteBtnStyle = {
    backgroundColor: "#f00",
    color: "#fff",
    borderRadius: "50%",
    border: "none"
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;