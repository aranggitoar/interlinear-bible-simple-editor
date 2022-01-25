// Get every strongs number from the verse.
// Accept an array of word components.
// Return them as an array of strings.
export function getStrongs(arrayOfWordComponents: Array<Array<string>>) {
  let arrayOfStrongs = [] as Array<string>;

  for (let i = 0; arrayOfWordComponents.length > i; i++) {
    arrayOfStrongs.push(arrayOfWordComponents[i][2]);
  }

  return arrayOfStrongs as Array<string>;
}
