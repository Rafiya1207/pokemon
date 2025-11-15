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

const getOptionInput = (
  categoryOptions,
  category,
  optionMsg = "Enter option: ",
) => {
  console.clear();
  console.log(
    `Filter Pokemons By ${category[0].toUpperCase() + category.slice(1)}\n`,
  );

  for (const tag in categoryOptions) {
    console.log(`${tag}: ${categoryOptions[tag]}`);
  }
  return prompt(`\n${optionMsg}`);
};

const getFilterCategory = (message = "Enter category to filter by: ") => {
  console.clear();
  console.log(`Type\nWeakness\n`);

  return prompt(message);
};

const validateCategory = (userInput) => {
  if (isValidCategory(userInput)) {
    return userInput;
  }
  return validateCategory(getFilterCategory("Enter valid category: "));
};

const validateOption = (userInput, categoryOptions, category) => {
  if (isValidOption(userInput, categoryOptions)) {
    return userInput;
  }

  return validateOption(
    getOptionInput(categoryOptions, category, "Enter valid option: "),
    categoryOptions,
    category,
  );
};

const getFilterInputs = () => {
  const userCategory = getFilterCategory().toLowerCase();
  const category = validateCategory(userCategory);

  const categoryOptions = selectCategoryMap(category);

  const userOption = getOptionInput(categoryOptions, category);
  const option = validateOption(userOption, categoryOptions, category);

  return { category, option };
};

const main = () => {
  const { category, option } = getFilterInputs();

  console.log(filterPokemons(category, option));
};

main();
