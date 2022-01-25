// Get every target words from the verse.
// Accept an array of word components.
// Return them as an array of strings.
export function getTargetWords(arrayOfWordComponents: Array<Array<string>>) {
  let arrayOfTargetWords = [] as Array<string>;

  for (let i = 0; arrayOfWordComponents.length > i; i++) {
    arrayOfTargetWords.push(arrayOfWordComponents[i][0]);
  }

  return arrayOfTargetWords as Array<string>;
}
