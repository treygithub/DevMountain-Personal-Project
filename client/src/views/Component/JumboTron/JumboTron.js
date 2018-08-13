import React, {Component} from 'react';
import bbq from './bbq.mp4';
import './JumboTron.css'
import Svg from '../Svg/Svg'

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
                <div className="svg-wrapper">
                    <Svg/>
                 </div>
            </header>
        </div>
    )
}
}

export default JumboTron;
