import React from "react";

import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight }>
							About Me
						</h1>
						<div className="row my-5 twitter">
							
							I am student in <b>Rouzbeh high school</b> I have 16 years old . I like to uderstand anything about FRONT-END !<br/> but I can't , because I have a lot of works for school.
							
						</div>
					</div>
				</div>

				
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
