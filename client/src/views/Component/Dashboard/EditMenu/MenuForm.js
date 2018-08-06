import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Media } from 'reactstrap';
import { connect } from 'react-redux';
// import { postNewProduct } from '../../../../ducks/actions/productActions';
import { addProduct } from "../../../../ducks/reducers/newProductReducer"
import PropTypes from 'prop-types';
import  { withRouter } from 'react-router-dom';
import moment from 'moment';
import Dropzone from 'react-dropzone'
import axios from 'axios';



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

addProduct = async(e) => {
  e.preventDefault();
  const { name, price, description, categoryId, productImage} = this.state;
  console.log(productImage);
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);
  data.append('price', price);
  data.append('description', description);
  data.append('categoryId', categoryId);
  data.append('productImage', productImage);

  console.log("i posted")
  const response = await axios.post("/api/product", data)
 
}

// addProduct async (){
//   const { name, price, description, categoryId, productImage} = this.state;
//   console.log(this.state.productImage);
//   // this.props.addProduct( name, price, description, categoryId, productImage);
//   const response = await axios.post("/api/product", { name, price, description, categoryId, productImage})
// }

formatFilename = (filename) => {
  const date = moment().format('YYYYMMDD');
  const randomString = Math.random()
    .toString(36)
    .substring(2, 7);
  const cleanFileName = filename[0].preview.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const newFilename = `${date}-${randomString}-${cleanFileName}`;
  return newFilename.substring(0, 60);
};

// onImageChange = (e) => {
//   const val = e.target.value;
//   const newVal = this.formatFilename(val)
//   this.setState({productImage: newVal.toString()})
// }

onFileDrop = (file) => {
  // console.log(file[0].preview)
  // const newImg = this.formatFilename(file);
  this.setState({productImage: file[0]});
  // console.log(this.state.productImage);
  console.log(this.state.productImage);
}

  render() {
    console.log(this.state.productImage)

    // console.log(this.state.productImage)
    // console.log(this.props)
    return (
      <Form type="multipart/form-data" onSubmit={this.addProduct} className="container" style={{maxWidth:600}}>
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
          {/* <Input 
            value={this.state.productImage}
            onChange={this.onChange1}
            type="file" 
            name="productImage" 
            id="File" 
            className="File"
            /> */}
            <Dropzone onDrop={this.onFileDrop} />
          <FormText color="muted">
            Picture and Description fields are optional, however every item must have a name, price and Category.
          </FormText>
        </FormGroup>
     
        <Button onClick = {this.addProduct} type="submit">Submit</Button>
      </Form>
    );
  }
}


const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { addProduct })(withRouter(MenuForm));