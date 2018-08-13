import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col,Row, Container, Media } from 'reactstrap';
import './Editwebsite.css';
import moment from 'moment';
import Dropzone from 'react-dropzone';
import { SliderPicker } from 'react-color';
import FontPicker from 'font-picker-react';

import {connect} from "react-redux"
import {addSection, editSection, getSections} from "../../../../ducks/reducers/websiteReducer";

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
       productImage : [],
       activeFont: 'Open Sans',
       sections:[]
     }
     this.onChange3=this.onChange3.bind(this);
     this.patchReq=this.patchReq.bind(this);
     this.updateCurrentId=this.updateCurrentId.bind(this);
     this.updateSide=this.updateSide.bind(this);
   }
   componentDidMount() {
    this.props.getSections();
    this.updateCurrentId();

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
 const {title,titleColor,body,bodyColor,productImage,currentSide,activeFont,data } = this.state;

 await this.props.addSection(title,titleColor,body,bodyColor,productImage,currentSide,activeFont,data)
}

editSection = () => {
  // console.log(this.state)
  const {title,titleColor,body,bodyColor,productImage, currentId,currentSide,activeFont,data } = this.state;
  // console.log(title,titleColor,body,bodyColor,image, currentId,currentSide)
  this.props.editSection(currentId, title,titleColor,body,bodyColor,productImage,currentSide,activeFont,data)
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
onFileDrop = async (file) => {
  this.setState({productImage: file[0]});
  console.log(this.state.productImage);
  await this.addProduct();
}

addProduct = (e) => {
 
  const { productImage} = this.state;
  let data = new FormData();
  data.append('file', document);
  data.append('productImage', productImage);
  
  // const response = await axios.post("/api/product", data)
}



  render() {
 console.log(this.state.activeFont)
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
                  id="title"
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
                className="textArea " 
                type="textarea" 
                name="body" 
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
        {/* <FormGroup>
            <Label for="font-picker-main">Font Style</Label>
            <FontPicker
              // id="font-picker-main"
              name='main'
              apiKey=""
              activeFont={this.state.activeFont}
              onChange={nextFont => this.setState({ activeFont: nextFont.family })}
            />
        </FormGroup> */}

        <FormGroup>
          <Label for="fileUpLoad">Main Image Preview</Label>
            <Dropzone id="fileUpLoad" onDrop={this.onFileDrop}>
              <img style={{width: '199px', height: '198px'}} src={this.state.productImage.preview && this.state.productImage.preview} />
            </Dropzone>
          <FormText color="muted">
            Picture and Description fields are optional, however every item must have a name, price and Category.
          </FormText>
        </FormGroup>
        
        <Label for="selectId">Select Section to Update</Label>
        <select id="selectId" onChange={(e) => this.updateCurrentId(e.target.value)}>
        {sections.map((e, i) => {
          return (
              <option value={e._id}>{`Section ${i + 1}`}</option>
            )
          })}
        </select>
        <br />

        <Label for="locationSelector">Select Location of Content</Label>
        <select id="locationSelector" onChange={(e) => this.updateSide(e.target.value)}>
          <option value="right">Right</option>
          <option value="left">Left</option>
        </select>
        <br/>
        < Button outline onClick = {this.editSection} type="submit">Submit</Button>
      </Form>
      </Container>
                
    );
  }
}

 let mapStateToProps = state => state;

export default  connect(mapStateToProps, {addSection, editSection, getSections})(EditWebsite);