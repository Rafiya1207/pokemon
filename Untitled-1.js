const vowels = (sentence) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return sentence
    .flatMap((w) => w.split(""))
    .filter((c) => vowels.includes(c));
};

const ascendingRuns = (numbers) =>
  numbers.reduce((runs, number) => {
    const run = runs[runs.length - 1];
    if (number > run[run.length - 1]) {
      run.push(number);
      return runs;
    }
    runs.push([number]);
    return runs;
  }, []);

const odds = (numbers) =>
  numbers.reduce((total, number) => (
    number % 2 === 1 ? total + (number * number) : total
  ), 0);
