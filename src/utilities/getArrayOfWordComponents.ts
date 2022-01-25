// Get the whole verse.
// Accept an empty nested array of strings,
// and a stringified array from the Bible object state.
// Return them as a nested arrays of strings.
export function getArrayOfWordComponents(chosenVerseContent: Array<string>) {
  const arrayOfVerseComponents = chosenVerseContent;
  let arrayOfWordComponents = [] as Array<Array<string>>;

  for (let i = 0; arrayOfVerseComponents.length > i; i += 4) {
    if (i > 4) {
      i + 1
    }

    let temp = [
      arrayOfVerseComponents[i],
      arrayOfVerseComponents[i+1],
      arrayOfVerseComponents[i+2],
      arrayOfVerseComponents[i+3],
    ] as Array<string>;

    arrayOfWordComponents.push(temp);
  }

  return arrayOfWordComponents as Array<Array<string>>;
}
