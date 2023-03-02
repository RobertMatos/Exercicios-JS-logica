const axios = require("axios");

async function getRickAndMortyCharacters() {
  const charactersToFetch = [
    "Rick Sanchez",
    "Morty Smith",
    "Summer Smith",
    "Beth Smith",
    "Jerry Smith",
  ];
  const characterRequests = charactersToFetch.map((name) =>
    axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
  );
  const responses = await Promise.all(characterRequests);

  const characters = responses.map((response) => ({
    name: response.data.results[0].name,
    gender: response.data.results[0].gender,
    image: response.data.results[0].image,
    species: response.data.results[0].species,
  }));

  return characters;
}

module.exports = getRickAndMortyCharacters;
