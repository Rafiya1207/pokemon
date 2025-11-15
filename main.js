import {
  filterPokemons,
  selectCategoryMap,
} from "./src/filter-pokemons/filter_pokemons.js";

const isValidCategory = (userInput) => {
  return ["type", "weakness"].includes(userInput);
};

const isValidOption = (userInput, categoryOptions) => {
  return Object.keys(categoryOptions).some((key) => key === userInput);
};

const getOptionInput = (categoryOptions, category, optionMsg) => {
  console.log(
    `\nFilter Pokemons By ${category[0].toUpperCase() + category.slice(1)}`,
  );

  for (const tag in categoryOptions) {
    console.log(`${tag}: ${categoryOptions[tag]}`);
  }
  return prompt(optionMsg);
};

const getFilterCategory = (message) => {
  console.log(`Type\nWeakness\n`);

  return prompt(message);
};

const getFilterInputs = (
  categoryMsg = "Enter Category: ",
  optionMsg = "Enter Option: ",
) => {
  const category = getFilterCategory(categoryMsg).toLowerCase();

  if (isValidCategory(category)) {
    const categoryOptions = selectCategoryMap(category);
    const userInput = getOptionInput(categoryOptions, category, optionMsg);

    if (isValidOption(userInput, categoryOptions)) {
      return { category, userInput };
    }
    
  }
  return getFilterInputs("Enter Valid Category: ", optionMsg);
};

const main = () => {
  console.clear();
  const { category, userInput } = getFilterInputs();
  console.log(filterPokemons(category, userInput));
};

main();
