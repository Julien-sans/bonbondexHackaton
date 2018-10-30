import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home';
import NavbarFeatures from './components/NavbarFeatures';
import Searchbar from './components/Searchbar';

import './App.css';
import './searchbar.css';

class App extends Component {

  render() {
    const donneesBonbons = require('./data/liste_bonbons.json');
    const listeBonbons = donneesBonbons.products
    console.log(listeBonbons)
    return (
      <Fragment>
        <NavbarFeatures />
        <Searchbar />
        <Home />
      </Fragment>
    );
  }
}

export default App;