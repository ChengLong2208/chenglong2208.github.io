import React, { Component } from 'react';

class SideNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    moveToDiv(ref, id) {
        var elementpane = document.querySelector("#" + ref);
        elementpane.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        //document.getElementById(id).className = "collection-item waves-effect waves-light btn active";

        //  $(".collection-item").find(".active").removeClass("active");
               document.getElementById('profileLink').className = "collection-item btn";
               document.getElementById('educationLink').className = "collection-item btn";
               document.getElementById('experienceLink').className = "collection-item btn";
               document.getElementById('skillsLink').className = "collection-item btn";
               document.getElementById('portfolioLink').className = "collection-item btn";
               document.getElementById('contactLink').className = "collection-item btn";
           
        document.getElementById(id).className = "collection-item btn active";
  }



    render() {
        return (
            <div className="section hide-on-small-only" style={{ 'position': 'fixed', 'zIndex': '10', opacity: '1' }}>
                <div className="col m2 s2 l1"></div>
                <div className="col m8 s8 l10">
                    <ul class="collection">
                        <a class="collection-item btn" id="profileLink" style={{ 'height': '50px' }} onClick={e => this.moveToDiv('profileDiv', 'profileLink')}>Profile</a>
                        <a class="collection-item  btn" id="educationLink" style={{ 'height': '50px' }} onClick={e => this.moveToDiv('educationDiv', 'educationLink')}>Education</a>
                        <a class="collection-item btn" id="experienceLink" style={{ 'height': '50px' }} onClick={e => this.moveToDiv('experiencesDiv', 'experienceLink')}>Experience</a>
                        <a class="collection-item btn" id="skillsLink" style={{ 'height': '50px' }} onClick={e => this.moveToDiv('skillsDiv', 'skillsLink')}>Skills</a>
                        <a class="collection-item btn" id="portfolioLink" style={{ 'height': '50px' }} onClick={e => this.moveToDiv('portfolios', 'portfolioLink')}>Portfolio</a>
                        <a class="collection-item btn" id="contactLink" style={{ 'height': '50px' }} onClick={e => this.moveToDiv('contactDiv', 'contactLink')}>Contact</a>
                    </ul>
                </div>
                <div className="col m2 s2 l1"></div>
            </div>
        );
    }
}

export default SideNavbar;