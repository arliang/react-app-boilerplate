import React, { Component } from 'react';
import {render} from 'react-dom';

import TodoList from './TodoList'
import TASKS from './TASKS'

class App extends Component {
  render(){
    // console.log(this.props.tasks)
    return (
      <TodoList tasks={this.props.tasks} />
    );
  }
}

render(<App tasks={TASKS} />, document.getElementById('root'));
