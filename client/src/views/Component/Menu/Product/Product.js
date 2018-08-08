import axios from 'axios';
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import './product.css'

class Product extends Component {
  constructor(props){
    super(props);
    this.State = {
      cart:[]
    }
  }

handleClick(id) {
    console.log(id)
    axios.post(`/api/order/${id}`, {quantity: 1} )
    .then(console.log)
    .catch(err => console.log(err))
}

render(){
    
const {img, name, price, description, id} = this.props;
console.log(id)
  return (
    <div>
      <Card id={id} className="deck">
        <CardImg top src={img} width="100%" height="100%"  alt="Card image cap" />
        <CardBody>
            <CardTitle> {name}</CardTitle>
            <CardSubtitle> {price}</CardSubtitle>
            <CardText>{description}</CardText>
            <ButtonToolbar>
                <ButtonGroup>
                  <Button onClick={()=>this.handleClick(id)} size="sm" outline color="success">Add to Cart</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </CardBody>
      </Card>
    </div>
  );
};
};

export default Product;