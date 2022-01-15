// Get every morphology data from the verse.
export function getMorphologies(arrayOfWordComponents: Array<Array<string>>, arrayOfMorphologies: Array<string>) {
  for (let i = 0; arrayOfWordComponents.length > i; i++) {
    arrayOfMorphologies.push(arrayOfWordComponents[i][3]);
  }
}
