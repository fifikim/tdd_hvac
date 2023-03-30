export default class HvacElement {
  constructor() {
    this._on = false;
    this.exploded = false;
  }

  get on() {
    return this._on;
  }

  setOn(shouldBeOn) {
      this._on = shouldBeOn;
  }
}
