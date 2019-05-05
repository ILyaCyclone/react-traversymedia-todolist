import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

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

  render() {
    return (
      <div className="App">
      <h1>App</h1>
      <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
