import { types } from "./src/filter_criteria.js";
import { filterPokemons } from "./src/filter_pokemons.js";

const INPUT_FORMAT = `
f: Fire
g: Grass
n: Normal
fl: Flying
p: Poison
w: Water
b: Bug
s: Steel
e: Electric
`;

const getInput = () => {
  console.log(`Filter Pokemons By Type\n${INPUT_FORMAT}`);

  return prompt("Enter Selection: ");
};

const automate = () =>
  Object.entries(types).forEach((type) => {
    const filtered = filterPokemons(type[0]);
    console.log(type[1]);
    console.log(filtered);
  });

const main = () => {
  console.clear();
  const userInput = getInput();
  console.log(filterPokemons(userInput));
};

main();
