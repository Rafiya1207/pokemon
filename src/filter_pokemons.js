import { typeMap, weaknessMap } from "./filter_criteria.js";
import { pokemons } from "./pokedox.js";

export const selectCategoryMap = (category) => {
  const categoryMaps = {
    "weakness": weaknessMap,
    "type": typeMap,
  };
  return categoryMaps[category];
};

export const filterByCategory = (category, criteria) =>
  pokemons
    .filter((pokemon) => pokemon[category].includes(criteria));

export const filterPokemons = (category, tag) => {
  const categoryMap = selectCategoryMap(category);
  return filterByCategory(category, categoryMap[tag].toLowerCase());
};
