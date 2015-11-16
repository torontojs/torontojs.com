import {Action} from "griffin.js";

import fetch from "isomorphic-fetch";

export default class GetUpcomingEvent extends Action {
  constructor(meetupName, meetupInfoURL) {
    super();

    this.meetupName = meetupName;
    this.meetupInfoURL = meetupInfoURL;

    fetch(this.meetupInfoURL, {mode: "cors"}).then(
      this.handleSuccess.bind(this)
    , this.handleFailure.bind(this)
    )
  }

  handleSuccess(response) {
    response.json().then((calendar) => {
      this.events = calendar.items;
      this.dispatch();
    });
  }

  handleFailure(response) {
    console.log("ERROR!!!");

    console.trace();
  }
}
