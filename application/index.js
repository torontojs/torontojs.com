import React from "react";
import SideBar from "./sideBar";

export default class ApplicationComponent extends React.Component {
  componentDidMount() {
    require("./style.less");
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3 sidebar-container">
          <SideBar />
        </div>
        <div className="col-xs-9 col-xs-offset-3 content-area">
          {this.props.children}
        </div>
      </div>
    );
  }
}
