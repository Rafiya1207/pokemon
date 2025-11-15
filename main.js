import { filterPokemons, selectCategory } from "./src/filter_pokemons.js";

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
  console.log(`Type\nWeakness\n`);

  return prompt("Enter Category: ");
};

const getInputs = () => {
  const category = getCategoryInput().toLowerCase();
  const categories = selectCategory(category);
  const userInput = getInput(categories, category);
  return { category, userInput };
};

const main = () => {
  console.clear();
  const { category, userInput } = getInputs();
  console.log(filterPokemons(category, userInput));
};

main();
