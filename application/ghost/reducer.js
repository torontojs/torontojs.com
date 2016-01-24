import {addReducer} from "incremental-redux-reducers";

export default addReducer("ghost", (state = 0, action) => {
  switch(action.type) {
    case "GHOST_MOVE":
      return action.top;
    default:
      return state;
  }
})
