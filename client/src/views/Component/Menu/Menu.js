import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import './Menu.css';
import {Col, Container, Row} from 'reactstrap';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      id: '',
      url:'',
      title:''
    }
   
    this.getProducts = this.getProducts.bind(this)
  }    
    //Life-cycle
    componentDidMount(){
      this.getProducts();
    }
    //Get
    getProducts(){
      axios.get('/api/fetchListings').then(payload2 => {
        this.setState({
          items: payload2.data
        });
      })
    }
    //map over state and pass props to child
    render() {
      let {items} = this.state
      let instanceLoop  = items.map((e,i) => {
        return (
          <Col sm="4">
          <Product 
            key={i}
            id={e.card_id}
            url={e.url}
            title={e.title}
            />  
            </Col>
         )})

        //Render iteam to screen + link button to form field
         return (
        <div>
            <Container className="container">
                <Row className="products">
                {instanceLoop}
                </Row>
            </Container>
        </div>)
    }
}

export default Menu;