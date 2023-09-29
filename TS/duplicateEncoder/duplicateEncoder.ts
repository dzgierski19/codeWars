function duplicateEncode(word: string) {
  const wordToUpperCase = word.toUpperCase();
  const splittedWord = wordToUpperCase.split("");
  return splittedWord.reduce((acc, element, index) => {
    if (
      splittedWord.indexOf(element) === index &&
      splittedWord.indexOf(element, index + 1) === -1
    ) {
      return (acc += "(");
    }
    return (acc += ")");
  }, "");
}

console.log(duplicateEncode("Asdko23jenfwdfoi3j3ij"));
