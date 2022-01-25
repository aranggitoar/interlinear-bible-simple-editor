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
import { DefaultButton } from '@fluentui/react';

import { getTranslationResult } from '@/utilities/getTranslationResult';
import { storeTranslationResult } from '@/utilities/storeTranslationResult';

type Props = {
  loadedBibleObject: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void
}

const updateTranslation = (bibleObject: Object, chosenBibleBookDetails: Array<string>):void => {
  let newTranslationData = getTranslationResult(document.getElementsByClassName('row-target-language').length);
  bibleObject = storeTranslationResult(bibleObject, chosenBibleBookDetails, newTranslationData)
}

// @ts-ignore // the type exists
const updateVerseIndex = (e: React.MouseEvent<Button>, oldBible: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void): void => {
  e.preventDefault();

  const bibleBookName = oldBible.chosenBibleBookDetails[0];
  const chapterIndex = oldBible.chosenBibleBookDetails[1];

  let oldValue = oldBible.chosenBibleBookDetails[2] as unknown;
  // There is a bug.
  // The oldValue is less 2 numbers than it should be when going forward,
  // but the exact value displayed when going backward.
  // Reducing the maxValue by 2 is a temporary fix,
  // as it will be always less 2 numbers than it should be when going forward.
  let maxValue = oldBible.bibleObject[bibleBookName][chapterIndex].length - 2;
  let tempValue = oldValue as number;
  let newValue: unknown;

  // Also update the target language.
  updateTranslation(oldBible.bibleObject, oldBible.chosenBibleBookDetails);

  if (e.currentTarget.id === "forward" && tempValue < maxValue) {
    tempValue++;
  } else if (e.currentTarget.id === "backward" && tempValue > 0) {
    tempValue--;
  }

  newValue = tempValue as unknown;

  oldBible.chosenBibleBookDetails[2] = newValue as string;

  const newBible: ILoadedBible = {
    ['bibleObject']: oldBible.bibleObject,
    ['chosenBibleSourceName']: oldBible.chosenBibleSourceName,
    ['chosenBibleBookNames']: oldBible.chosenBibleBookNames,
    ['chosenBibleBookDetails']: oldBible.chosenBibleBookDetails
  }

  // Change the current picker value.
  // @ts-ignore // the property exists
  document.getElementById('verse-picker').value = oldBible.chosenBibleBookDetails[2];

  updateUploadedBible(newBible)
}

export const MoveBackwardByOne: React.FC<Props> = ({loadedBibleObject, updateUploadedBible}) => {
  return (
    <DefaultButton id="backward" className="move-by-one"
      onClick={(e) => updateVerseIndex(e, loadedBibleObject, updateUploadedBible)}>
      &#8249;
    </DefaultButton>
  );
}

export const MoveForwardByOne: React.FC<Props> = ({loadedBibleObject, updateUploadedBible}) => {
  return (
    <DefaultButton id="forward" className="move-by-one"
      onClick={(e) => updateVerseIndex(e, loadedBibleObject, updateUploadedBible)}>
      &#8250;
    </DefaultButton>
  );
}
