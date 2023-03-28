import Heater from "../hvac_elements/heater.js";

let heater;

beforeEach(() => {
    heater = new Heater();
});

it("should create", () => {
    expect(heater).toBeTruthy();
});

describe("initial properties", () => {
    // write these tests
});
