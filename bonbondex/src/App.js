import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter, Switch, } from 'react-router-dom';
import { Row } from 'mdbreact';

import Home from './components/Home';
import NavbarFeatures from './components/NavbarFeatures';
import MesBonbons from './components/MesBonbons.js';
import Searchbar from './components/Searchbar.js';

import './searchbar.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listeBonbons: [],
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(search) {
    this.setState({ search: search })
  }

  componentDidMount() {
    const donneesBonbons = require('./data/liste_bonbons.json');
    const listeBonbons = donneesBonbons.products
    this.setState({
      listeBonbons: listeBonbons
    })
  }

  render() {
    const filteredList = this.state.listeBonbons.filter(
      candy =>
        this.state.search === '' || candy.product_name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(this.state.search.toLowerCase())
    )
    return (
      <BrowserRouter>
        <Fragment>
          <NavbarFeatures />
          <Switch>
            <Route exact path="(/|/home)" render={() => <Home listeBonbons={filteredList} updateSearch={this.updateSearch} />} />
            <Route exact path="/mes-bonbons" component={MesBonbons} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
