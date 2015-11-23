import React from "react";

import {connect} from "griffin.js";

import UpcomingEventsStore from "./UpcomingEventsStore";
import GetUpcomingEvents from "./GetUpcomingEvents";

import UpcomingEvent from "./UpcomingEventComponent";

@connect({upcomingEvents: UpcomingEventsStore})
export default class UpcomingEventsComponent extends React.Component {
  componentDidMount() {
    new GetUpcomingEvents();

    require("./style.less");
  }

  render() {
    let upcomingEvents = [];
    let currentTime = Date.now();

    if(this.props.upcomingEvents) {
      let sortedEvents = Object.keys(this.props.upcomingEvents).filter((key) => {
        let eventFinish = (new Date(this.props.upcomingEvents[key].end.dateTime)).getTime();

        return (currentTime - eventFinish) <= 0;
      }).sort((x, y) => {
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
