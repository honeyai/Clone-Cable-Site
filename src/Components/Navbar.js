import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import PlaceHolder from "./PlaceHolder";
import { Switch } from "react-router-dom";
import Logo from "./Logo";

import "../Styles/navbar.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarBrand,
  MDBNavbarNav,
} from "mdbreact";

function Navbar() {
  return (
    <Router>
      <MDBContainer className="navbar__container navbar">
        <MDBNavbar className="navbar" color="amber lighten-4" light>
          <MDBContainer className="navbar__container">
            <MDBNavbarBrand className="navbar__Brand">
              <Logo />
            </MDBNavbarBrand>
            <MDBNavbarNav className="navbar__LinkContainer">
              <MDBNavItem className="navbar__Link">
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="navbar__Link">
                <MDBNavLink to="/NewPage">Link</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/NewPage" component={PlaceHolder} />
      </Switch>
    </Router>
  );
}

export default Navbar;
