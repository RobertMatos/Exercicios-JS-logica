const getRickAndMortyCharacters = require("./GetRickAndMortyCharacters");

describe("Rick and Morty API", () => {
  it("should return the characters data in the expected format", async () => {
    const expectedOutput = [
      {
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        name: "Rick Sanchez",
        species: "Human",
      },
      {
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        name: "Morty Smith",
        species: "Human",
      },
      {
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        name: "Summer Smith",
        species: "Human",
      },
      {
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        name: "Beth Smith",
        species: "Human",
      },
      {
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        name: "Jerry Smith",
        species: "Human",
      },
    ];

    const result = await getRickAndMortyCharacters();

    expect(result).toEqual(expectedOutput);
  });
});
