import {addReducer} from "incremental-redux-reducers";

export default addReducer("upcomingEvents", (state = [], action) => {
  switch(action.type) {
    case "UPCOMING_EVENTS_ADD":
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
})
