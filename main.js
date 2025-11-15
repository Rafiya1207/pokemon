import { filterPokemons, selectCategoryMap } from "./src/filter_pokemons.js";

const getOptionInput = (categoryOptions, category) => {
  console.log(
    `\nFilter Pokemons By ${category[0].toUpperCase() + category.slice(1)}`,
  );

  for (const tag in categoryOptions) {
    console.log(`${tag}: ${categoryOptions[tag]}`);
  }
  return prompt("Enter Option: ");
};

const getFilterCategory = () => {
  console.log(`Type\nWeakness\n`);

  return prompt("Enter Category: ");
};

const getFilterInputs = () => {
  const category = getFilterCategory().toLowerCase();
  const categoryOptions = selectCategoryMap(category);
  const userInput = getOptionInput(categoryOptions, category);
  return { category, userInput };
};

const main = () => {
  console.clear();
  const { category, userInput } = getFilterInputs();
  console.log(filterPokemons(category, userInput));
};

main();
