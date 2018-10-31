import React, { Fragment } from 'react';
import { Navbar } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import '../style/NavbarFeatures.scss';

class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <Fragment>
        <Navbar color=" fixed-top " dark expand="md" scrolling >
          <NavLink exact to='/Home' className="mr-3">
            <strong>Dead Candy</strong>
          </NavLink>
          <NavLink className="nav-item" exact to="/mes-bonbons">Mes victimes</NavLink>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavbarFeatures;
