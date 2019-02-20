let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events`
+ `?singleEvents=true&key=AIzaSyA-xW0xIfYvro-zD0JCLRfJwqs6s2MmKmU`


export default {
  beagajs: makeGoogleCalendarURL(`8j8r11hld10rl6bqrhluvpif3glumb3q@import.calendar.google.com`),
}
