import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col,Row, Container, Media } from 'reactstrap';
import './Editwebsite.css'
import axios from 'axios'
import moment from 'moment';
import Dropzone from 'react-dropzone'
import { SliderPicker } from 'react-color'

import {connect} from "react-redux"
import {addSection, editSection} from "../../../../ducks/reducers/websiteReducer"

 class EditWebsite extends Component {
   constructor(){
     super();
     this.state={
       website:[],
       title:'',
       titleColor:'#face',
       body:'',
       bodyColor:'#face',
       currentId: 0
     }
     this.onChange3=this.onChange3.bind(this);
     this.patchReq=this.patchReq.bind(this);
   }
   onChangeComplete = (color, e) => {
    e.preventDefault();
    this.setState({ titleColor: color.hex });
  };
  onChangeComplete2 = (color, e) => {
    e.preventDefault();
    this.setState({ bodyColor: color.hex });
  };

onChange3(e){
  // console.log(e.target.value)
 this.setState({[e.target.name]: e.target.value});
}

patchReq = async(e) => {
 e.preventDefault();
 console.log(this.state)
 const {title,titleColor,body,bodyColor,image } = this.state;

//  const data

//  let data = new FormData();
//  data.append('file', document);
//  data.append('title', title);
//  data.append('titleColor', titleColor);
//  data.append('body', body);
//  data.append('bodyColor', bodyColor);
//  data.append('image', image);

//  const data
// console.log(data)
 await this.props.addSection(title,titleColor,body,bodyColor,image)
}

editSection = () => {
  console.log(this.state)
  const {title,titleColor,body,bodyColor,image, currentId } = this.state;
  console.log(title,titleColor,body,bodyColor,image, currentId)
  this.props.editSection(currentId, title,titleColor,body,bodyColor,image)
}

updateCurrentId(val){
  console.log(val)
  this.setState({
    currentId: val
  })
}


// patchReq(id){
//   console.log(id)
//   const {title,titleColor,body,bodyColor} = this.state;
//   axios.put(`/api/website/${id}`,{title,titleColor,body,bodyColor}).then(results => {
//     console.log(results)
//   })
// }


onFileDrop = (file) => {
  this.setState({image: file[0]});
  // console.log(this.state.image);
}

  render() {
    console.log(this.props)
    console.log(this.state)
    // console.log(this.state.bodyColor)
    let { sections } = this.props.website
    
    return (
    <Container className="cmsContainer" fluid>
      <Form type="multipart/form-data" onSubmit={this.editSection} className="container">
          <h4 className="h1-cms">Website Content Managment system</h4>
        <Row>
          <Col xs="auto">
            <Media>
              <FormGroup>
                <Label for="title">Media Title</Label>
                <Input
                 className="textArea"  
                 type="textarea" 
                 name="title" 
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
                name="titleColor"
                color={ this.state.titleColor }
                onChangeComplete={ this.onChangeComplete }
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
                name="bodyColor"
                color={ this.state.bodyColor }
                onChange={ this.onChangeComplete2 }
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
        <select onChange={(e) => this.updateCurrentId(e.target.value)}>
        {sections.map((e, i) => {
          return (
              <option value={e._id}>{`Section ${i + 1}`}</option>
            )
          })}
        </select>
        < Button onClick = {this.editSection} type="submit">Submit</Button>
      </Form>
      </Container>
                
    );
  }
}

 let mapStateToProps = state => state;

export default  connect(mapStateToProps, {addSection, editSection})(EditWebsite);
