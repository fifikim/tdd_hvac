import Heater from "../hvac_elements/heater.js";

let heater;

beforeEach(() => {
    heater = new Heater();
});

it("should create", () => {
    expect(heater).toBeTruthy();
});

describe("initial properties", () => {
    it("should be off", () => {
        expect(heater.on).toBeFalsy(); 
    });

    it("should not be exploded", () => {
        expect(heater.exploded).toBeFalsy();
    });
});
