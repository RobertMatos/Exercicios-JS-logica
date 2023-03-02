const maskify = require("./Maskify");

describe("maskify", () => {
  it("should return the same string when it has less than or equal to four characters", () => {
    expect(maskify("123")).toEqual("123");
    expect(maskify("1234")).toEqual("1234");
  });

  it("should maskify all characters except the last four ones", () => {
    expect(maskify("4556364607935616")).toEqual("############5616");
    expect(maskify("64607935616")).toEqual("#######5616");
    expect(maskify("1")).toEqual("1");
    expect(maskify("")).toEqual("");
    expect(maskify("Skippy")).toEqual("##ippy");
    expect(maskify("Nanananananananananana Batman!")).toEqual(
      "##########################man!"
    );
  });
});
