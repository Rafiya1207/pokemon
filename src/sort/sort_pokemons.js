import { pokemons } from "../pokedox.js";

const parseID = (id) => parseInt(id.slice(1));

const sortByID = (pokemons) =>
  pokemons
    .map((pokemon) => parseID(pokemon.id))
    .sort((a, b) => a - b)
    .map((currID) => pokemons.find(({ id }) => id.includes(currID)));

sortByID(pokemons);
