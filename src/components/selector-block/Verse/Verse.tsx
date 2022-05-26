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
import { useState, FormEvent } from 'react';

import { Option } from '../styles';


const defaultBibleVerseSelectorText = "Choose verse";

function createVerseSelector(amountOfVerses: number) {
  let jsxMarkup = [<Option disabled value="undefined">{defaultBibleVerseSelectorText}</Option>];

  for (let i = 0; i < amountOfVerses; i++) {
    jsxMarkup.push(<Option value={i}>{i+1}</Option>)
  }
  return jsxMarkup as Array<JSX.Element>;
}

const updateVerseIndex = (e: FormEvent<HTMLSelectElement>, selectedBibleBookName: string, selectedChapterIndex: string, updateDisplayedBibleInfo: (newDisplayedBibleInfo: Array<string>) => void): void => {
  updateDisplayedBibleInfo([selectedBibleBookName, selectedChapterIndex, e.currentTarget.value as string]);
}

export const VerseSelectorBlock: React.FC<NonBibleBookSelectorProps> = ({loadedBibleObject, displayedBibleInfo, updateDisplayedBibleInfo}) => {
  let amountOfVerses = 0 as number;

  let selectedBibleBookName = displayedBibleInfo[0];
  let selectedChapterIndex = displayedBibleInfo[1];

  if (loadedBibleObject[selectedBibleBookName] !== undefined) {
    amountOfVerses = loadedBibleObject[selectedBibleBookName][selectedChapterIndex].length;
  }

  return (
    <select id="verse-picker" className="picker-items" name="verse-picker"
      value={displayedBibleInfo[2] !== undefined ? displayedBibleInfo[2] : "undefined"}
      onChange={(e) => updateVerseIndex(e, selectedBibleBookName, selectedChapterIndex, updateDisplayedBibleInfo)}
    >
      {createVerseSelector(amountOfVerses)}
    </select>
  );
}
