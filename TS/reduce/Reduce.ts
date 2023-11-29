const reduce = (
  nums: number[],
  fn: (accum: number, curr: number) => number,
  init: number,
  sum = init
): number => {
  if (nums.length === 0) {
    return sum;
  }
  sum = fn(sum, nums[0]);
  nums.shift();
  if (nums.length > 0) {
    return reduce(nums, fn, init, sum);
  }
  return sum;
};

const result2 = reduce(
  [1, 2, 3, 4],
  (accum, curr) => {
    return accum + curr;
  },
  0
);

const result3 = reduce(
  [],
  function sum(accum, curr) {
    return 0;
  },
  25
);

console.log(result3);
