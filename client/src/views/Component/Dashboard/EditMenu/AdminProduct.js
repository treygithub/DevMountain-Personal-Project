import React from 'react';
import DeleteProductBTN from './DeleteProductsBTN'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
  import './adminMenu.css';


const AdminProduct = (props) => {
  return (
    <div>
      <Card style={{marginBottom:10}} className="deck">
        <CardImg id="card-img" top src={props.img} width="100%"  alt="Card image cap" />
        <CardBody>
          <CardTitle> {props.name}</CardTitle>
          <CardSubtitle> {props.price}</CardSubtitle>
          <CardText>{props.description}</CardText>
          <ButtonToolbar>
            <ButtonGroup>
              <DeleteProductBTN
              id={props.id}
              getProducts={props.getProducts}
              />
            </ButtonGroup> 
          </ButtonToolbar>  
        </CardBody>
      </Card>
    </div>
  );
};

export default AdminProduct;