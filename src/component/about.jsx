import React from "react";
import layers from "../img/layers.png";
import cogwheel from "../img/cogwheel.png";
import pen from "../img/pen.png";
import browser from "../img/browser.png";

import PropTypes from "prop-types";
import WOW from "wowjs";
import Footer from './footer'
import ThemeSwitcher from "react-theme-switcher";

export default class About extends React.Component {
  render() {
    return (
      <div
        id="about-container"
        className="content-containers container text-center mt-5"
      >
        <h1 id="about" className={this.props.bounceLeft}>
          SKILLS
        </h1>
        <div className="row mt-5">
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
            <img src={layers} alt="" />
            <h4>Responsive</h4>
          </div>
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
            <img src={pen} alt="" />
            <h4>Design</h4>
          </div>
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight}>
            <img src={cogwheel} alt="" />
            <h4>Performance</h4>
          </div>
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight}>
            <img src={browser} alt="" />
            <h4>Agile</h4>
          </div>
        </div>

        <div className="row" style={{ marginTop: 7 + "rem" }}>
          <div className="col-12 col-lg-6 hidden">
            <p className={"mytext pt-3 " + this.props.fadeIn}>
              I am started the FRONT-END with
              <br />
              HTML , CSS , Javascript
              <br /> after that I started the reactjs and this is my first
              reactjs project.
            </p>
          </div>
          <div
            className={"col-12 col-sm-12 col-md-12 col-lg-6 " + this.props.tada}
          >
            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 80 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                HTML
              </div>
            </div>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 80 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                CSS
              </div>
            </div>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-90-bar"
                role="progressbar"
                style={{ width: 70 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Javascript
              </div>
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                ReactJS
              </div>
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-60-bar"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                JQuery
              </div>
            </div>
          </div>
        </div>
        <button id='project'
          className={"work-button " + this.props.bounceIn}
          data-wow-offset="0"
          onClick={() => {
            let node = document.getElementById(
              "#footer"
            );
            window.scrollTo({
              top: 10000,
              behavior: "smooth"
            });
          }}
        >
          Click to View About Me
		  
        </button>
		
      </div>
	  
    );
  }
}

About.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string
};
