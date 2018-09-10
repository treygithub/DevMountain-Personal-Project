import React, {Component} from 'react'
import  './SideNav.css';
import { Button} from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class SideNav extends Component{

    render(){
  return (
    <div>
         <aside>
            <div className="inner">
              <ul id="menu">
              <li><AnchorLink className="text" href='#menu'><Button outline color="secondary">Menu</Button></AnchorLink></li>

              <li><AnchorLink className="text" href='#about'><Button outline color="secondary">About</Button></AnchorLink></li>

              <li><AnchorLink className="text" href='#features'><Button outline color="secondary">Features</Button></AnchorLink></li>

              <li><AnchorLink className="text" href='#footer'><Button outline color="secondary">Info</Button></AnchorLink></li>

              <li><AnchorLink className="text" href='#Home'><Button outline color="secondary">Home</Button></AnchorLink></li>
              </ul>
            </div>
          </aside>
    </div>
  )
}}
export default SideNav;
