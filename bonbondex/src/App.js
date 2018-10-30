import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    const donneesBonbons = require('./liste_bonbons.json');
    const listeBonbons = donneesBonbons.products
    console.log(listeBonbons)
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
