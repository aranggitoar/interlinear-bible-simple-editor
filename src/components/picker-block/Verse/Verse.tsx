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


import * as React from 'react';

import { getTranslationResult } from '@/utilities/getTranslationResult';
import { storeTranslationResult } from '@/utilities/storeTranslationResult';

type Props = {
  loadedBibleObject: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void
}

const defaultBibleVersePickerText = "Choose verse";

function createVersePicker(verseCount: number, selectedVerseIndex: number) {
  var markup = `<option disabled value="undefined">${defaultBibleVersePickerText}</option>`;
  for (let i = 0; i < verseCount; i++) {
    let selected = ''
    if (selectedVerseIndex === verseCount) {
      selected = 'selected'
    }
    markup += `<option ${selected} value="${i}">${i+1}</option>`
  }
  return markup;
}

const updateTranslation = (bibleObject: Object, chosenBibleBookDetails: Array<string>):void => {
  let newTranslationData = getTranslationResult(document.getElementsByClassName('row-target-language').length);
  bibleObject = storeTranslationResult(bibleObject, chosenBibleBookDetails, newTranslationData)
}

const updateVerseIndex = (e: React.FormEvent<HTMLSelectElement>, oldBible: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void): void => {
  e.preventDefault();

  // Also update the target language.
  updateTranslation(oldBible.bibleObject, oldBible.chosenBibleBookDetails);

  oldBible.chosenBibleBookDetails[2] = e.currentTarget.value as string;

  const newBible: ILoadedBible = {
    ['bibleObject']: oldBible.bibleObject,
    ['chosenBibleSourceName']: oldBible.chosenBibleSourceName,
    ['chosenBibleBookNames']: oldBible.chosenBibleBookNames,
    ['chosenBibleBookDetails']: oldBible.chosenBibleBookDetails
  }

  updateUploadedBible(newBible)
}

const VersePickerBlock: React.FC<Props> = ({loadedBibleObject, updateUploadedBible}) => {
  const localCopy = loadedBibleObject.bibleObject;
  let verseCount = 0 as number;

  let bibleBookDetails = loadedBibleObject.chosenBibleBookDetails
  let selectedBibleBookName = bibleBookDetails[0];
  let selectedChapterIndex = bibleBookDetails[1];
  // Converts string type into unknown, then into number.
  let selectedVerseIndex = bibleBookDetails[2] as unknown as number;

  if (localCopy[selectedBibleBookName] !== undefined) {
    verseCount = localCopy[selectedBibleBookName][selectedChapterIndex].length;
  }

  let markup = createVersePicker(verseCount, selectedVerseIndex);

  return (
    <select id="verse-picker" className="picker-items" name="verse-picker"
      defaultValue="undefined"
      onChange={(e) => updateVerseIndex(e, loadedBibleObject, updateUploadedBible)}
      dangerouslySetInnerHTML={{__html:markup}}>
    </select>
  );
}

export default VersePickerBlock;
