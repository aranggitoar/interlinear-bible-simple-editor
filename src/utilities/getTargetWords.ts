// Get every target words from the verse.
export function getTargetWords(arrayOfWordComponents: Array<Array<string>>, arrayOfTargetWords: Array<string>) {
  for (let i = 0; arrayOfWordComponents.length > i; i++) {
    arrayOfTargetWords.push(arrayOfWordComponents[i][0]);
  }
}
