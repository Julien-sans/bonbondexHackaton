import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home';
import NavbarFeatures from './components/NavbarFeatures';
import MesBonbons from './components/MesBonbons.js';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    const donneesBonbons = require('./data/liste_bonbons.json');
    const listeBonbons = donneesBonbons.products
    console.log(listeBonbons)
    return (
        <BrowserRouter>
          <Fragment>
            <NavbarFeatures/>
            <Switch>
              <Route exact path="(/|/home)" component={Home} />
              <Route exact path="/mes-bonbons" component={MesBonbons} />
            </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
