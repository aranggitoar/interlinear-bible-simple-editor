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

/*

Interlinear Bible Simple Editor is a multiplatform interlinear bible translation software.
Copyright (C) 2022  Aranggi J. Toar

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; only version 2 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA. 

*/
