import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div class='section' id="educationDiv" style={{ 'background-color': '#f3efe0' }}>
			<div className="container">
				<div className="row">
					<div className="col s12 offset-m2 m10">
						<h3 className="flow-text cyan-text accent-2">Education</h3>
					</div>
				</div>
				<div className="row">
					<div className="col offset-m2 m4">
						<p><b> Northwest University</b></p>
						<p>Feb 2007 - Jun 2010</p>
					</div>
					<div className="col m6">
						<p><b>Master's</b></p>
						<p>Master of Technology - MTech, Northwest University, United States</p>

					</div>
				</div>
				<div className="row">
					
					<div className="col offset-m2 m4">
						<p><b>General Assembly</b></p>
						<p>July 2011 - Dec 2011</p>
					</div>
					<div className="col m6">
						<p><b>MCA</b></p>
						<p>Master of Computer Applications - MCA, General Assembly, United States</p>

					</div>
				</div>
			</div>
		</div>

	);
}
