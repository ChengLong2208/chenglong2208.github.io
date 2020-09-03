import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person3.jpg';
import bg1 from '../../../images/bg5.jpg';

class Profile extends Component {



render(){

	let { ref } = this.props;

 	return (
		<div className="section" ref={ref} id="profileDiv">
			<div >

				<div className="row">
					<div className='col m4 s12'>
						<h3 className="flow-text cyan-text accent-2">About me</h3>
						<p>
						Experienced Member Of Technical Staff with a demonstrated history of working in the computer software industry Skilled in React-Native, iOS &Android Development, React.JS, PHP, Java, Kotlin, Node.JS, Laravel, Strong engineering professional with a Master of Science - MS focused on Computer Science from Northwest University.</p>
					</div>
					<div className='col m4 s12 center-align'>
						<img src={ImgProfile} alt='Jane Kruger' className="circle responsive-img" style={{'margin-top':'30px'}}/>
					</div>

					<div className='col m4 s12'>
						<h3 className="flow-text cyan-text accent-2">Details</h3>
						<p>
							<b>Name:</b><br></br>
			                    Jane Kruger<br></br>
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