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

const getFilterCategory = (message = "Enter Category: ") => {
  console.log(`Type\nWeakness\n`);

  return prompt(message);
};

const validateCategory = (userInput) => {
  if (isValidCategory(userInput)) {
    return userInput;
  }
  return validateCategory(getFilterCategory("Enter Valid Category: "));
};

const getFilterInputs = (
  optionMsg = "Enter Option: ",
) => {
  const userCategory = getFilterCategory().toLowerCase();
  const category = validateCategory(userCategory);

  const categoryOptions = selectCategoryMap(category);
  const userOption = getOptionInput(categoryOptions, category, optionMsg);

  if (isValidOption(userOption, categoryOptions)) {
    return { category, userOption };
  }

  return getFilterInputs("Enter Valid Category: ", optionMsg);
};

const main = () => {
  console.clear();
  const { category, userInput } = getFilterInputs();
  console.log(filterPokemons(category, userInput));
};

main();
