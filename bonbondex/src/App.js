import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './components/Home';
import NavbarFeatures from './components/NavbarFeatures';
import MesBonbons from './components/MesBonbons.js';
import Searchbar from './components/Searchbar';

import './searchbar.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listeBonbons: []
    }
  }

  componentDidMount() {
    const donneesBonbons = require('./data/liste_bonbons.json');
    const listeBonbons = donneesBonbons.products
    this.setState({
      listeBonbons: listeBonbons
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <NavbarFeatures />
          <Searchbar />
          <Switch>
            <Route exact path="(/|/home)" render={() => <Home listeBonbons={this.state.listeBonbons} />} />
            <Route exact path="/mes-bonbons" component={MesBonbons} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
