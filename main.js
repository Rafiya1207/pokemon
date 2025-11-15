import { types, weakness } from "./src/filter_criteria.js";
import { filterPokemonsBy, selectCategory } from "./src/filter_pokemons.js";

const getInput = (categories, category) => {
  console.log(
    `\nFilter Pokemons By ${category[0].toUpperCase() + category.slice(1)}`,
  );
  for (const key in categories) {
    console.log(`${key}: ${categories[key]}`);
  }

  return prompt("Enter Selection: ") || 'gr';
};

const getCategoryInput = () => {
  console.log(`Type\nWeakness\n`);

  return prompt("Enter Category: ") || 'weakness';
};

const automate = () =>
  Object.entries(types).forEach((type) => {
    const filtered = filterPokemons(type[0]);
    console.log(type[1]);
    console.log(filtered);
  });

const main = () => {
  console.clear();
  const category = getCategoryInput().toLowerCase();
  const categories = selectCategory(category);
  const userInput = getInput(categories, category);
  console.log(filterPokemonsBy(category, userInput));
};

main();
