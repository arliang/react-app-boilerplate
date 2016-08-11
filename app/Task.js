import React, { Component } from 'react';
import {render} from 'react-dom';

class Task extends Component {
  render(){
    return (
      <p><label><input type="checkbox" defaultChecked={task.done} />{task.id} {task.name}</label></p>
    );
  }
}