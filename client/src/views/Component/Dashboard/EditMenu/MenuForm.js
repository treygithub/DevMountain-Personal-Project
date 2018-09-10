import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Media } from 'reactstrap';
import moment from 'moment';
import Dropzone from 'react-dropzone'
import axios from 'axios';
import './menuform.css';
import  { withRouter } from 'react-router-dom';

class MenuForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      price:'',
      description:'',
      categoryId:'',
      productImage:''
    }
    this.onChange1=this.onChange1.bind(this);
    this.onchange2=this.onchange2.bind(this);
    this.addProduct=this.addProduct.bind(this);
}

onChange1(e){
  this.setState({[e.target.name]: e.target.value});
}
onchange2(val){
  this.setState({
    categoryId: val
  })
}

addProduct = async(e) => {
  e.preventDefault();
  const { name, price, description, categoryId, productImage} = this.state;
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);
  data.append('price', price);
  data.append('description', description);
  data.append('categoryId', categoryId);
  data.append('productImage', productImage);
  const response = await axios.post("/api/product", data)
  .then(() => this.props.getProducts())
  .catch(err => console.log(err))
}

formatFilename = (filename) => {
  const date = moment().format('YYYYMMDD');
  const randomString = Math.random()
    .toString(36)
    .substring(2, 7);
  const cleanFileName = filename[0].preview.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const newFilename = `${date}-${randomString}-${cleanFileName}`;
  return newFilename.substring(0, 60);
};

onFileDrop = (file) => {
  this.setState({productImage: file[0]});
}

  render() {
    // console.log( 'category state is ' + this.state.categoryId)
    return (
      <Form type="multipart/form-data" onSubmit={this.addProduct} className="container" style={{maxWidth:600}}>
        <FormGroup>
          <Media className="header1" body align="middle">Create a new Menu item</Media>
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

        
        
            <select
            type="select"
            value={this.onchange2.val}
            onChange={(e) => this.onchange2(e.target.value)}>
              <option name="categoryId" value="1">Soup</option>
              <option name="categoryId" value="2">Salad</option>
              <option name="categoryId" value="3">Sandwitch</option>
              <option name="categoryId" value="4">Deserts</option>
              <option name="categoryId" value="5">Bar</option>
            </select>
        
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
            <Label for="file">File</Label>
              <Dropzone id="file" onDrop={this.onFileDrop}  >
              <img style={{width: '199px', height: '198px'}} alt="trey" src={this.state.productImage.preview && this.state.productImage.preview} />
              </Dropzone>
            <FormText color="muted">
              Picture and Description fields are optional, however every item must have a name, price and Category.
            </FormText>
        </FormGroup>
     
        <Button onClick = {this.addProduct} type="submit">Submit</Button>
      </Form>
    );
  }
}

export default withRouter(MenuForm)