import {Store} from "griffin.js";

import MoveGhost from "./Move";

export default new class GhostStore extends Store {
  reducer(state = 0, action) {
    switch(action.constructor) {
      case MoveGhost:
        return action.top;
      default:
        return state;
    }
  }
}
