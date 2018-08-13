import React, {Component} from 'react';
import bbq from './bbq.mp4';
import './JumboTron.css'
// import Svg from '../Svg/Svg'
import BeerSvg from '../Svg/BeerSvg'

class JumboTron extends Component  {
    constructor (){
        super();
        this.state={
            hello:''
        }
    }

render(){
    return(
        <div id="Home">
            <header className="wrapper">
                <video src={bbq} autoPlay='true' loop="true"></video>
                <div className="svg-wrapper">
                    {/* <Svg/> */}
                    <BeerSvg/>
                 </div>
            </header>
        </div>
    )
}
}

export default JumboTron;
