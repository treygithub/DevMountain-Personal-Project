import React, {Component} from 'react';
import FooterGoogleMap from './footerGoogleMap'
import FooterSubscribe from './FooterSubscribe'
import FooterInfo from './FooterInfo'
import { Media, Row, Container, Col} from 'reactstrap';


class Footer extends Component {
    render(){
        return(
            <div>
                
                <Container fluid>
                    <Row>
                        <Col style={{backgroundColor:'whitesmoke'}}>
                            <Media>
                            <FooterInfo/>
                            <FooterGoogleMap/>
                            <FooterSubscribe/>
                            </Media>  
                        </Col> 
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;