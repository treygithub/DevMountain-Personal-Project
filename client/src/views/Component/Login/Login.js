import React, { Component } from 'react';
import Product2 from './Product2';
import axios from 'axios';
import {Col, Container, Row} from 'reactstrap';
import Example from './login2';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[]
    }
   
    this.getProducts2 = this.getProducts2.bind(this)
  }    
    //Life-cycle
    componentDidMount(){
      this.getProducts2();
    }
    //Get
    getProducts2(){
      axios.get('/api/auth').then(payload22 => {
        this.setState({
          items: payload22.data
        })
      })
    }
    //map over state and pass props to child
    render() {
      let {items} = this.state
      let instanceLoop2  = items.map((e,i) => {
        return (
          <Col sm="4" key={i}>
          <Product2 
            id={e.admin_name_id}
            name={e.employee_name}
            pWord={e.password}
            
            />  
            </Col>
         )})

        //Render iteam to screen + link button to form field
         return (
        <div>
            <Container>
                <Row>
                {instanceLoop2}
                </Row>
                <Example/>
            </Container>
        </div>)
    }
}

export default Login;