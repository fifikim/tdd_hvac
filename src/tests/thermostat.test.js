import Thermostat from "../hvac_elements/thermostat";

let thermostat;

beforeEach(() => {
    thermostat = new Thermostat();
});

it("should create", () => {
    expect(thermostat).toBeTruthy();
});

describe("initial properties", () => {
    // write these tests
});
