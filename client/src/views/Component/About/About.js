import React, {Component} from 'react';

class About extends Component  {
    constructor (){
        super();
        this.state={
            hello:''
        }
    }

render(){
    return(
        <div>
            <section id="showcase">
                <div>
                    About
                </div>
            </section>
        </div>
    )
}
}

export default About;