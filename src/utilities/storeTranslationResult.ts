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
