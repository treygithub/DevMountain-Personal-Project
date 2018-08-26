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
        // console.log(payload)
        this.setState({
          items: payload.data
        });
      })
    }

    //map over state and pass props to child
    render() {
      let {items} = this.state

         let instanceLoopSoup  = items.map((e,i) => {
          if(e.categoryId == 1)
          return (
            <Col sm="4">
            <AdminProduct 
              key={i}
              i={i}
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
         let instanceLoopSalads  = items.map((e,i) => {
          if(e.categoryId == 2)
          return (
            <Col sm="4">
            <AdminProduct 
              key={i}
              i={i}
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

           let instanceLoopSandwitch  = items.map((e,i) => {
            if(e.categoryId == 3)
            return (
              <Col sm="4">
              <AdminProduct 
                key={i}
                i={i}
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
             let instanceLoopDesert  = items.map((e,i) => {
              if(e.categoryId == 4)
              return (
                <Col sm="4">
                <AdminProduct 
                  key={i}
                  i={i}
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

             let instanceLoopBar  = items.map((e,i) => {
              if(e.categoryId == 5)
              return (
                <Col sm="4">
                <AdminProduct 
                  key={i}
                  i={i}
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
            <Container style={{marginLeft:120}} id='soup' fluid>
                <h1 className="soup">Soups</h1>
                <Row  className="products">   
                  {instanceLoopSoup}
                </Row>
            </Container>

            <Container style={{marginLeft:120}} id='salad' fluid>
            <h1 className="soup">Salads</h1>
                <Row  className="products">   
                  {instanceLoopSalads}
                </Row>
            </Container>

            <Container style={{marginLeft:120}} id='sandwitch' fluid>
            <h1 className="soup">Sandwitches</h1>
                <Row  className="products">   
                  {instanceLoopSandwitch}
                </Row>
            </Container>

            <Container style={{marginLeft:120}} id='deserts' fluid>
            <h1 className="soup">Desert</h1>
              <Row  className="products">
                {instanceLoopDesert}
              </Row>
            </Container>

            <Container style={{marginLeft:120}} id='bar' fluid>
            <h1 className="soup">Bar</h1>
              <Row  className="products">
                {instanceLoopBar}
              </Row>
            </Container>
        </div>)
    }
}

export default AdminMenu;