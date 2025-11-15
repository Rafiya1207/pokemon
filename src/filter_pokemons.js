import { typeMap, weaknessMap } from "./filter_criteria.js";
import { pokemons } from "./pokedox.js";
import { dbg } from "../tests/filter_pokemons_test.js";

export const selectCategory = (category) => {
  const categories = {
    "weakness": weaknessMap,
    "type": typeMap,
  };
  return categories[category];
};

export const filterBy = (category, criteria) =>
  pokemons
    .filter((pokemon) => pokemon[category].includes(criteria));

export const filterPokemons = (category, criteria) => {
  const actualKey = selectCategory(category);
  return filterBy(category, actualKey[criteria].toLowerCase());
};
