import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        {this.props.todo.title}
      </div>
    )
  }
}

export default TodoItem;