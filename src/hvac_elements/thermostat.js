import HvacElement from "./hvac_element.js";

export default class Thermostat extends HvacElement {
  constructor() {
    super();
    this.name = "thermostat";
    this.on = true;
    this._temp = 72;
  }

  get temp() {
    return this._temp;
  }

  // add methods
  
}
