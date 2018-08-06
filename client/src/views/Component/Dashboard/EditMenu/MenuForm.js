import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Media } from 'reactstrap';
import { connect } from 'react-redux';
// import { postNewProduct } from '../../../../ducks/actions/productActions';
import { addProduct } from "../../../../ducks/reducers/newProductReducer"
import PropTypes from 'prop-types';
import  { withRouter } from 'react-router-dom';

class MenuForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      price:'',
      description:'',
      categoryId:'',
      productImage:'',
      errors:''
    }
    this.onChange1=this.onChange1.bind(this);
    this.addProduct=this.addProduct.bind(this);
}

onChange1(e){
  this.setState({[e.target.name]: e.target.value});
}

addProduct(){
  let { name, price, description, categoryId, productImage} = this.state;
  this.props.addProduct( name, price, description, categoryId, productImage, this.props.history);
}  

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <Form onSubmit={this.addProduct} className="container" style={{maxWidth:600}}>
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
     
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}


const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { addProduct })(withRouter(MenuForm));