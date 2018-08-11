import React, { Component } from 'react';
import Product from './Product/Product';
import axios from 'axios';
import './Menu.css';
import {Col, Container, Row, Button, Media} from 'reactstrap';
import vedio from './vedio.mp4';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import WOW from 'wowjs';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[]
    }
   
    this.getProducts = this.getProducts.bind(this)
  }    

    //Life-cycle
    componentDidMount(){
      this.getProducts();
      const wow = new WOW.WOW();
        wow.init();
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
      
      let instanceLoopStarters  = items.map((e,i) => {
        if(e.categoryId === 1 || e.categoryId === 2)
        return (
          <Col sm="4">
          <Product 
            key={i}
            i={i}
            name={e.name}
            price={e.price}
            description={e.description}
            catId={e.categoryId}
            img={e.productImage}
            id={e._id}
            />  
            </Col>
         )})
         let instanceLoopLunch  = items.map((e,i) => {
          if(e.categoryId === 3 || e.categoryId === 4)
          return (
            <Col sm="4">
            <Product 
              key={i}
              i={i}
              name={e.name}
              price={e.price}
              description={e.description}
              catId={e.categoryId}
              img={e.productImage}
              id={e._id}
              />  
              </Col>
           )})
           let instanceLoopDesert  = items.map((e,i) => {
            if(e.categoryId === 5)
            return (
              <Col sm="4">
              <Product 
                key={i}
                i={i}
                name={e.name}
                price={e.price}
                description={e.description}
                catId={e.categoryId}
                img={e.productImage}
                id={e._id}
                />  
                </Col>
             )})
             let instanceLoopBar  = items.map((e,i) => {
              if(e.categoryId === 6)
              return (
                <Col sm="4">
                <Product 
                  key={i}
                  i={i}
                  name={e.name}
                  price={e.price}
                  description={e.description}
                  catId={e.categoryId}
                  img={e.productImage}
                  id={e._id}
                  />  
                  </Col>
               )})

        //Render item to screen + link button to form field
         return (
        <div>
            <Container className="container">
                <Row>
                    <Col >
                        <Media className="content wow fadeInLeft " data-wow-duration="2s"   body align="middle">
                            <h4 heading className="pretty">Menu</h4>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <br/>
                            <AnchorLink href='#starters'><Button outline color="secondary">Starters</Button></AnchorLink>
                            <AnchorLink href='#lunch'><Button outline color="secondary">Lunch</Button></AnchorLink>
                            <AnchorLink href='#bar'><Button outline color="secondary">Bar</Button></AnchorLink>
                        </Media>
                    </Col>
                     <Col > 
                        <Media className="content wow fadeInRight " data-wow-duration="2s">
                        <video style={{ width:'100%',height:'100%'}} src={vedio} autoPlay='true' loop="true"></video>
                            {/* <img className=" img-fluid" style={{ width:'100%',height:'100vh '}} src={vedio.mp4} alt="Food" /> */}
                        </Media>
                     </Col>
                </Row> 
            </Container>

            <Container id='starters' fluid>
                <Row  className="products"> 
                    {instanceLoopStarters}
                </Row>
            </Container>

            <Container id='lunch' fluid>
                <Row  className="products">   
                  {instanceLoopLunch}
                </Row>
            </Container>

            <Container id='desert' fluid>
              <Row  className="products">
                {instanceLoopDesert}
              </Row>
            </Container>

            <Container id='bar' fluid>
              <Row  className="products">
                {instanceLoopBar}
              </Row>
            </Container>
            
        </div>)
    }
}

export default Menu;

