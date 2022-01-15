// Get every original words from the verse.
export function getOriginalWords(arrayOfWordComponents: Array<Array<string>>, arrayOfOriginalWords: Array<string>) {
  for (let i = 0; arrayOfWordComponents.length > i; i++) {
    arrayOfOriginalWords.push(arrayOfWordComponents[i][1]);
  }
}
