import React from "react";
import {connect} from "react-redux";
import {mapReducersToProps} from "incremental-redux-reducers";
import {Motion, spring} from "react-motion";
import CSSTransitionGroup from "react-addons-css-transition-group";
import ghostReducer from "./reducer";

const springRate = [90, 12]; // stiffness, dampening

@connect(mapReducersToProps({top: ghostReducer}))
export default class GhostComponent extends React.Component {
  componentDidMount() {
    require("./style.less");
  }

  render() {
    let ghostDiv;

    if(this.props.top) {
      ghostDiv = (
        <Motion style={{y: spring(this.props.top, springRate)}}>
          {({y}) =>
            <div className="ghost" style={{top: y}}>
            </div>
          }
        </Motion>
      );
    }

    return (
      <CSSTransitionGroup
        transitionName="ghost"
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}
      >
        {ghostDiv}
      </CSSTransitionGroup>
    )
  }
}
