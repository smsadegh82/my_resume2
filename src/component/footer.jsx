import React from "react";

import codepen from "../img/codepen.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import { SocialIcon } from 'react-social-icons';
import socialIcon from "react-social-icons/dist/social-icon";


class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<SocialIcon url='https://github.com/smsadegh82' network="instagram" bgColor="#ffffff" target="_blank" style={{marginRight:'20px'}}/>
							<SocialIcon url='https://github.com/smsadegh82' network="linkedin" bgColor="#ffffff" target="_blank" style={{marginRight:'20px'}}/>
							<SocialIcon url='https://github.com/smsadegh82' network="github" bgColor="#ffffff" target="_blank"/>
							
						</div>
					</div>
					<h5 className="pt-4">Seyed Mahdi Sadeghzadeh&copy; 2019</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
