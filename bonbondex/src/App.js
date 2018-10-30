import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home';
import NavbarFeatures from './components/NavbarFeatures';
import Searchbar from './components/Searchbar';

import './App.css';
import './searchbar.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listeBonbons: []
    }
  }

  componentDidMount(){
    const donneesBonbons = require('./data/liste_bonbons.json');
    const listeBonbons = donneesBonbons.products
    this.setState({
      listeBonbons: listeBonbons
    })
  }

  render() {
    return (
      <Fragment>
        <NavbarFeatures />
        <Searchbar />
        <Home listeBonbons={this.state.listeBonbons} />
      </Fragment>
    );
  }
}

export default App;