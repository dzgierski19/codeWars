function highAndLow(numbers: string): string {
  const stringsToNumbersArr = numbers
    .trim()
    .split(" ")
    .map((element) => Number(element));
  return `${Math.max(...stringsToNumbersArr)} ${Math.min(
    ...stringsToNumbersArr
  )}`;
}

const result2 = highAndLow(" 1 1 2 2 3 4 ");
console.log(result2);
