// Get every strongs number from the verse.
export function getStrongs(arrayOfWordComponents: Array<Array<string>>, arrayOfStrongs: Array<string>) {
  for (let i = 0; arrayOfWordComponents.length > i; i++) {
    arrayOfStrongs.push(arrayOfWordComponents[i][2]);
  }
}
