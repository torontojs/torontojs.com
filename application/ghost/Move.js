import {Action} from "griffin.js";

export default class MoveGhost extends Action {
  constructor(top) {
    super();

    this.top = top;

    this.dispatch();
  }
}
