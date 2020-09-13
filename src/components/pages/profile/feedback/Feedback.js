import React, { Component } from 'react';
import feedback1 from '../../../../images/feedback1.png';
import feedback2 from '../../../../images/feedback2.jpg';
import feedback3 from '../../../../images/feedback3.jpg';
import feedback4 from '../../../../images/feedback4.jpg';

class Feedback extends Component {
    render() {
        return (
            <div className="section"   style={{'background-color':'#f3efe0'}}>
                     <div className="container"  >
                <div className="row">
                    <div className="col offset-m2 s12 m10">
                        <h3 className="flow-text cyan-text accent-2">Feedback</h3>
                    </div>
                </div>
                <div className="row" >
                    <div className="col offset-m2" style={{padding:"0px"}}  ></div>
                <ul className="collection">
                    <li class="collection-item avatar">
                    <img src={feedback1} alt="" class="circle responsive-img"></img>
                        <span class="title"><b>Jonh Doe </b></span>
                        <p>
                        Excellent, work by him.  Thanks to his knowledge and determination our website looks great and functions really good.  I am recommend anyone that is looking for a custom website.
                        </p>
                      
                    </li>
                    <li class="collection-item avatar">
                    <img src={feedback2} alt="" class="circle responsive-img"></img>
                        <span class="title"><b>Harry Bosch</b></span>
                        <p>He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work.
                        </p>
                       
                    </li>
                    <li class="collection-item avatar">
                    <img src={feedback3} alt="" class="circle responsive-img"></img>
                        <span class="title"><b>Matthew Lillard</b></span>
                        <p>He had worked as per the requirement of website.
                        </p>
                      
                    </li>
                    <li class="collection-item avatar">
                    <img src={feedback4} alt="" class="circle responsive-img"></img>
                        <span class="title"><b>Bob Pierce</b></span>
                        <p>He created my small business website that really helps current and potential customers get a good feel for my company.
                        </p>
                      
                    </li>
                </ul>
           </div>
            </div>
            </div>
        );
    }
}

export default Feedback;