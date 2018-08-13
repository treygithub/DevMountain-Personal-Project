import React, {Component} from 'react';
import {Button, Media, Row, Container, Col} from 'reactstrap';
import burger2 from './burger2.jpg';
import fyt from './fyt.jpg';
import drink from './drink.jpg';
import './about.css';

class About extends Component {

    componentDidMount() {
  
     }

render(){
return(
<div>
   <Container fluid>
                <Row>
                    <Col >
                        <Media className="content" body align="middle">
                            <h4 heading className="pretty">Chif Rob</h4>
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
                            <img className=" img-fluid" style={{ width:'100%',height:'100vh '}} src={drink} alt="Food" />
                        </Media>
                     </Col> 
                </Row>
            </Container> 

            <Container fluid>
                <Row>
                        <Col  >
                        
                            <Media >
                                <img style={{ width:'100%',height:'100vh'}} src={burger2} alt="Food" />
                            </Media>
                        </Col>
                        <Col  >   
                        <Media className="content"  body align="middle">
                            <Media heading className="pretty">Organic Gourmet ingredients</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                                                      
                            <br/>
                            <Button outline color="secondary">Want to know More?</Button>
                        </Media>
                     </Col>   
                </Row>
            </Container>

             <Container fluid>
                <Row>
                    <Col >
                        <Media className="content"  body align="middle">
                            <Media heading className="pretty">Media Heading</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                          
                            <br/>
                            <Button outline color="secondary">Find out More</Button>
                        </Media>
                    </Col>
                     <Col >   
                        <Media  >
                            <img style={{ width:'100%',height:'100vh '}} src={fyt} alt="Food" />
                        </Media>
                     </Col> 
                </Row>
            </Container>
</div>
)
}
}
export default About;