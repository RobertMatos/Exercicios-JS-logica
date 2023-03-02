const updateData = require("./UpdateData");

describe("updateData function", () => {
  it("should update the properties of the first object based on the second object", () => {
    const obj1 = { name: "Marcos", country: "Brasil", age: 22 };
    const obj2 = { country: "Japão", age: 33 };
    const expected = { name: "Marcos", country: "Japão", age: 33 };

    const result = updateData(obj1, obj2);

    expect(result).toEqual(expected);
  });

  it("should not add new properties to the first object", () => {
    const obj1 = { name: "Marcos", country: "Brasil", age: 22 };
    const obj2 = {
      price: 89.9,
      amount: 15,
      description: "camiseta 100% algodão",
    };
    const expected = { name: "Marcos", country: "Brasil", age: 22 };

    const result = updateData(obj1, obj2);

    expect(result).toEqual(expected);
  });

  it("should not update properties that do not exist in the first object", () => {
    const obj1 = { name: "Rafael", country: "Chile", age: 42 };
    const obj2 = { name: "Camiseta Polo", price: 59.9, amount: 30 };
    const expected = { name: "Camiseta Polo", country: "Chile", age: 42 };

    const result = updateData(obj1, obj2);

    expect(result).toEqual(expected);
  });
});
