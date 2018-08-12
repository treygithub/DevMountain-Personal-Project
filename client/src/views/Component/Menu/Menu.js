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
      items:[],
   
    }
   
    this.getProducts = this.getProducts.bind(this)
 
  }    

    // Life-cycle
    componentDidMount(){
      this.getProducts();
      const wow = new WOW.WOW();
        wow.init();
       
    }

    // Get
    getProducts(){
      axios.get('/api/product').then(payload => {
        console.log(payload)
        this.setState({
          items: payload.data
        });
      })
    }
    
    // Mapping Section by category
    render() {
      let {items} = this.state
     
         let instanceLoopSoup  = items.map((e,i) => {
          if(e.categoryId == 1)
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
         let instanceLoopSalads  = items.map((e,i) => {
          if(e.categoryId == 2)
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

           let instanceLoopSandwitch  = items.map((e,i) => {
            if(e.categoryId == 3)
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
              if(e.categoryId == 4)
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
              if(e.categoryId == 5)
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
        
         return (

        <div>
          <aside>
            <div className="inner">
              <ul id="menu">
              <li><AnchorLink className="text" href='#soup'><Button outline color="secondary">Soup</Button></AnchorLink></li>

              <li><AnchorLink className="text" href='#salad'><Button outline color="secondary">Salad</Button></AnchorLink></li>

              <li><AnchorLink className="text" href='#sandwitch'><Button outline color="secondary">Sandwitch</Button></AnchorLink></li>

              <li><AnchorLink className="text" href='#deserts'><Button outline color="secondary">Deserts</Button></AnchorLink></li>

              <li><AnchorLink className="text" href='#bar'><Button outline color="secondary">Bar</Button></AnchorLink>></li>

              <li><AnchorLink className="text" href='#Home'><Button outline color="secondary">Home</Button></AnchorLink></li>
              </ul>
            </div>
          </aside>

             <Container className="container">
                <Row>
                    <Col >
                        <Media id="Home" className="content wow fadeInLeft" data-wow-duration="2s"   body align="middle">
                            <h4 heading className="pretty">Menu</h4>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <br/>
                            <div >
                                <AnchorLink href='#soup'><Button outline color="secondary">Soup</Button></AnchorLink>

                                <AnchorLink href='#salad'><Button outline color="secondary">Salad</Button></AnchorLink>

                                <AnchorLink href='#sandwitch'><Button outline color="secondary">Sandwitch</Button></AnchorLink>

                                <AnchorLink href='#deserts'><Button outline color="secondary">Deserts</Button></AnchorLink>
                                
                                <AnchorLink href='#bar'><Button outline color="secondary">Bar</Button></AnchorLink>
                                
                            </div>
                        </Media>
                    </Col>
                     <Col > 
                        <Media className="content wow fadeInRight " data-wow-duration="2s">
                        <video style={{ width:'100%',height:'100%'}} src={vedio} autoPlay='true' loop="true"></video>
                        </Media>
                     </Col>
                </Row> 
            </Container>


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

export default Menu;

