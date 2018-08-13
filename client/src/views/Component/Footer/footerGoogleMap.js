import React, {Component} from 'react';
import './FooterGoogleMap.css'


class FooterGoogleMap extends Component {
    render(){
    const url =`https://www.google.com/maps/embed/v1/place?key=AIzaSyCz1Vg-u4gpb6U5UBO8SCg4u3AO4WDxHXo
    &q=BUTTLER+brothers+bar,Dallas+TX`
        return(
            <div>
                
                <footer id="simpleKindOfMan" className=" footer mt-5 p-4 text-center">
                    Copyright &copy; {new Date().getFullYear()}

                    <iframe
                    width="350"
                    height="250"
                    frameborder="0" style={{border:0}}
                    src={url} allowfullscreen>
                    </iframe>

                </footer>
            </div>
        );
    }
}

export default FooterGoogleMap;