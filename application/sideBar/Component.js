import React from "react";

import {Link} from "react-router";

import TorontoJSLogo from "../logo";
import MoveGhost from "../ghost/Move";

export default class SideBarComponent extends React.Component {
  static contextTypes = {
    location: React.PropTypes.object
  }

  componentDidMount() {
    require("./style.less");

    // give it a second to set the styles
    setTimeout(this.resetGhostPosition, 0);
  }

  resetGhostPosition = () => {
    let dimensions;

    switch(this.context.location.pathname) {
      case "/upcoming_events":
        dimensions = this.refs.upcoming_events;
        break;
      case "/videos":
        dimensions = this.refs.videos;
        break;
      case "/sponsors":
        dimensions = this.refs.sponsors;
        break;
      case "/about":
        dimensions = this.refs.about;
        break;
      case "/contact":
        dimensions = this.refs.contact;
        break;
      default:
        return new MoveGhost(0);
    }

    if(dimensions) {
      dimensions = dimensions.getBoundingClientRect();

      new MoveGhost(dimensions.top);
    }
  }

  handleMouseOver(event) {
    let dimensions = event.target.getBoundingClientRect();

    new MoveGhost(dimensions.top);
  }

  render() {
    return (
      <div className="sidebar" onMouseLeave={this.resetGhostPosition}>
        <Link to="/">
          <TorontoJSLogo />
        </Link>

        <ul className="nav nav-pills nav-stacked">
          <li ref="upcoming_events" onMouseOver={this.handleMouseOver}>
            <Link to="/upcoming_events">
              Upcoming Events
            </Link>
          </li>

          <li ref="videos" onMouseOver={this.handleMouseOver}>
            <Link to="/videos">
              Videos
            </Link>
          </li>

          <li ref="sponsors" onMouseOver={this.handleMouseOver}>
            <Link to="/sponsors">
              Sponsors
            </Link>
          </li>
        </ul>

        <ul className="nav nav-pills nav-stacked bottom-nav">
          <li ref="about" onMouseOver={this.handleMouseOver}>
            <Link to="/about">
              About Us
            </Link>
          </li>

          <li ref="contact" onMouseOver={this.handleMouseOver}>
            <Link to="/contact">
              Contact Us
            </Link>
          </li>

          <li onMouseOver={this.handleMouseOver}>
            <a href="http://slack.torontojs.com" target="_blank">
              Join us on Slack
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
