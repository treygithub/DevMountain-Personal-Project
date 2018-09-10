import React, {Component} from 'react';
import { Media, Row, Container, Col} from 'reactstrap';
import floor from './floor.jpg';
import pic3 from './pic3.jpg';
import music from './music.jpg';
import './features.css';
import WOW from 'wowjs';


class Features extends Component {

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
     }

render(){
return(
<div>
   <Container fluid>

                <Row>
                    <Col >
                        <Media className="content wow fadeInUp " data-wow-duration="2s" data-wow-offset="200" body align="middle">
                            <h4 heading className="pretty">Live Music Tuesday Nights</h4>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                          
                            <br/>
                            
                        </Media>
                    </Col>
                     <Col >   
                        <Media>
                            <img className=" img-fluid" style={{ width:'100%',height:'100vh '}} src={music} alt="Food" />
                        </Media>
                     </Col> 
                </Row>
            </Container> 

            <Container fluid>
                <Row>
                        <Col  >
                        
                            <Media >
                                <img style={{ width:'100%',height:'100vh'}} src={floor} alt="Food" />
                            </Media>
                        </Col>
                        <Col  >   
                        <Media className="content wow fadeInRight " data-wow-duration="2s" data-wow-offset="300"  body align="middle">
                            <Media heading className="pretty">Plenty of room for big a Party</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                                                      
                            <br/>
                        </Media>
                     </Col>   
                </Row>
            </Container>

             <Container fluid>
                <Row>
                    <Col >
                        <Media className="content wow fadeInLeft " data-wow-duration="2s" data-wow-offset="300" body align="middle">
                            <Media heading className="pretty">Out Side Dinning Available</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                          
                            <br/>
                        </Media>
                    </Col>
                     <Col >   
                        <Media  >
                            <img style={{ width:'100%',height:'100vh '}} src={pic3} alt="Food" />
                        </Media>
                     </Col> 
                </Row>
            </Container>
</div>
)
}
}
export default Features;