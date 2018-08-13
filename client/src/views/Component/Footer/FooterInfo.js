import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './footerInfo.css'



class FooterInfo extends Component {
  render(){  
  return (
    
                <div className="container" style={{marginTop:40}}>
                   
                    <p>
                        <Link to="#" >NewJack Web Dev</Link> is a website development company from USA, Florida. I build interactive, astonishing, responsive, and feature rich website solutions.
                    </p>
                    <p itemProp="address"><i className="fa fa-map-pin"></i>
                        <span itemProp="addressLocality">Orlando</span>
                        <span itemProp="addressRegion">, Florida</span>
                        <span itemProp="addressCountry">USA</span>
                        
                        <br/>
                    </p>
                    <p><i className="fa fa-phone"></i> Phone (USA) :
                        <span itemProp="telephone">
                        <Link to="#" className="fields"                                          title="Contact Trey"> 305-999-9999</Link>
                        </span>
                    </p>
                    <p><i className="fa fa-envelope"></i> E-mail :
                        <span itemProp="email">
                        <Link to="" className="fields"
                            title="Trey office">Trey@hunecut.com</Link>
                        </span>
                    </p>

                        <span itemProp="openingHoursSpecification">
                            <p>
                                <i className="fa fa-calendar"></i> Work Days:
                        <span itemProp="dayOfWeek">
                             <span itemProp="name">MON, TUE, WED, THUR, FRI</span>
                        </span>
                            </p>
                        </span>
                    <p>
                        <i className="far fa-clock"></i> Opening time:
                        <span itemProp="opens">10:00 AM</span> 
                        <i className="far fa-clock"></i> Closing time:
                        <span itemProp="closes" >07:00 PM</span>
                    </p>
                </div>
                   
  )
}
}
export default FooterInfo;
