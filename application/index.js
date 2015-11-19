import React from "react";
import SideBar from "./sideBar";
import Ghost from "./ghost";

export default class ApplicationComponent extends React.Component {
  componentDidMount() {
    require("./style.less");
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3 sidebar-container">
          <SideBar />
          <Ghost />
        </div>
        <div className="col-xs-9 col-xs-offset-3 content-area">
          {this.props.children}
        </div>
      </div>
    );
  }
}
