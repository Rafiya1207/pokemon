export const filterByType = (pokemons, criteria) =>
  pokemons
    .filter(({ type }) => type.includes(criteria))
