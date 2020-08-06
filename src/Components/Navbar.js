import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import PlaceHolder from './PlaceHolder';
import { Switch } from '@material-ui/core';
import Logo from './Logo';

import '../Styles/navbar.css';
import { MDBContainer, MDBNavbar, MDBHamburgerToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBNavbarBrand, MDBNavbarNav } from 'mdbreact';

class NavbarPage extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

render() {
  return (
    <Router>
      <MDBContainer className="navbar__container">
        <MDBNavbar className="navbar" color="amber lighten-4" style={{ marginTop: '20px' }} light>
          <MDBContainer className="navbar__container">
            <MDBNavbarBrand className="navbar__Brand">
              <Logo/>
            </MDBNavbarBrand>
            <MDBHamburgerToggler className="navbar__hamburgerButton" color="#d3531a" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/NewPage">Link</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route path = "/NewPage" component={PlaceHolder}/>
      </Switch>
    </Router>
    );
  }
}

export default NavbarPage;