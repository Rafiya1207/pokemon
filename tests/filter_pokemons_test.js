import { assertEquals } from "jsr:@std/assert";
import { filterPokemons } from "../src/filter-pokemons/filter_pokemons.js";

export const dbg = (x) => {
  console.log(x);
  return x;
};

Deno.test("filter by type - fire", () =>
  assertEquals(filterPokemons("type", "f"), [
    {
      name: "charmander",
      id: "#0004",
      category: "lizard",
      abilities: "blaze",
      type: ["fire"],
      weakness: ["water", "ground", "rock"],
    },
  ]));

Deno.test("filter by weakness - grass", () =>
  assertEquals(filterPokemons("weakness", "g"), [
    {
      name: "golduck",
      id: "#0055",
      category: "duck",
      abilities: "cloud nine",
      type: ["water"],
      weakness: ["grass", "electric"],
    },
  ]));
