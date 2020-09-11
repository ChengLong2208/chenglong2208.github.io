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
import backgroundImage1 from '../../images/background1.png'
export default class Home extends Component {

	render() {
		return (
			<section>
					<div className="row"  style={{ opacity: "1",zIndex:'10' }}>
								<div className="col m2" >
									<SideNavbar />
								</div>
							</div>
				<div style={{ height: "722px", opacity: "1" }}>
			
				</div>
			
				<div style={{ opacity: '1', zIndex: '9', position: 'relative' }}>
					<div className='row'>

						<div className='col s12' style={{padding:'0px'}}>
					
							<Profile />
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
