import React, {Component} from 'react';
import './Home.css'
import {Button, Media, Row, Container, Col} from 'reactstrap';
import Mosaic from '../Mosaic/Mosaic';
import JumboTron from '../JumboTron/JumboTron';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

import {connect} from "react-redux";
import {getSections} from "../../../ducks/reducers/websiteReducer";
import { withRouter } from 'react-router';
 
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            stuff:[],
            headingColor: 'red'
        }
    }
    
      componentDidMount() {
         this.getSections();
       
      }

      async getSections(){
        await this.props.getSections()
        const wow = new WOW.WOW();
        wow.init();
      }
   
    render(){
        let {sections} = this.props.website
        console.log("CHECK TO SEE IF SECTION HAS SIDE PROPERTY", this.props)
        let allSections = sections.map(e => {
                 if(e.currentSide === "right"){
                      return (
                        <div>
                         <Container id="menu" fluid>
                         <SideNav/>
                                <Row>
                                    <Col >
                                        <Media className="content wow fadeInUp " data-wow-duration="2s" data-wow-offset="300"  body align="middle">
                                            <h4 style={{color: e.titleColor, fontFamily:e.activeFont}} heading className="pretty">{e.title}</h4>
                                            <p style={{color: e.bodyColor}}>
                                            {e.body}
                                            </p>
                                            <br/>
                                            <Link to="Menu">
                                            <Button outline color="secondary">Find Out More</Button>
                                            </Link>
                                        </Media>
                                    </Col>
                                    <Col >   
                                        <Media>
                                            <img className=" img-fluid" style={{ width:'100%',height:'100vh '}} src={e.image} alt="Food" />
                                        </Media>
                                    </Col> 
                                </Row>
                            </Container>
                        </div>
                      )
                    } else {
                      return (

                          <div key={e._id}>
                    <Container id="about" fluid>
                         <Row>
                             <Col  >
                                 <Media >
                                     <img style={{ width:'100%',height:'100vh'}} src={e.image} alt="Food" />
                                </Media>
                                </Col>
                                 <Col  >   
                                 <Media className="content wow fadeInRight content" data-wow-duration="2s" data-wow-offset="200"  body align="middle">
                                     <Media style={{color: e.titleColor}} heading className="pretty">{e.title}</Media>
                                     <p style={{color: e.bodyColor}}>
                                      {e.body}
                                     </p>                        
                                     <br/>
                                     <Link to="about">
                                     <Button outline color="secondary">Find Out More</Button>
                                     </Link>
                                </Media>
                            </Col>   
                        </Row>
                    </Container>
                 </div>
    )}
            
})
        
    return(
        <div>
            <JumboTron /> 
            {allSections}            
            <Mosaic id="info"/>   
        </div>
    )
}
}

let mapStateToProps = state => state

export default connect(mapStateToProps, {getSections})(withRouter(Home));