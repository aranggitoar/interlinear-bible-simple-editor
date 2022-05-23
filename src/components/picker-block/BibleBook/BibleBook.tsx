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

const defaultBibleBookPickerText = "Choose bible book";


function createBibleBookPicker(bibleBookNameList: Array<string>, selectedBibleBookName: string) {
  var markup = `<option disabled value="undefined">${defaultBibleBookPickerText}</option>`;
  for (let i = 0; i < bibleBookNameList.length; i++) {
    let selected = ''
    if (selectedBibleBookName === bibleBookNameList[i]) {
      selected = 'selected'
    }
    markup += `<option ${selected} value="${bibleBookNameList[i]}">${bibleBookNameList[i]}</option>`
  }
  return markup;
}

const updateTranslation = (bibleObject: Object, chosenBibleBookDetails: Array<string>):void => {
  let newTranslationData = getTranslationResult(document.getElementsByClassName('row-target-language').length);
  bibleObject = storeTranslationResult(bibleObject, chosenBibleBookDetails, newTranslationData)
}

const updateBibleBookName = (e: React.FormEvent<HTMLSelectElement>, oldBible: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void): void => {
  e.preventDefault();

  // Also update the target language.
  updateTranslation(oldBible.bibleObject, oldBible.chosenBibleBookDetails);

  oldBible.chosenBibleBookDetails[0] = e.currentTarget.value;
  oldBible.chosenBibleBookDetails[1] = '0';
  oldBible.chosenBibleBookDetails[2] = '0';

  const newBible: ILoadedBible = {
    ['bibleObject']: oldBible.bibleObject,
    ['chosenBibleSourceName']: oldBible.chosenBibleSourceName,
    ['chosenBibleBookNames']: oldBible.chosenBibleBookNames,
    ['chosenBibleBookDetails']: oldBible.chosenBibleBookDetails
  }

  updateUploadedBible(newBible)
}

const BibleBookPickerBlock: React.FC<Props> = ({loadedBibleObject, updateUploadedBible}) => {
  let bibleBookNameList = loadedBibleObject.chosenBibleBookNames;
  let selectedBibleBookName = loadedBibleObject.chosenBibleBookDetails[0];

  return (
    <select id="bible-book-picker" className="picker-items"
      name="bible-book-picker" defaultValue="undefined"
      onChange={(e) => updateBibleBookName(e, loadedBibleObject, updateUploadedBible)}
      dangerouslySetInnerHTML={{__html:
      createBibleBookPicker(bibleBookNameList, selectedBibleBookName) }} >
    </select>
  );
}

export default BibleBookPickerBlock;
