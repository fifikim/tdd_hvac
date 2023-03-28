export default class Hvac {

  // which dependencies should we inject?
  constructor() {

  }

  // implement these methods
  setHeat() {} // True turns the heater on, false turns it off
  setCool() {} // True turns the cooler on, false turns it off
  setFan() {} // True turns the fan on, false turns it off
  getTemp() {} // Get the temperature of the room (as an int)

  // finish this method
  tick() {
    setInterval(() => {
      this.#currentSystemStatus();
      
      // what goes here?
      this.fan.explode();

    }, 2000);
  }

  #currentSystemStatus() {
    console.log("tick");

    // what else?
  }
}
