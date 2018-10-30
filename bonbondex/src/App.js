import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home';
import NavbarFeatures from './components/NavbarFeatures';

import './App.css';

class App extends Component {

  render() {
    const donneesBonbons = require('./data/liste_bonbons.json');
    const listeBonbons = donneesBonbons.products
    console.log(listeBonbons)
    return (
      <Fragment>
        <NavbarFeatures />
        <Home />
      </Fragment>

    );
  }
}

export default App;
