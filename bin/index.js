#! /usr/bin/env node

import Cooler from "../src/hvac_elements/cooler.js";
import Fan from "../src/hvac_elements/fan.js";
import Heater from "../src/hvac_elements/heater.js";
import Thermostat from "../src/hvac_elements/thermostat.js";

let heater = new Heater();
let cooler = new Cooler();
let fan = new Fan();
let thermostat = new Thermostat(heater, cooler, fan);

try {
  thermostat.tick();
} catch (e) {
  console.error(e);
}