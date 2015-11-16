import {Store} from "griffin.js";

import GetUpcomingEvent from "./GetUpcomingEvent";

export default new class UpcomingEventsStore extends Store {
  reducer(state = {}, action) {
    switch(action.constructor) {
      case GetUpcomingEvent:
        action.events.forEach((event) => {
          state[event.id] = event;
        });

        return Object.assign({}, state);
      default:
        return state;
    }
  }
}
