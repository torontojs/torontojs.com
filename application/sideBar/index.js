import React from "react";

import {Link} from "react-router";

import TorontoJSLogo from "../logo";

import BottomNav from "./bottomNav";

export default class SideBarComponent extends React.Component {
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
      <div className="sidebar">
        <Link to="/">
          <TorontoJSLogo />
        </Link>

        <ul className="nav nav-pills nav-stacked">
          <li className={this.classNameForPath("/upcoming_events")}>
            <Link to="/upcoming_events">
              Upcoming Events
            </Link>
          </li>

          <li className={this.classNameForPath("/videos")}>
            <Link to="/videos">
              Videos
            </Link>
          </li>

          <li className={this.classNameForPath("/sponsors")}>
            <Link to="/sponsors">
              Sponsors
            </Link>
          </li>
        </ul>

        <BottomNav />
      </div>
    );
  }
}
