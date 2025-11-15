import { types, weakness } from "./filter_criteria.js";
import { pokemons } from "./pokedox.js";
import { dbg } from "../tests/filter_pokemons_test.js";

export const filterByType = (criteria) =>
  pokemons
    .filter(({ type }) => type.includes(criteria));

export const filterByWeakness = (criteria) =>
  pokemons
    .filter(({ weakness }) => weakness.includes(criteria));

export const selectCategory = (category) => {
  const categories = {
    "weakness": weakness,
    "type": types,
  };
  return categories[category];
};

export const filterPokemonsBy = (category, criteria) => {
  const filter = {
    'type': filterByType,
    'weakness': filterByWeakness,
  }

  const actualKey = selectCategory(category);
  return filter[category](actualKey[criteria].toLowerCase());
}