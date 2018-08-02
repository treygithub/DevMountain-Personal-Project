import React, {Component} from 'react';
import { Card, CardBody,CardSubtitle,
  CardTitle } from 'reactstrap';


class Product2 extends Component{
  render(){
   const {id, name, pWord} = this.props
  return (
    <div>
      <Card>
        <CardBody>
        <CardTitle> Admin id: {id}
        </CardTitle>
        <br />
        <CardSubtitle>Admin Name: {name}</CardSubtitle>
        <br />
        <CardSubtitle>password: {pWord}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};
}

export default Product2;