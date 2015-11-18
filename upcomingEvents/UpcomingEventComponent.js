import React from "react";

const DAYS_OF_WEEK = [
  "Sunday"
, "Monday"
, "Tuesday"
, "Wednesday"
, "Thursday"
, "Friday"
, "Saturday"
];

const MONTHS = [
  "January"
, "February"
, "March"
, "April"
, "May"
, "June"
, "July"
, "August"
, "September"
, "October"
, "November"
, "December"
];

export default class UpcomingEventComponent extends React.Component {
  render() {
    let event = this.props.event;
    let meetupName, startDate, displayStartDate, description, url;

    if(event.organizer.displayName === "NodeSchool Toronto") {
      meetupName = "NodeSchool";
      description = event.description;
      url = "http://nodeschool.io/toronto/";
    }
    else {
      [meetupName,,,description,,url] = event.description.split("\n");
    }

    startDate = new Date(event.start.dateTime);

    let day = DAYS_OF_WEEK[startDate.getDay()];
    let month = MONTHS[startDate.getMonth()];
    let date = startDate.getDate();
    let hours = (startDate.getHours() % 12) + 1;
    let minutes = startDate.getMinutes();
    let AMPM = startDate.getHours() < 12 ? "AM" : "PM";

    if(minutes <= 10) {
      minutes = `0${minutes}`;
    }

    displayStartDate = `${day}, ${month} ${date} at ${hours}:${minutes}${AMPM}`;

    return (
      <div className="event">
        <h4>{meetupName} - {event.summary}</h4>
        <p>{displayStartDate}</p>
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
