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
    return (
      <div style={this.itemStyle()}>
        {this.props.todo.title}
      </div>
    )
  }
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;