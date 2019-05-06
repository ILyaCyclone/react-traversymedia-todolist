import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import uuid from 'uuid';

import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';

import About from './components/pages/About';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: []
  }


  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({todos: res.data}));
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
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`) // not really deleting on server, so we use filter to "delete" record
      .then(res => this.setState(
        {todos: this.state.todos.filter(todo => todo.id !== id)}
      ));
    
  }


  onAddTodo = (title) => {
    axios.post("http://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    }).then(res => 
    this.setState({todos: [...this.state.todos, res.data]})
    );
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
