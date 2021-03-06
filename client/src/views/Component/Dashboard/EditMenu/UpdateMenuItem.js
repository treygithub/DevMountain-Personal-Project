import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Dropzone from 'react-dropzone'
import axios from 'axios';


class UpdateMenuItem extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      price:'',
      description:'',
      categoryId:'',
      productImage:'',
      modal: false
    }
    this.onChange1=this.onChange1.bind(this);
    this.onchange2=this.onchange2.bind(this);
    this.updateProduct=this.updateProduct.bind(this);
    this.toggle = this.toggle.bind(this);
}

toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

onChange1(e){
  // console.log('this is e ', e)
  this.setState({[e.target.name]: e.target.value});
}
onchange2(val){ 
  // console.log('this is val ', val)
  this.setState({
    categoryId: val
  })
}

updateProduct = async(e) => {
  e.preventDefault();
  
  const { name, price, description, categoryId, productImage} = this.state;
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);
  data.append('price', price);
  data.append('description', description);
  data.append('categoryId', categoryId);
  data.append('productImage', productImage);
  const response = await axios.post(`/api/product/update`, data)
}


onFileDrop = (file) => {
  this.setState({productImage: file[0]});
  // console.log(this.state.productImage);
}

  render() {
  
    return (
        <div>
        <Button color="danger" onClick={this.toggle}>Update</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Update a Menu item</ModalHeader>
          <ModalBody>
      <Form type="multipart/form-data" onSubmit={this.addProduct} className="container" style={{maxWidth:600}}>
        <FormGroup>
          
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
              <img style={{width: '199px', height: '198px'}} alt="hello" src={this.state.productImage.preview && this.state.productImage.preview} />
              </Dropzone>
        </FormGroup>
     
        <Button  onClick={ () =>this.updateProduct(this.props.id)} type="submit">Submit</Button>
      </Form>
      </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
    )
  }
}

export default UpdateMenuItem;