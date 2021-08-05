import React, { Component } from 'react';
import CardArray from './CardArray';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component{
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange(event) {
    console.log(event.target.value);
  }

  render() {
    return(
      <div className='tc'>
        <h1>Robots - Not Transformers</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardArray robots={robots}/>
      </div>
    );
  }
}

export default App;