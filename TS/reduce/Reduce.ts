const reduce = (
  nums: number[],
  fn: (accum: number, curr: number) => number,
  init: number,
  sum = 0
): number => {
  sum = fn(sum, nums[0]);
  nums.shift();
  if (nums.length > 0) {
    return reduce(nums, fn, init, sum);
  }
  return sum + init;
};

const result = reduce(
  [1, 2, 3, 4],
  (accum, curr) => {
    return accum + curr;
  },
  0
);

console.log(result);
