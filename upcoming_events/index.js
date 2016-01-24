import React from "react";

import {connect} from "react-redux";
import {mapReducersToProps} from "incremental-redux-reducers";

import upcomingEventsReducer from "./reducer";
import getUpcomingEvents from "./getUpcomingEvents";

import UpcomingEvent from "./UpcomingEventComponent";

@connect(mapReducersToProps({upcomingEvents: upcomingEventsReducer}))
export default class UpcomingEventsComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUpcomingEvents());

    require("./style.less");
  }

  render() {
    let upcomingEvents = [];
    let currentTime = Date.now();

    if(this.props.upcomingEvents) {
      let sortedEvents = Object.keys(this.props.upcomingEvents).sort((x, y) => {
        let xStart = this.props.upcomingEvents[x].start.dateTime;
        let yStart = this.props.upcomingEvents[y].start.dateTime;

        if(xStart > yStart) {
          return 1;
        }
        else if(yStart > xStart) {
          return -1;
        }
        else {
          return 0;
        }
      });

      upcomingEvents = sortedEvents.reduce((memo, eventID, index, sortedEvents) => {
        memo.push(
          <UpcomingEvent
            key={eventID}
            event={this.props.upcomingEvents[eventID]}
          />
        );

        if(index < sortedEvents.length - 1) {
          memo.push(<hr key={`hr-${eventID}`} />);
        }

        return memo;
      }, []);
    }

    return (
      <div>
        <h1>Upcoming Events</h1>

        {upcomingEvents}
      </div>
    );
  }
}
