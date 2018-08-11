import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col,Row, Container, Media } from 'reactstrap';
import './Editwebsite.css';
import moment from 'moment';
import Dropzone from 'react-dropzone';
import { SliderPicker } from 'react-color';
import FontPicker from 'font-picker-react';
import WOW from 'wowjs';

import {connect} from "react-redux"
import {addSection, editSection} from "../../../../ducks/reducers/websiteReducer";

 class EditWebsite extends Component {
   constructor(){
     super();
     this.state={
       website:[],
       title:'',
       titleColor:'#face',
       body:'',
       bodyColor:'#face',
       currentId: 0,
       currentSide: "right",
       image : [],
       activeFont: 'Open Sans'
     }
     this.onChange3=this.onChange3.bind(this);
     this.patchReq=this.patchReq.bind(this);
   }
   componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
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
//  console.log(this.state)
 const {title,titleColor,body,bodyColor,image,currentSide } = this.state;

 await this.props.addSection(title,titleColor,body,bodyColor,image,currentSide)
}

editSection = () => {
  // console.log(this.state)
  const {title,titleColor,body,bodyColor,image, currentId,currentSide } = this.state;
  // console.log(title,titleColor,body,bodyColor,image, currentId,currentSide)
  this.props.editSection(currentId, title,titleColor,body,bodyColor,image,currentSide)
}

updateCurrentId(val){
  // console.log(val)
  this.setState({
    currentId: val
  })
}

updateSide(val){
  this.setState({
    currentSide: val
  })
}

onFileDrop = (file) => {
  // console.log(file)
  this.setState({image: file[0]});
  
}

  render() {
    // console.log(this.props)
    // console.log(this.state)
    // console.log(this.state.bodyColor)
    // his.state.image.preview;
    let { sections } = this.props.website
    
    return (
    <Container className="cmsContainer" fluid>
      <Form type="multipart/form-data" onSubmit={this.editSection} className="container">
          <h4 data-wow-duration="2s" className="content wow fadeInDown h1-cms">Website Content Managment system</h4>
        <Row>
          <Col xs="auto">
            <Media>
              <FormGroup className="content wow fadeInLeft text-box">
                <Label for="title">Media Title</Label>
                <Input
                style={{color:this.state.titleColor}}
                 className="textArea apply-font"
                 type="textarea"
                 name="title"
                //  id="title"
                 value={this.state.title}
                 onChange={this.onChange3}
                 />
              </FormGroup>
            </Media>
          </Col>
          <Col xs="auto">
            <Media>
              <FormGroup className="colorBox">
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
        <FormGroup>
            <Label for="font-picker">Font Style</Label>
            <FontPicker
              name="main"
              id="main"
              apiKey="AIzaSyDduSTYqkuEnzTlov7DNzmM0G2SNwk34hs"
              activeFont={this.state.activeFont}
              onChange={nextFont => this.setState({ activeFont: nextFont.family })}
            />
        </FormGroup >
        <Row>
          <Col xs="auto">
            <Media>
              <FormGroup  className="content wow fadeInLeft text-box">
                <Label  for="body">Media Body</Label>
                <Input 
                style={{color:this.state.bodyColor}}
                className="textArea apply-font" 
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
              <FormGroup className="colorBox">
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
            <Label for="font-picker">Font Style</Label>
            <FontPicker
              apiKey="AIzaSyAXquiSVreKI4iL_bdzKaELjGOzurrkKJE"
              activeFont={this.state.activeFont}
              onChange={nextFont => this.setState({ activeFont: nextFont.family })}
            />
        </FormGroup>
        <FormGroup>
          <Label for="fileUpLoad">Main Image</Label>
            <Dropzone id="fileUpLoad" onDrop={this.onFileDrop}>
              <img style={{width: '199px', height: '198px'}} src={this.state.image.preview && this.state.image.preview} />
            </Dropzone>
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
        <select onChange={(e) => this.updateSide(e.target.value)}>
          <option value="right">Right</option>
          <option value="left">Left</option>
        </select>
        < Button onClick = {this.editSection} type="submit">Submit</Button>
      </Form>
      </Container>
                
    );
  }
}

 let mapStateToProps = state => state;

export default  connect(mapStateToProps, {addSection, editSection})(EditWebsite);