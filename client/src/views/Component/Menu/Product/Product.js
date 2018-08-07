import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import './product.css'


const Product = (props) => {
  console.log("src",props.img)
  return (
    <div>
      <Card className="deck">
        <CardImg top src={props.img} width="100%" height="100%"  alt="Card image cap" />
        <CardBody>
            <CardTitle> {props.name}</CardTitle>
            <CardSubtitle> {props.price}</CardSubtitle>
            <CardText>{props.description}</CardText>
            <ButtonToolbar>
                <ButtonGroup>
                  <Button size="sm" outline color="success">Add to Cart</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;