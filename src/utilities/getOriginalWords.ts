// Get every original words from the verse.
// Accept an array of word components.
// Return them as an array of strings.
export function getOriginalWords(arrayOfWordComponents: Array<Array<string>>) {
  let arrayOfOriginalWords = [] as Array<string>;

  for (let i = 0; arrayOfWordComponents.length > i; i++) {
    arrayOfOriginalWords.push(arrayOfWordComponents[i][1]);
  }

  return arrayOfOriginalWords as Array<string>;
}
