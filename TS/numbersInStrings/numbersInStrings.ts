function solve(input: string) {
  const inputToNumber: number[] = input
    .split("")
    .map((element) => Number(element));
  let sum = "";
  return Math.max(
    ...inputToNumber
      .reduce((acc, element, index) => {
        if (!isNaN(inputToNumber[index])) {
          sum += String(element);
        }
        if (isNaN(inputToNumber[index++])) {
          acc.push(sum);
          sum = "";
        }
        return acc;
      }, [] as string[])
      .map((element) => Number(element))
  );
}

console.log(solve("lu1j8qbbb85"));
