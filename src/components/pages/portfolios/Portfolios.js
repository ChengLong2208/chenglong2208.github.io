import React, { Component } from 'react';
import EventWebsite from '../../../images/eventWebsite.png';
import onlineShoppingWebsite from '../../../images/onlineShoppingWebsite.jpg';
import lifeStyleWebsite from '../../../images/lifeStyleWebsite.png';
import highQualityDesign from '../../../images/highQualityDesign.jpg';
import jewelry from '../../../images/jewelry.jpg';
import jewelry2 from '../../../images/jewelry2.jpeg';
import foodDelivery from '../../../images/foodDelivery.png';
import foodDelivery2 from '../../../images/foodDelivery2.jpg';
import whyChooseUs from '../../../images/whyChooseUs.png';
import watchWebsite from '../../../images/watchWebsite.jpg';
import mobile1 from '../../../images/mobile1.jpg';
import mobile2 from '../../../images/mobile2.png';
import mobile3 from '../../../images/mobile3.jpg';
import mobile4 from '../../../images/m1.png';
import mobile5 from '../../../images/m2.png';
import mobile6 from '../../../images/m3.jpg';

class Portfolios extends Component {
  render() {
    return (
      <div className="section" id="portfolios" style={{'background-color':'#f3efe0'}}>
            <div className="container" >
        <div className="row">
				<div className="col offset-m2 s12 m10">
					<h3 className="flow-text cyan-text accent-2">Portfolio</h3>
				</div>
			</div>
      <div className="row">
      <div className="col s12 offset-m2 m3">
      <div className="card">
        <div className="card-image">
          <img src={EventWebsite} className="materialboxed"></img>
          <span className="card-title">Card Title</span>
        </div>
      </div>
    </div>
      <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={onlineShoppingWebsite}  className="materialboxed"></img>
          <span className="card-title">Card Title</span>
        </div>
      </div>
    </div>
     <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={watchWebsite}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    </div>
   
    <div className="row">
    <div className="col offset-m2 s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={jewelry}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={jewelry2}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={whyChooseUs}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    </div>

    <div className="row">
    <div className="col offset-m2 s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={foodDelivery}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={foodDelivery2}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={highQualityDesign}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    </div>
    
    <div className="row">
    <div className="col offset-m2 s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={mobile1}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={mobile2}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={mobile3}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    </div>

    <div className="row">
    <div className="col offset-m2 s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={mobile4}  className="materialboxed" style={{height:"200px"}}></img>
         </div>
      </div>
    </div>
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={mobile5}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={mobile6}  className="materialboxed"></img>
         </div>
      </div>
    </div>
    </div>

    </div>
      </div>
      

    );
  }
}

export default Portfolios;