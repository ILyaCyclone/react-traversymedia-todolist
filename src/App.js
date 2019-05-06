import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import uuid from 'uuid';

import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';

import About from './components/pages/About';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'todo1',
        completed: false
      },
      {
        id: uuid.v4(),
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
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              // this is <React.Fragment>
              <>
                <AddTodo onAddTodo={this.onAddTodo}/>
                <Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteTodo={this.deleteTodo} />
              </>
              )}
            />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
