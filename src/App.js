import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'todo1',
        completed: false
      },
      {
        id: 2,
        title: 'todo2',
        completed: true
      }
    ]
  }


  toggleCompleted = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }


  deleteTodo = (id) => {
    this.setState(
      {todos: this.state.todos.filter(todo => todo.id !== id)}
    );
  }


  onAddTodo = (title) => {
    const newTodo = {
      id: 4, //TODO generate unique ID
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo onAddTodo={this.onAddTodo}/>
          <Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    )
  }
}

export default App;
