import React, {Fragment} from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

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
        <Navbar color="bg-dark fixed-top " dark expand="md" scrolling >
          <NavLink exact to='/Home'>
            <strong>CandyDex</strong>
          </NavLink>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
                <NavLink className="nav-item text-white" exact to="/mes-bonbons">Mes Bonbons</NavLink>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavbarFeatures;
