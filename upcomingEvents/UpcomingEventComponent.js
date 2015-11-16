import React from "react";

export default class UpcomingEventComponent extends React.Component {
  render() {
    let event = this.props.event;
    let meetupName, startDate, description, url;

    if(event.organizer.displayName === "NodeSchool Toronto") {
      meetupName = "NodeSchool";
      startDate = (new Date(event.start.date)).toDateString();
      description = event.description;
      url = "http://nodeschool.io/toronto/";
    }
    else {
      [meetupName, startDate,, description,,url] = event.description.split("\n");
    }

    return (
      <div className="event">
        <h4>{meetupName} - {event.summary}</h4>
        <p>{startDate}</p>
        <p>{event.location}</p>
        <p>{description}</p>
        <p>
          <a href={url} target="_blank">
            {url}
          </a>
        </p>
      </div>
    );
  }
}
