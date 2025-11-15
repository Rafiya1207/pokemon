import { types, weekness } from "./src/filter_criteria.js";
import { filterPokemons } from "./src/filter_pokemons.js";

const getInput = (categories, category) => {
  console.log(
    `\nFilter Pokemons By ${category[0].toUpperCase() + category.slice(1)}`,
  );
  for (const key in categories) {
    console.log(`${key}: ${categories[key]}`);
  }

  return prompt("Enter Selection: ");
};

const getCategoryInput = () => {
  console.log(`Type\nWeekness\n`);

  return prompt("Enter Category: ");
};

const automate = () =>
  Object.entries(types).forEach((type) => {
    const filtered = filterPokemons(type[0]);
    console.log(type[1]);
    console.log(filtered);
  });

const selectCategory = (category) => {
  const categories = {
    "weekness": weekness,
    "type": types,
  };
  return categories[category];
};

const main = () => {
  console.clear();
  const category = getCategoryInput();
  const categories = selectCategory(category.toLowerCase());
  const userInput = getInput(categories, category);
  console.log(filterPokemons(userInput));
};

main();
