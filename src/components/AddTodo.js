import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ""
    }

    // e.target.name is input's name attribute matching state attribute (e.g. title)
    onTextChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTodo(this.state.title);
        this.setState({title: ""});
    }



  render() {
    return (
      <form onSubmit={this.onFormSubmit}
        style={{display: "flex"}}>
          <input type="text"
                name="title"
                placeholder="Add Todo..."
                style={{flex: "10", padding: "5px"}}
                value={this.state.title}
                onChange={this.onTextChange}
                />
          <input type="submit"
                value="Add"
                className="addTodoBtn"
                style={{flex: "1"}}/>
      </form>    
    )
  }
}

export default AddTodo
