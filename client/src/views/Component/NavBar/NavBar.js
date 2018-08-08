import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

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
        
        <Navbar style={{zIndex:"9999"}} className="navbar fixedTop" color="faded" light >
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <NavbarBrand  className="align-center">Buttler Brothers</NavbarBrand>  
              <NavbarBrand href="/" className="align-right"><Button outline color="secondary">Make Reservations</Button></NavbarBrand>          
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink  to='/'>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  to='/Menu'>Menu</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  to='/About'>About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  to='/Features'>Features</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/Login'>Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/Cart'>Cart</NavLink>
                  </NavItem>
                 </Nav>
              </Collapse>
        </Navbar>
        
      </div>
    );
  }
}