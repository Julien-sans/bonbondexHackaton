import React, { Component } from 'react';
import NavbarFeatures from './components/NavbarFeatures';
import './App.css';

class App extends Component {

  render() {
    const donneesBonbons = require('./liste_bonbons.json');
    const listeBonbons = donneesBonbons.products
    console.log(listeBonbons)
    return (
      <div className="App">
        <NavbarFeatures />
      </div>
    );
  }
}

export default App;