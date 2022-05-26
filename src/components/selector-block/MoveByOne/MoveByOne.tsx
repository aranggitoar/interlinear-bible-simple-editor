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


import React from 'react';
import { MouseEvent } from 'react';
import { DefaultButton } from '@fluentui/react';



// @ts-ignore // the type exists
const updateVerseIndex = (e: MouseEvent<Button>, loadedBibleObject: Object, displayedBibleInfo: Array<string>, updateDisplayedBibleInfo: (newDisplayedBibleInfo: Array<string>) => void) : void => {
  e.preventDefault();

  const bibleBookName = displayedBibleInfo[0];
  const chapterIndex = displayedBibleInfo[1];

  let oldVerseIndex = displayedBibleInfo[2] as unknown;
  // There is a bug.
  // The oldValue is less 2 numbers than it should be when going forward,
  // but the exact value displayed when going backward.
  // Reducing the maxValue by 2 is a temporary fix,
  // as it will be always less 2 numbers than it should be when going forward.
  let maxVerseIndex = loadedBibleObject[bibleBookName][chapterIndex].length - 2;
  let newVerseIndex = oldVerseIndex as number;

  if (e.currentTarget.id === "forward" && oldVerseIndex < maxVerseIndex) {
    newVerseIndex++;
  } else if (e.currentTarget.id === "backward" && oldVerseIndex > 0) {
    newVerseIndex--;
  }

  const newDisplayedBibleInfo = [bibleBookName, chapterIndex, newVerseIndex as unknown as string];

  // Change the current picker value.
  // @ts-ignore // the property exists
  document.getElementById('verse-picker').value = newDisplayedBibleInfo[2];

  updateDisplayedBibleInfo(newDisplayedBibleInfo);
}

export const MoveBackwardByOne: React.FC<NonBibleBookSelectorProps> = ({loadedBibleObject, displayedBibleInfo, updateDisplayedBibleInfo}) => {
  return (
    <DefaultButton id="backward" className="move-by-one"
      onClick={(e) => updateVerseIndex(e, loadedBibleObject, displayedBibleInfo, updateDisplayedBibleInfo)}>
      &#8249;
    </DefaultButton>
  );
}

export const MoveForwardByOne: React.FC<NonBibleBookSelectorProps> = ({loadedBibleObject, displayedBibleInfo, updateDisplayedBibleInfo}) => {
  return (
    <DefaultButton id="forward" className="move-by-one"
      onClick={(e) => updateVerseIndex(e, loadedBibleObject, displayedBibleInfo, updateDisplayedBibleInfo)}>
      &#8250;
    </DefaultButton>
  );
}
