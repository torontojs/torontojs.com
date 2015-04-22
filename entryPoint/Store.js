import {EventEmitter} from "events";
import Dispatcher from "../Dispatcher";

import LoadEntryPoint from "./Load";

let entryPoint = null;

export default new class extends EventEmitter {
  get entryPoint() {
    return entryPoint;
  }

  set entryPoint(newEntryPoint) {
    entryPoint = newEntryPoint;
  }

  dispatchToken = Dispatcher.register((payload) => {
    switch(payload.constructor) {
      case LoadEntryPoint:
        this.entryPoint = payload.newEntryPoint;

        this.emit("change");
    }
  })
}
