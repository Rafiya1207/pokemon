import { pokemons } from "./pokedox.js";

const printPokemon = (args) => {
  console.log(args.name);
};

for (const value of pokemons) {
  printPokemon(value)
}