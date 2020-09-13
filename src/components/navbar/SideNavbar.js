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
               document.getElementById('profileLink').className = "collection-item btn black white-text";
               document.getElementById('educationLink').className = "collection-item btn black white-text";
               document.getElementById('experienceLink').className = "collection-item btn black white-text";
               document.getElementById('skillsLink').className = "collection-item btn black white-text";
               document.getElementById('portfolioLink').className = "collection-item btn black white-text";
               document.getElementById('contactLink').className = "collection-item btn black white-text";
           
        document.getElementById(id).className = "collection-item btn active";
  }



    render() {
        return (
            <div id = "navbar" className="section hide-on-small-only" style={{ 'position': 'fixed' ,overflow:'hidden' ,opacity:'1',zIndex:'10',marginTop:'250px'}} >
                <div className="col m2 s2 l1"></div>
                <div className="col m8 s8 l10">
                    <ul class="collection">
                        <a class="collection-item btn black white-text" id="profileLink" style={{ 'height': '60px' }} onClick={e => this.moveToDiv('profileDiv', 'profileLink')}>Profile</a>
                        <a class="collection-item btn black white-text" id="educationLink" style={{ 'height': '60px' }} onClick={e => this.moveToDiv('educationDiv', 'educationLink')}>Education</a>
                        <a class="collection-item btn black white-text" id="experienceLink" style={{ 'height': '60px' }} onClick={e => this.moveToDiv('experiencesDiv', 'experienceLink')}>Experience</a>
                        <a class="collection-item btn black white-text" id="skillsLink" style={{ 'height': '60px' }} onClick={e => this.moveToDiv('skillsDiv', 'skillsLink')}>Skills</a>
                        <a class="collection-item btn black white-text" id="portfolioLink" style={{ 'height': '60px' }} onClick={e => this.moveToDiv('portfolios', 'portfolioLink')}>Portfolio</a>
                        <a class="collection-item btn black white-text" id="contactLink" style={{ 'height': '60px' }} onClick={e => this.moveToDiv('contactDiv', 'contactLink')}>Contact</a>
                    </ul>
                </div>
                <div className="col m2 s2 l1"></div>
            </div>
        );
    }
}

export default SideNavbar;