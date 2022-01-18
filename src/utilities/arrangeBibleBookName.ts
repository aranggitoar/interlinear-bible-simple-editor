import { arrayOfCorrectlyOrderedOTBibleBookName } from './correctlyOrderedBibleBookName'

// Arrange the array of Bible book names.
export function arrangeBibleBookName(arrayOfBibleBookNames: Array<string>) {
  let orderedArrayOfBibleBookNames = [] as Array<string>;

  for (let i = 0; arrayOfCorrectlyOrderedOTBibleBookName.length > i; i++) {
    if (arrayOfBibleBookNames.find(name => name.match(arrayOfCorrectlyOrderedOTBibleBookName[i])) !== undefined) {
      orderedArrayOfBibleBookNames.push(arrayOfCorrectlyOrderedOTBibleBookName[i]);
    }
  }

  return orderedArrayOfBibleBookNames;
}
