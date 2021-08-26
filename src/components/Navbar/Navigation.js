import React, {Component} from 'react';
import '../css/navigation.css';
import Home from '../pages/home.js';
import Logo from '../pages/logo.js';
import Second from '../pages/home';
import { Switch, Route, Link } from 'react-router-dom';
import {Container,Navbar,Nav,NavItem } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

class Navigation extends Component {
  render() {
    return (
      <div>
        <div>
        <Navbar collapseOnSelect expand="sm" expand="lg">
        <Container>
            <Navbar.Brand href=""> <img src = "https://www.fliqaindia.com/static/media/Fliqa-India-Logo-1-old.c1e4f1c8.webp" alt = ""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse class="navbar-collapse justify-content-start collapse show" id="navbarCollapse">
            <Nav className="me-auto">
            <NavItem>   <Link className="nav-link"   to="/">HOME</Link> </NavItem> 
            <NavItem>   <Link  className="nav-link" to="/about">ABOUT US</Link> </NavItem> 
            <NavItem>    <Link className="nav-link"   to="/logo">SERVICES</Link> </NavItem> 
            <NavItem>   <Link className="nav-link"   to="/home">FREELANCERS</Link> </NavItem> 
            <NavItem>   <Link  className="nav-link" to="/about">BLOG</Link> </NavItem> 
            <NavItem>    <Link className="nav-link"   to="/contact">TUTORIAL</Link> </NavItem> 
            <NavItem>    <Link className="nav-link"   to="/contact">CONTACT US</Link> </NavItem>
            <button type="submit" id="nav-quote" class="nav-link">LOGIN / SIGNUP</button>
            </Nav>
            </Navbar.Collapse>
        </Container>
	</Navbar>
    <div>
          <Switch>
            <Route exact path='/' title="Hello" component={Home} />
            <Route exact path='/logo' title="Hello world" component={Logo} />
            <Route exact path = '/' exact component ={Second} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
          <Helmet>
            <title>FliqaIndia</title>
          </Helmet>
         
        </div>
        </div>
       
      </div>
    );
  }
}
export default Navigation;