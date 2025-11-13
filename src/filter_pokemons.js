import { types } from "./filter_criteria.js";
import { pokemons } from "./pokedox.js";
import { dbg } from "../tests/filter_pokemons_test.js";

export const filterByType = (criteria) =>
  pokemons
    .filter(({ type }) => type.includes(criteria));

export const filterPokemons = (userCriteria) =>
  filterByType(types[userCriteria].toLowerCase());
