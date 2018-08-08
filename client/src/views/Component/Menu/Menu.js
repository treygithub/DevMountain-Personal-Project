import React, { Component } from 'react';
import Product from './Product/Product';
import axios from 'axios';
import './Menu.css';
import {Col, Container, Row} from 'reactstrap';


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
      console.log(items)
      let instanceLoop  = items.map((e,i) => {
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
                <Row className="products">
                {instanceLoop}
                </Row>
            </Container>
        </div>)
    }
}

export default Menu;

// //All properties in Component
// Login.propTypes = {
//   loginAdmin: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// }

// //State to be updated
// const mapStateToProps = state =>({
//   auth: state.auth,
//   errors: state.errors,
//   products:state.cart
// })

// export default connect(mapStateToProps,{ Menu })(Login);

