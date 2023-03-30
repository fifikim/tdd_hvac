import HvacElement from "./hvac_element.js";

export default class Thermostat extends HvacElement {

  // we injected our dependencies here: 
  constructor(heater, cooler, fan) {
    super();
    this._temp = 72;
    this.name = "thermostat";
    this._on = true;
    this.heater = heater;
    this.cooler = cooler;
    this.fan = fan;
  }

  getTemp() {
    return this._temp;
  } 

  setHeat(status) {
    this.heater.setOn(status); 
  }

  // TODO: implement the methods below
  setCool() {} // True turns the cooler on, false turns it off
  setFan() {}  // True turns the fan on, false turns it off

  // TODO: complete this method
  tick() {
    setInterval(() => {
      this.#currentSystemStatus();
      
      // what should go in here?
    }, 2000);
  }

  #currentSystemStatus() {
    console.log("tick");
    console.log("Current temp: ", this.getTemp());
    console.log("Heater on: ", this.heater.on);

    // what else do we wanna log here?
  }
}
