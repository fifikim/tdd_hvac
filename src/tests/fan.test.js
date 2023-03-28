import Fan from "../hvac_elements/fan.js";

let fan;

beforeEach(() => {
    fan = new Fan();
});

it("should create", () => {
    expect(fan).toBeTruthy();
});

describe("initial properties", () => {
    // write these tests
});
