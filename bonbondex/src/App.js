import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home';
import NavbarFeatures from './components/NavbarFeatures';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavbarFeatures />
        <Home />
      </Fragment>

    );
  }
}

export default App;