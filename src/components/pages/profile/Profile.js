import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person3.jpg';
import bg1 from '../../../images/bg5.jpg';
import SideNavbar from '../../navbar/SideNavbar';
class Profile extends Component {



	render() {

		let { ref } = this.props;

		return (
			<div className="section white" ref={ref} id="profileDiv">
				
				<div className="container">
					<div>
						<div className="row center-align">
							<h2 className="cyan-text accent-2">Profile</h2>
							<p>SOFTWARE ENGINEER</p>
						</div>
						<div class="divider"></div>
					</div>
					<div className="row">
						<div className='col offset-m2 m3 s12'>
							<h3 className="flow-text cyan-text accent-2">About me</h3>
							<p>
								Experienced Member Of Technical Staff with a demonstrated history of working in the computer software industry Skilled in React-Native, iOS &Android Development, React.JS, PHP, Java, Kotlin, Node.JS, Laravel, Strong engineering professional with a Master of Science - MS focused on Computer Science from Northwest University.</p>
						</div>
						<div className='col m3 s12 center-align'>
							<img src={ImgProfile} alt='Jane Kruger' className="circle responsive-img" style={{ 'margin-top': '30px' }} />
						</div>

						<div className='col m3 s12'>
							<h3 className="flow-text cyan-text accent-2">Details</h3>
							<p>
								<b>Name:</b><br></br>
			                    Michael Cheng<br></br>
								<b>Age:</b><br></br>
		                    	30 years<br></br>
								<b>Location:</b><br></br>
							3821 SAN ESTEBAN AVE NORTH LAS VEGAS, LAS VEGAS, 89084, UNITED STATES			</p>

						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Profile;