import Cooler from "../hvac_elements/cooler.js";

let cooler;

beforeEach(() => {
    cooler = new Cooler();
});

it("should create", () => {
    expect(cooler).toBeTruthy();
});

describe("initial properties", () => {
    it("should be off", () => {
        expect(cooler.on).toBeFalsy(); 
    });

    it("should not be exploded", () => {
        expect(cooler.exploded).toBeFalsy();
    });
});
