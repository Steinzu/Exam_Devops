const { isEmpty, gamertagValid } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function

describe("validations tests suites - longerThan8", () => {
    test("Should return true if gamertag is longer than 8", () => {
        const result = gamertagValid("validGamertag@1");
        expect(result).toBe(true);
    });

    test("Should return true if gamertag has a special character", () => {
        const result = gamertagValid("validGamertag@1");
        expect(result).toBe(true);
    });

    test("Should return true if gamertag has a number", () => {
        const result = gamertagValid("validGamertag@");
        expect(result).toBe(true);
    });
});

