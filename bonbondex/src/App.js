import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
          <BrowserRouter>
            <Switch>
              <Route exact path='/|/accueil'/>
              <Route exact path='/mes-bonbons'/>
            </Switch>
          </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
