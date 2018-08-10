import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col,Row, Container, Media } from 'reactstrap';
import './Editwebsite.css'
import axios from 'axios'
import moment from 'moment';
import Dropzone from 'react-dropzone'
import { SliderPicker } from 'react-color'

 class EditWebsite extends Component {
   constructor(){
     super();
     this.state={
       website:[],
       title:'',
       titleColor:'',
       body:'',
       bodyColor:'',
       image:''
     }
     this.onChange3=this.onChange3.bind(this);
     this.patchReq=this.patchReq.bind(this);
   }
   handleChangeComplete = (color) => {
     console.log(color.rgb)
    this.setState({ titleColor: color.hex.rgb });
  };

onChange3(e){
  console.log(e.target.value)
 this.setState({[e.target.name]: e.target.value});
}

patchReq = async(e) => {
 e.preventDefault();
 const {title,titleColor,body,bodyColor,image } = this.state;
 let data = new FormData();
 data.append('file', document);
 data.append('title', title);
 data.append('titleColor', titleColor);
 data.append('body', body);
 data.append('bodyColor', bodyColor);
 data.append('image', image);
 const response = await axios.post("/api/product", data)
}
onFileDrop = (file) => {
  this.setState({image: file[0]});
  console.log(this.state.image);
}
  render() {
    
    return (
    <Container className="cmsContainer" fluid>
      <Form type="multipart/form-data" onSubmit={this.patchReq} className="container">
          <h4 className="h1-cms">Website Content Managment system</h4>
        <Row>
          <Col xs="auto">
            <Media>
              <FormGroup>
                <Label for="title">Media Title</Label>
                <Input
                 className="textArea"  
                 type="textarea" 
                 name="text" 
                 id="title" 
                 value={this.state.title}
                 onChange={this.onChange3}
                 />
              </FormGroup>
            </Media>
          </Col>
          <Col xs="auto">
            <Media>
              <FormGroup>
                <Label for="titleColor">Font Color</Label>
                <SliderPicker
                color={ this.state.titleColor }
                onChangeComplete={ this.handleChangeComplete }
                />
              </FormGroup>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col xs="auto">
            <Media>
              <FormGroup>
                <Label  for="body">Media Body</Label>
                <Input 
                className="textArea" 
                type="textarea" 
                name="body" 
                id="body"
                value={this.state.body}
                onChange={this.onChange3} 
                />
              </FormGroup>
            </Media>
          </Col>
          <Col xs="auto">
            <Media>
              <FormGroup>
                <Label for="Color-2">Font Color</Label>
                <SliderPicker
                color={ this.state.bodyColor }
                onChangeComplete={ this.handleChangeComplete }
                />
              </FormGroup >
            </Media>
          </Col>
        </Row>
        <FormGroup>
          <Label for="fileUpLoad">Main Website Image</Label>
            <Dropzone id="fileUpLoad" onDrop={this.onFileDrop} />
          <FormText color="muted">
            Picture and Description fields are optional, however every item must have a name, price and Category.
          </FormText>
        </FormGroup>
        < Button onClick = {this.patchReq} type="submit">Submit</Button>
      </Form>
      </Container>
                
    );
  }
}
export default  EditWebsite;
