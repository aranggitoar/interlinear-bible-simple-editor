// Populate source file with empty arrays.
export function populateWithEmptyTargetLanguage(bibleObject: Object) {
  let bibleBookCount = Object.keys(bibleObject).length;
  let localCopy = bibleObject as Object;

  // Loop every book.
  for (let i = 0; bibleBookCount > i; i++) {
    let currentBibleBookName = Object.keys(bibleObject)[i];
    let currentBibleBookArray = localCopy[currentBibleBookName];

    // Loop every chapter.
    for (let i = 0; currentBibleBookArray.length > i; i++) {
      let currentChapterArray = currentBibleBookArray[i];

      // Loop every verse.
      for (let i = 0; currentChapterArray.length > i; i++) {
        let currentVerseArray = currentChapterArray[i];

        // Insert empty string to every word inside a verse.
        for (let i = 0; currentVerseArray.length > i; i++) {
          currentVerseArray[i].unshift('');
        }

        currentChapterArray[i] = currentVerseArray;
      }

      currentBibleBookArray[i] = currentChapterArray;
    }

    localCopy[currentBibleBookName] = currentBibleBookArray;
  }

  return localCopy;
}
