function narcissistic(value: number): boolean {
  const valueString = String(value);
  const arrFromValue = Array.from(valueString);
  const result = arrFromValue.reduce(
    (acc, element) => (acc += Number(element) ** arrFromValue.length),
    0
  );
  return result === value;
}

const result2 = narcissistic(153);
console.log(result2);
