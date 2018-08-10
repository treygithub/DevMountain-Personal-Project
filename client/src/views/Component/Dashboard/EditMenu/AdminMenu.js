import React, { Component } from 'react';
import AdminProduct from './AdminProduct';
import axios from 'axios';
import {Col, Container, Row} from 'reactstrap';


class AdminMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      name: '',
      price:'',
      description:'',
      catId:'',
      img:'',
      id:''
    }
   
    this.getProducts = this.getProducts.bind(this)
  }    
    //Life-cycle
    componentDidMount(){
      this.getProducts();
    }
    //Get
    getProducts(){
      axios.get('/api/product').then(payload => {
        console.log(payload)
        this.setState({
          items: payload.data
        });
      })
    }
    //map over state and pass props to child
    render() {
      let {items} = this.state
      let instanceLoop  = items.map((e,i) => {
        return (
          <Col sm="4">
          <AdminProduct 
            key={i}
            name={e.name}
            price={e.price}
            description={e.description}
            catId={e.categoryId}
            img={e.productImage}
            id={e._id}
            getProducts={this.getProducts}
            />  
            </Col>
         )})

        //Render item to screen + link button to form field
         return (
        <div>
            <Container className="container">
                <Row className="products">
                {instanceLoop}
                </Row>
                <p>THIS IS FROM ADMIN MENU</p>
            </Container>
        </div>)
    }
}

export default AdminMenu;