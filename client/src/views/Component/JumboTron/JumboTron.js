import React, {Component} from 'react';
import bbq from './bbq.mp4';
import './JumboTron.css'

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
            </header>
        </div>
    )
}
}

export default JumboTron;
