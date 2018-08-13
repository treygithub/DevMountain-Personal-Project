import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './footerInfo.css'



class FooterInfo extends Component {
  render(){  
  return (
    
                <div style={{marginTop:40}}>
                   
                    <p>
                        <Link to="#" >NewJack Web Dev</Link> is a website development company from USA, Florida. I builds interactive, astonishing, responsive, and feature rich responsive website solutions.
                    </p>
                    <p itemprop="address"><i className="fa fa-map-pin"></i>
                        <span itemprop="addressLocality">Orlando</span>
                        <span itemprop="addressRegion">, Florida</span>
                        <span itemprop="addressCountry">USA</span>
                        
                        <br/>
                    </p>
                    <p><i className="fa fa-phone"></i> Phone (USA) :
                        <span itemprop="telephone">
                        <Link to="#" className="fields"                                          title="Contact Trey"> 352-409-4699</Link>
                        </span>
                    </p>
                    <p><i className="fa fa-envelope"></i> E-mail :
                        <span itemprop="email">
                        <Link to="" className="fields"
                            title="Trey office">Trey@hunecut.com</Link>
                        </span>
                    </p>

                        <span itemprop="openingHoursSpecification">
                            <p>
                                <i className="fa fa-calendar"></i> Work Days:
                        <span itemprop="dayOfWeek">
                             <span itemprop="name">MON, TUE, WED, THUR, FRI</span>
                        </span>
                            </p>
                        </span>
                    <p>
                        <i className="far fa-clock"></i> Opening time:
                        <span itemprop="opens">10:00 AM</span> 
                        <i className="far fa-clock"></i> Closing time:
                        <span itemprop="closes" >07:00 PM</span>
                    </p>
                </div>
                   
  )
}
}
export default FooterInfo;
