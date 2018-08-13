import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Svg from '../About/About'

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render() {
    
    return (
      <div>
        <Navbar navbar  color="faded" light >
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <NavbarBrand  className="align-center styleMe">Bar-N-Grill</NavbarBrand>
              <NavbarBrand href="/" className="align-right"><Button outline color="secondary">Make Reservations</Button></NavbarBrand>      
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav className="align-left navStuff"  navbar>
                  <NavItem >
                    <NavLink className="navStuff" to='/'>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="navStuff"  to='/Menu'>Menu</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="navStuff" to='/About'>About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="navStuff" to='/Features'>Features</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="navStuff" to='/Login'>Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="navStuff" to='/Cart'>Cart</NavLink>
                  </NavItem>
                 </Nav>
              </Collapse>
        </Navbar>
        
        
      </div>
    );
  }
}