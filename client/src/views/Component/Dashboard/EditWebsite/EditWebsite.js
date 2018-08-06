import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col,Row, Container, Media } from 'reactstrap';
import './Editwebsite.css'

 class EditWebsite extends Component {
  render() {
    return (
    <Container className="cmsContainer" fluid>
      <Form>
          <h4 className="h1-cms">Website Content Managment system</h4>
        <Row>
          <Col xs="auto" >
            <Media>
              <FormGroup>
                <Label for="Text-h1">Media Title</Label>
                <Input className="textArea"  type="textarea" name="text" id="Text-h1" />
              </FormGroup>
            </Media>
          </Col>
          <Col xs="auto">
            <Media>
              <FormGroup>
                <Label for="Color-1">Font Color</Label>
                <Input className="color-Btn" type="color" name="color" id="Color-1" placeholder="color placeholder" />
              </FormGroup>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col xs="auto">
            <Media>
              <FormGroup>
                <Label  for="exampleText">Media Body</Label>
                <Input className="textArea" type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </Media>
          </Col>
          <Col xs="auto">
            <Media>
              <FormGroup>
                <Label for="Color-2">Font Color</Label>
                <Input className="color-Btn" type="color" name="color" id="Color-2" placeholder="color placeholder" />
              </FormGroup>
            </Media>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleFile">Imgage Upload</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            All input fields including image file are optional, you may updated one, all or none!
          </FormText>
        </FormGroup>
        < Button outline type='submit'>Submit</Button>
      </Form>
      </Container>
                
    );
  }
}
export default  EditWebsite;
