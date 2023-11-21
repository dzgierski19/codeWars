export function getSum(a: number, b: number, sum = 0): number {
  if (a === b) {
    return (sum += a);
  } else if (a < b) {
    sum += a;
    a++;
  } else if (b < a) {
    sum += b;
    b++;
  }
  return getSum(a, b, sum);
}

const result = getSum(4, -1);
console.log(result);
