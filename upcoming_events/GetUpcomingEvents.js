import getUpcomingEvent from "./getUpcomingEvent";

function makeGoogleCalendarURL(calID) {
  return `https://www.googleapis.com/calendar/v3/calendars/${calID}/events?singleEvents=true&key=AIzaSyA-xW0xIfYvro-zD0JCLRfJwqs6s2MmKmU`;
}

const javaScriptMeetups = {
  angularjs: makeGoogleCalendarURL("tgh4uc5t6uhr4icjrcgqfhe18r2uu3fg@import.calendar.google.com")
, emberjs: makeGoogleCalendarURL("11j5qfhbb916srru7kuae99i4rn3p8r5@import.calendar.google.com")
, fullstack: makeGoogleCalendarURL("qp59hmmpclktmd2ujqsunb6a8k4ferir@import.calendar.google.com")
, htmlto: makeGoogleCalendarURL("89aheia1si29mqt1kvuprggnid983m87@import.calendar.google.com")
, meteorjs: makeGoogleCalendarURL("sv5rg9q32cg6qhabdgi33fjur45vcilh@import.calendar.google.com")
, nodeschool: makeGoogleCalendarURL("3drnie5h5b5mr73acgcqpvvc2k@group.calendar.google.com")
, oneoffevents: makeGoogleCalendarURL("torontojs.com_o83mhhuck726m114hgkk3hl79g@group.calendar.google.com")
, reactjs: makeGoogleCalendarURL("59s1qmiqr7bo98uqkek5ba7er2eduk3t@import.calendar.google.com")
, torontojs: makeGoogleCalendarURL("k6l8oiu416ftcjpjetn0r7a79me8pq4r@import.calendar.google.com")
};

export default function getUpcomingEvents() {
  return (dispatch) => {
    for(let meetupName in javaScriptMeetups) {
      let meetupInfoURL = javaScriptMeetups[meetupName];

      dispatch(getUpcomingEvent(meetupName, meetupInfoURL));
    }
  }
}
