// Store the translation result into the Bible object.
export function storeTranslationResult(bibleObject: Object, arrayOfIndex: Array<string>, arrayOfResult: Array<string>) {
  let currentBibleBookName = arrayOfIndex[0],
      currentChapterIndex = arrayOfIndex[1],
      currentVerseIndex = arrayOfIndex[2],
      currentVerseArray = bibleObject[currentBibleBookName][currentChapterIndex][currentVerseIndex];

  for (let i = 0; currentVerseArray.length > i; i++) {
    currentVerseArray[i][0] = arrayOfResult[i];
  }

  bibleObject[currentBibleBookName][currentChapterIndex][currentVerseIndex] = currentVerseArray;

  return bibleObject;
}
