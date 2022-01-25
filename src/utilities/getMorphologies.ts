// Get every morphology data from the verse.
// Accept an array of word components.
// Return them as an array of strings.
export function getMorphologies(arrayOfWordComponents: Array<Array<string>>) {
  let arrayOfMorphologies = [] as Array<string>;

  for (let i = 0; arrayOfWordComponents.length > i; i++) {
    arrayOfMorphologies.push(arrayOfWordComponents[i][3]);
  }

  return arrayOfMorphologies as Array<string>;
}
