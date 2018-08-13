import React, {Component} from 'react'
import './footersubscribe.css'
import {Button} from 'reactstrap'

class FooterSubscribe extends Component {

render(){
  return (
    <div>
      <div className="col-md-4 footer-Subscribe">
        <h6  className=" footer-Subscribe-Header">Subscribe To Our Newsletter</h6>
        <form>
            <input type="email" name="email" placeholder="Enter Email..." required/>
            <input type="hidden" name="content" value=""/>
            <Button outline type="submit" name="submit" className="button_1">Subscribe</Button>
        </form>
        </div>
    </div>
  )
}
}
export default FooterSubscribe;
