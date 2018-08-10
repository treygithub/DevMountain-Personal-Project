import React, {Component} from 'react'
import './Home.css'
import burger from './burger.jpg';
import {Button, Media, Row, Container, Col} from 'reactstrap';
import Mosaic from '../Mosaic/Mosaic';
import JumboTron from '../JumboTron/JumboTron';
import WOW from 'wowjs';
import axios from 'axios';

// import Admin from '../../admin/admin';
 
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            stuff:[],
            headingColor: 'red'
        }
    }
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
        // this.getColor()
      }

    //   getColor(id){
    //     axios.get(`/api/website/${id}`).then(payload => {
    //       console.log(payload)
    //       this.setState({
    //         stuff: payload.data
    //       });
    //     })
    //   }

      
    render(){

    return(
        <div>

            <JumboTron />

            <Container fluid>
                <Row>
                    <Col >
                        <Media className="content wow fadeInUp " data-wow-duration="2s" data-wow-offset="300"  body align="middle">
                            <h4 heading className="pretty">Media Heading</h4>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                          
                            <br/>
                            <Button outline color="secondary">View Menu</Button>
                        </Media>
                    </Col>
                     <Col >   
                        <Media>
                            <img className=" img-fluid" style={{ width:'100%',height:'100vh '}} src={burger} alt="Food" />
                        </Media>
                     </Col> 
                </Row>
            </Container>

            <Container fluid>
                <Row>
                        <Col  >
                        
                            <Media >
                                <img style={{ width:'100%',height:'100vh'}} src={burger} alt="Food" />
                            </Media>
                        </Col>
                        <Col  >   
                        <Media className="content wow fadeInRight content" data-wow-duration="2s" data-wow-offset="200"  body align="middle">
                            <Media style={{color: this.state.headingColor}} heading className="pretty">Media Heading</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                                                      
                            <br/>
                            <Button outline color="secondary">View Menu</Button>
                        </Media>
                     </Col>   
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col >
                        <Media className="content wow fadeInLeft" data-wow-offset="200" data-wow-duration="2s"  body align="middle">
                            <Media heading className="pretty">Media Heading</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                          
                            <br/>
                            <Button outline color="secondary">View Menu</Button>
                        </Media>
                    </Col>
                     <Col >   
                        <Media  >
                            <img style={{ width:'100%',height:'100vh '}} src={burger} alt="Food" />
                        </Media>
                     </Col> 
                </Row>
            </Container>

                       
        <Mosaic/>
            
        </div>
    )
}
}

export default Home;