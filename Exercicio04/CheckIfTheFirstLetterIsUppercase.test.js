const checkIfTheFirstLetterIsUppercase = require("./CheckIfTheFirstLetterIsUppercase");

describe("checkIfTheFirstLetterIsUppercase", () => {
    it("should return true if the first letter is uppercase", () => {
        expect(checkIfTheFirstLetterIsUppercase("Brasil")).toBe(true);
        expect(checkIfTheFirstLetterIsUppercase("Deu Certo!")).toBe(true);
    });

    it("should return false if the first letter is lowercase", () => {
        expect(checkIfTheFirstLetterIsUppercase("mobiauto")).toBe(false);
        expect(checkIfTheFirstLetterIsUppercase("xXx xXx")).toBe(false);
        expect(checkIfTheFirstLetterIsUppercase("xDD")).toBe(false);
    });

    it("should return false for an empty string", () => {
        expect(checkIfTheFirstLetterIsUppercase("")).toBe(false);
    });
});
