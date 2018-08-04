import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Media } from 'reactstrap';
import axios from 'axios';

class MenuForm extends Component {
  constructor(){
    super();
    this.setState={
      name:'',
      price:'',
      description:'',
      categoryId:'',
      productImage:''

    }
    this.onChange1=this.onChange1.bind(this);
    this.onSubmit1=this.onSubmit1.bind(this);
}

onChange1(e){
  this.setState({[e.target.name]: e.target.value});
}

onSubmit1(e){
  e.preventDefault();
  const newPost = {
    name: this.state.name,
    price:this.state.price,
    description:this.state.description,
    categoryId:this.state.categoryId,
    productImage:this.state.productImage
  }
  axios.post('/api/products/',(newPost))
    .then(res => console.log('It worked',res.data))
    .catch(err => console.log(err.response.data))
  }  

  render() {
    return (
      <Form onSubmit={this.onSubmit} action="/public/uploads" method="POST" className="container" encType="multipart/form-data" style={{width:600}}>
        <FormGroup>
          <Media body align="middle">Create a new Menu item</Media>
          <Label for="itemName">Item Name</Label>
          <Input type="text"
           name="name" 
           id="itemName" 
           placeholder="Enter item name" 
           value={this.state.name}
           onChange={this.onChange1} 
           />
        </FormGroup>

        <FormGroup>
          <Label for="itemPrice"></Label>
          <Input type="number" 
          name="price" 
          id="itemPrice" 
          placeholder="Enter Dollar amount" 
          value={this.state.price}
          onChange={this.onChange1}
          />
        </FormGroup>

        <FormGroup>
          <Label for="SelectCategory">Select Menu Category</Label>
          <Input type="select" 
          name="categoryId" 
          id="SelectCategory" 
          value={this.state.categoryId}
          onChange={this.onChange1}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="description">Description Area</Label>
          <Input type="textarea" 
          name="description" 
          id="description" 
          placeholder="Optional...." 
          value={this.state.description}
          onChange={this.onChange1}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input 
            value={this.state.productImage}
            onChange={this.onChange1}
            type="file" 
            name="productImage" 
            id="File" 
            className="File"
            />
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