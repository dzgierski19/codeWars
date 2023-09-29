function reverseWords(str: string): string {
  const reduce = str.split(" ").reduce((acc, element, index) => {
    const split = element.split("").reverse().join("");
    acc += split;
    return acc + " ";
  }, "");
  return reduce.slice(0, reduce.length - 1);
}

const result = reverseWords("The quick brown fox jumps over the lazy dog.");
console.log(result);
