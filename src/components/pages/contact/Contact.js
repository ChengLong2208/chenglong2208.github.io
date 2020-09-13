import React, { Component } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';

import { FaPhone } from 'react-icons/fa';
import { IconContext } from 'react-icons';
class Contact extends Component {
    render() {
        return (
            <div className="section" id="contactDiv" style={{'background-color':'#434242'}}>
                 <div className="container">
                <div className="row">
                    <div className="col s12 offset-m2 m10">
                        <h3 className="flow-text cyan-text accent-2">Contact</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col offset-m2 m2 s2">
                        <IconContext.Provider value={{ style: { fontSize: '30px' } }}>
                            <div>
                                <FaLinkedin />
                            </div>
                        </IconContext.Provider>

                    </div>
                    <div className="col m8 s10">
                        <a href="https://www.linkedin.com/in/jane-kruger-6168b91b3/">https://www.linkedin.com/in/jane-kruger-6168b91b3/</a>
                    </div>

                </div>
                <div className="row">
                    <div className="col offset-m2 m2 s2">
                        <IconContext.Provider value={{ style: { fontSize: '30px' } }}>
                            <div>
                                <FaSkype />
                            </div>
                        </IconContext.Provider>

                    </div>
                    <div className="col m8 s10">
                        <a href="https://join.skype.com/invite/X9pwmT5xUViR">https://join.skype.com/invite/X9pwmT5xUViR</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col offset-m2 m2 s2">
                        <IconContext.Provider value={{ style: { fontSize: '30px' } }}>
                            <div>
                                <FaEnvelopeSquare />
                            </div>
                        </IconContext.Provider>

                    </div>
                    <div className="col m8 s10">
                        <a href="">janekruger132@gmail.com</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col offset-m2 m2 s2">
                        <IconContext.Provider value={{ style: { fontSize: '30px' } }}>
                            <div>
                                <FaPhone />
                            </div>
                        </IconContext.Provider>

                    </div>
                    <div className="col m8 s10">
                        <a href=""> +18168665931 </a> 
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Contact;