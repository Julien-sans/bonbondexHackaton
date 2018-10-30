import React, { Component } from 'react';
import NavbarFeatures from './components/NavbarFeatures';
import Searchbar from './components/Searchbar';

import './App.css';
import './searchbar.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFeatures />
        <Searchbar />
      </div>
    );
  }
}

export default App;