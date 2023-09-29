function solve(input: string) {
  const inputToNumber: number[] = input
    .split("")
    .map((element) => Number(element));
  let sum = 0;
  return Math.max(
    ...inputToNumber.reduce((acc, element, index) => {
      if (!isNaN(inputToNumber[index])) {
        sum += element;
      }
      if (isNaN(inputToNumber[index++])) {
        acc.push(sum);
        sum = 0;
      }
      return acc;
    }, [] as number[])
  );
}

console.log(solve("123as3bdu42sdn"));
