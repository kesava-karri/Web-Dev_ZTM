import React, { Component } from 'react';
import CardArray from './CardArray';
import SearchBox from './SearchBox';
import './App.css';
import Search from './Search';

class App extends Component{
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ robots: user }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield)
    })
    if(this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return(
        <div className='tc'>
          <h1 className='f1'>Robots - Not Transformers</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Search>
            <CardArray robots={filteredRobots}/>
          </Search>
        </div>
      );
    }
  }
}

export default App;