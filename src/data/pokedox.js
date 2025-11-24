export const pokemons = [
  {
    name: "bulbasur",
    id: "#0001",
    category: "seed",
    abilities: "overgrow",
    type: ["grass", "poison"],
    weakness: ["fire", "ice", "flying", "psychic"],
  },
];

const parsePokemonsCSV = (CSVData) => {
  const dataAsArray = CSVData.split("\n");
  const columns = dataAsArray.slice(0, 1);
  const pokemonsData = dataAsArray.slice(1);

  console.log(pokemonsData.slice(1, 5));
  console.log(columns);
};

const trimCommas = (field) => {
  let trimmedStr = string;

  if (string[0] === ",") {
    trimmedStr = string.slice(1, string.length - 1);
  }
  if (trimmedStr[trimmedStr.length - 1] === ",") {
    trimmedStr = trimmedStr.slice(0, string.length - 2);
  }
  return trimmedStr;
};

const splitRow = (row) => {
  const splittedRow = [];
  const fields = row.split('"');
  let field = fields[0];

  if (fields[0].endsWith(',')) {
    field = (fields[0].slice(0, fields[0].length - 1).split(','))
  }

  splittedRow.push(field);

  for (let index = 1; index < fields.length - 1; index++) {
    field = fields[index];
    
    if (field.startsWith(',') && field.endsWith(',')) {
      field = field.slice(1, field.length - 1).split(',');
    }
    splittedRow.push(field);
  }

  field = fields[fields.length - 1];

  if (fields[fields.length - 1].startsWith(',')) {
    field = (fields[fields.length - 1].slice(1).split(','))
  }

  splittedRow.push(field);
  return splittedRow.flatMap(x => x);
}

const parseCSV = (CSVData) => {
  const lines = CSVData.split('\n');
  const columns = lines.slice(0, 1)[0].split(",");
  const data = lines
    .slice(1)
    .map(splitRow)
    .map((row) => row.map((field, i) => {
      const key = columns[i];
      console.log(key);
      
      return {}[key] = field;
    }))

  return data;
};

const makePokedox = () => {
  const CSVData = Deno.readTextFileSync("src/data/pokemons_csv.txt");
  parsePokemonsCSV(CSVData);
};
