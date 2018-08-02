import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Media } from 'reactstrap';

class MenuForm extends Component {
  render() {
    return (
      <Form className="container" style={{width:600}}>
        <FormGroup>
          <Media body align="middle">Create a new Menu item</Media>
          <Label for="itemName">Item Name</Label>
          <Input type="text" name="item" id="itemName" placeholder="Enter item name" />
        </FormGroup>
        <FormGroup>
          <Label for="itemPrice"></Label>
          <Input type="number" name="price" id="itemPrice" placeholder="Enter Dollar amount" />
        </FormGroup>
        <FormGroup>
          <Label for="SelectCategory">Select Menu Category</Label>
          <Input type="select" name="select" id="SelectCategory">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description Area</Label>
          <Input type="textarea" name="text" id="description" placeholder="Optional...." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Picture and Description fields are optional, however every item must have a name, price and Category.
          </FormText>
        </FormGroup>
     
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default MenuForm;