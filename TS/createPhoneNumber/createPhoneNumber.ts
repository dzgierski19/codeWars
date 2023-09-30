export function createPhoneNumber(numbers: number[]): string {
  if (numbers.length !== 10) {
    throw new Error("Please type array with 10 numbers");
  }
  const stringed = numbers.map((element) => String(element));
  return stringed.reduce((acc, element, index) => {
    if (index >= 0 && index < 2) {
      acc += element;
    }
    if (index === 2) {
      acc += element + ") ";
    }
    if (index >= 3 && index < 5) {
      acc += element;
    }
    if (index === 5) {
      acc += element + "-";
    }
    if (index >= 6) {
      acc += element;
    }
    return acc;
  }, "(");
}

const exampleNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = createPhoneNumber(exampleNumber);

console.log(result);
