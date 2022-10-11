// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { BibleDataObjectType } from 'types/BibleData';

// Populate source file with empty arrays.
export const populateWithEmptyTargetLanguage = (
  bibleObject: BibleDataObjectType
): BibleDataObjectType => {
  const bibleBookCount = Object.keys(bibleObject).length;
  const copyOfBibleObject = { ...bibleObject } as BibleDataObjectType;

  // Loop every book.
  for (let i = 0; bibleBookCount > i; i++) {
    const currentBibleBookName = Object.keys(bibleObject)[i];
    const currentBibleBookArray = bibleObject[currentBibleBookName];

    // Loop every chapter.
    for (let n = 0; currentBibleBookArray.length > n; n++) {
      const currentChapterArray = currentBibleBookArray[n];

      // Loop every verse.
      for (let d = 0; currentChapterArray.length > d; d++) {
        const currentVerseArray = currentChapterArray[d];

        // Insert empty string to every word inside a verse.
        for (let e = 0; currentVerseArray.length > e; e++) {
          currentVerseArray[e].unshift('');
        }

        currentChapterArray[d] = currentVerseArray;
      }

      currentBibleBookArray[n] = currentChapterArray;
    }

    copyOfBibleObject[currentBibleBookName] = currentBibleBookArray;
  }

  return copyOfBibleObject;
};
