import Fan from "../hvac_elements/fan.js";

let fan;

beforeEach(() => {
    fan = new Fan();
});

it("should create", () => {
    expect(fan).toBeTruthy();
});

describe("initial properties", () => {
    it("should be off", () => {
        expect(fan.on).toBeFalsy(); 
    });

    it("should not be exploded", () => {
        expect(fan.exploded).toBeFalsy();
    });
});



