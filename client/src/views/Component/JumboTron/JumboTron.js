import React, {Component} from 'react';
import bbq from './bbq.mp4';
import './JumboTron.css'
// import Svg '../About/About'

class JumboTron extends Component  {
    constructor (){
        super();
        this.state={
            hello:''
        }
    }

render(){
    return(
        <div>
            <header className="wrapper">
                <video src={bbq} autoPlay='true' loop="true"></video>
                 {/* <Svg/> */}
            </header>
        </div>
    )
}
}

export default JumboTron;
