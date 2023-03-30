import Cooler from "../hvac_elements/cooler";
import Fan from "../hvac_elements/fan";
import Heater from "../hvac_elements/heater";
import Thermostat from "../hvac_elements/thermostat";

let thermostat;
let heater;
let cooler;
let fan;

beforeEach(() => {
    // TODO: create mock objects for the thermostat dependencies!
    heater = new Heater();
    cooler = new Cooler();
    fan = new Fan();
    thermostat = new Thermostat(heater, cooler, fan);
});

it("should create", () => {
    expect(thermostat).toBeTruthy();
});

describe("initial properties", () => {
    it("should be on", () => {
        expect(thermostat.on).toBeTruthy(); 
    });

    it("should not be exploded", () => {
        expect(thermostat.exploded).toBeFalsy();
    });
});

describe("setHeat", () => {
    it("heat should be on if passed true", () => {
        thermostat.setHeat(true);
        expect(thermostat.heater.on).toBeTruthy(); 
    });

    // what else should we test for this method?
});
