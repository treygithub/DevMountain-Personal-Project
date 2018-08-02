import React from 'react';
import DeleteBTN from './DeleteBTN';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import './product.css'


const Product = (props) => {
  return (
    <div>
      <Card className="deck">
        {/* <CardImg top width="100%"  alt="Card image cap" /> */}
        <CardBody>
          <CardTitle> {props.name}</CardTitle>
          <CardSubtitle> {props.price} </CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <ButtonToolbar>
            <ButtonGroup>
              <Button size="sm" outline color="success">Add to Cart</Button>
            </ButtonGroup>
            <ButtonGroup>
              <DeleteBTN
              // id={props.categoryId}
              />
            </ButtonGroup> 
            </ButtonToolbar>  
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;