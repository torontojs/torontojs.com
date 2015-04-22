import BaseAction from "../BaseAction";

export default class extends BaseAction {
  constructor(newEntryPoint) {
    super();

    this.newEntryPoint = newEntryPoint;

    this.dispatch();
  }
}
