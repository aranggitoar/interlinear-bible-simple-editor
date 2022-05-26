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


import { getTargetWords } from './getTargetWords';
import { getOriginalWords } from './getOriginalWords';
import { getStrongs } from './getStrongs';
import { getMorphologies } from './getMorphologies';


// Accepts the local component copy of the Bible object,
// outputs the formatted chosen word.
export function assembleBibleDataByWord(bibleObject: Object, bibleInfo: Array<string>) {
  // Prepare the necessary variables.
  let chosenBibleBookName = bibleInfo[0] as string,
      chosenChapterIndex = bibleInfo[1] as string,
      chosenVerseIndex = bibleInfo[2] as string,
      chosenWordIndex = bibleInfo[3] as unknown as number,
      arrayOfVerseContents = [] as Array<Array<string>>;

  // Prepare the displayed Bible.
  // Currently only verse by verse.
  if (bibleObject[chosenBibleBookName] !== undefined) {
    // Store the verse contents.
    arrayOfVerseContents = bibleObject[chosenBibleBookName][chosenChapterIndex][chosenVerseIndex] as Array<Array<string>>;
  }

  const targetWord = getTargetWords(arrayOfVerseContents)[chosenWordIndex],
    originalWord = getOriginalWords(arrayOfVerseContents)[chosenWordIndex],
    strongs = getStrongs(arrayOfVerseContents)[chosenWordIndex],
    morphology = getMorphologies(arrayOfVerseContents)[chosenWordIndex];

  // Return the source data
  return {
    targetWord: targetWord,
    originalWord: originalWord,
    strongs: strongs,
    morphology: morphology
  } as ILoadedWord;
}

