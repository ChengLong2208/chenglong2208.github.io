import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/pages/profile/Profile';
import About from '../../components/pages/about/About';
import Skills from '../../components/pages/skills/Skills';
import Experiences from '../../components/pages/experiences/Experiences';
import Educations from '../../components/pages/educations/Educations';
import Portfolios from '../../components/pages/portfolios/Portfolios';
import Languages from './languages/Languages';
import Contact from './contact/Contact';
import SideNavbar from '../navbar/SideNavbar';
import Feedback from './profile/feedback/Feedback';
import backgroundImage1 from '../../images/bg7.jpeg'
export default class Home extends Component {

	render() {
		return (
			<section>
				<div>
				  <div  className='row hide-on-small-only'  style={{ backgroundImage:`url(${backgroundImage1})`, 'background-size':'1800px 600px','background-repeat':'no-repeat',height:'370px'}}>
				 </div>
				 <div  className='row show-on-small hide-on-med-and-up'  style={{ backgroundImage:`url(${backgroundImage1})`, 'background-size':'400px 500px','background-repeat':'no-repeat',height:'370px'}}>
				 </div>
					<div className='row'>
						<div className="col m3">
							<SideNavbar />
						</div>
						<div className='col s12 m6'>
							<div className="section" >
								<div className="row center-align">
									<h2 className="cyan-text accent-2">Profile</h2>
									<p>SOFTWARE ENGINEER</p>
								</div>
								<div class="divider"></div>
							</div>
							<Profile/>
							<div class="divider"></div>
							<Educations />
							<div class="divider"></div>
							<Experiences />
							<div class="divider"></div>
							<Skills />
							<div class="divider"></div>
							<Languages />
							<div class="divider"></div>
							<Portfolios />
							<div class="divider"></div>
							<Feedback />
							<div class="divider"></div>

							<Contact />
						</div>
						<div className="col m3"></div>
					</div>
				</div>
			</section>
		);
	}
}
