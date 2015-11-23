import {Store} from "griffin.js";

import GetUpcomingEvent from "./GetUpcomingEvent";

export default new class UpcomingEventsStore extends Store {
  reducer(state = {}, action) {
    switch(action.constructor) {
      case GetUpcomingEvent:
        let currentTime = Date.now();

        action.events.forEach((event) => {
          let eventFinish = (new Date(event.end.dateTime)).getTime();

          if(currentTime < eventFinish) {
            state[event.id] = event;
          }
        });

        return Object.assign({}, state);
      default:
        return state;
    }
  }
}
