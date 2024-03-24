import { isString, isFloat, isInt } from "./helpers";

test("Is value a string", () => {
    expect(isString("test")).toBe(true);
    expect(isString("123")).toBe(false);
});

test("Is value a float", () => {
    expect(isFloat("123.45")).toBe(true);
    expect(isFloat("123")).toBe(false);
    expect(isFloat("test")).toBe(false);
});

test("Is value an integer", () => {
    expect(isInt("123")).toBe(true);
    expect(isInt("123.45")).toBe(false);
    expect(isInt("test")).toBe(false);
});