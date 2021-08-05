import React, { Component } from 'react';
import CardArray from './CardArray';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component{
  constructor() {
    super()
    this.state = {
      // robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield)
    })
    return(
      <div className='tc'>
        <h1 className='f1'>Robots - Not Transformers</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardArray robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;