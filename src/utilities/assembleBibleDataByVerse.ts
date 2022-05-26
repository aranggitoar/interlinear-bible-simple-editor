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


import { getArrayOfWordComponents } from './getArrayOfWordComponents';
import { getTargetWords } from './getTargetWords';
import { getOriginalWords } from './getOriginalWords';
import { getStrongs } from './getStrongs';
import { getMorphologies } from './getMorphologies';


// Accepts the local component copy of the Bible object,
// outputs the formatted chosen verse.
export function assembleBibleDataByVerse(bibleObject: Object, bibleInfo: Array<string>) {
  // Prepare the necessary variables.
  let chosenBibleBookName = bibleInfo[0] as string,
      chosenBibleBookContents = [] as Array<Array<Array<string>>>,
      chosenChapterIndex = bibleInfo[1] as string,
      chosenChapterContents = [] as Array<Array<string>>,
      chosenVerseIndex = bibleInfo[2] as string,
      arrayOfChosenVerseContents = [] as Array<string>,
      stringOfChosenVerseContents = '' as string,
      arrayOfWordComponents = [] as Array<Array<string>>;

  // Prepare the displayed Bible.
  // Currently only verse by verse.
  if (bibleObject[chosenBibleBookName] !== undefined) {
    // Store the book contents.
    chosenBibleBookContents = bibleObject[chosenBibleBookName];

    // Store the chapter contents.
    chosenChapterContents = chosenBibleBookContents[chosenChapterIndex];
    arrayOfChosenVerseContents = chosenChapterContents[chosenVerseIndex] as Array<string>;

    // Store the verse contents.
    stringOfChosenVerseContents = arrayOfChosenVerseContents.toString() as string;
    arrayOfChosenVerseContents = stringOfChosenVerseContents.split(',');

    // Get parts of the verse.
    arrayOfWordComponents = getArrayOfWordComponents(arrayOfChosenVerseContents);
  }

  // Return the source data
  return {
    arrayOfTargetWords: getTargetWords(arrayOfWordComponents),
    arrayOfOriginalWords: getOriginalWords(arrayOfWordComponents),
    arrayOfStrongs: getStrongs(arrayOfWordComponents),
    arrayOfMorphologies: getMorphologies(arrayOfWordComponents)
  } as ILoadedVerse;
}

