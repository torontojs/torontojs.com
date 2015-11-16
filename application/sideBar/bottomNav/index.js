import React from "react";

import {Link} from "react-router";

export default class BottomNavComponent extends React.Component {
  static contextTypes = {
    location: React.PropTypes.object
  }

  componentDidMount() {
    require("./style.less");
  }

  classNameForPath(path) {
    if(this.context.location.pathname === path) {
      return "active"
    }
    else return null;
  }

  render() {
    return (
      <ul className="nav nav-pills nav-stacked bottom-nav">
        <li className={this.classNameForPath("/about")}>
          <Link to="/about">
            About Us
          </Link>
        </li>

        <li className={this.classNameForPath("/contact")}>
          <Link to="/contact">
            Contact Us
          </Link>
        </li>

        <li>
          <a href="http://slack.torontojs.com" target="_blank">
            Join us on Slack
          </a>
        </li>
      </ul>
    );
  }
}
