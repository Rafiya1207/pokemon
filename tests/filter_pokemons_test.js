import { assertEquals } from "jsr:@std/assert";
import { filterByType } from "../src/filter_pokemons.js";
import { pokemons } from "../src/pokedox.js";

Deno.test("criteria - fire", () =>
  assertEquals(filterByType(pokemons, "fire"), [
    {
      name: "charmander",
      id: "#0004",
      category: "lizard",
      abilities: "blaze",
      type: ["fire"],
      weakness: ["water", "ground", "rock"],
    },
  ]));

Deno.test("criteria - grass", () =>
  assertEquals(filterByType(pokemons, "grass"), [
    {
      name: "bulbasur",
      id: "#0001",
      category: "seed",
      abilities: "overgrow",
      type: ["grass", "poison"],
      weakness: ["fire", "ice", "flying", "psychic"],
    },
    {
      name: "oddish",
      id: "#0043",
      category: "weed",
      abilities: "chlorophll",
      type: ["grass", "poison"],
      weakness: ["fire", "ice", "flying", "psyhic"],
    },
    {
      name: "parasect",
      id: "#0047",
      category: "mushroom",
      abilities: "effect spore",
      type: ["bug", "grass"],
      weakness: ["fire", "ice", "poison", "bug", "flying", "rock"],
    },
  ]));
