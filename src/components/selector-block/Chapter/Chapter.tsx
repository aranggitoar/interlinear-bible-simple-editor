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


const defaultBibleChapterSelectorText = "Choose chapter";

function createChapterSelector(amountOfChapters: number,) {
  let jsxMarkup = [<Option disabled value="undefined">{defaultBibleChapterSelectorText}</Option>];

  for (let i = 0; i < amountOfChapters; i++) {
    jsxMarkup.push(<Option value={i}>{i+1}</Option>)
  }
  return jsxMarkup as Array<JSX.Element>;
}

const updateChapterIndex = (e: FormEvent<HTMLSelectElement>, selectedBibleBookName: string, updateDisplayedBibleInfo: (newDisplayedBibleInfo: Array<string>) => void): void => {
  e.preventDefault();
  updateDisplayedBibleInfo([selectedBibleBookName, e.currentTarget.value as string,'0']);
}

export const ChapterSelectorBlock: React.FC<NonBibleBookSelectorProps> = ({loadedBibleObject, displayedBibleInfo, updateDisplayedBibleInfo}) => {
  let amountOfChapters = 0 as number;

  let selectedBibleBookName = displayedBibleInfo[0];

  if (loadedBibleObject[selectedBibleBookName] !== undefined) {
    amountOfChapters = loadedBibleObject[selectedBibleBookName].length;
  }

  return (
    <select id="chapter-picker" className="picker-items" name="chapter-picker"
      value={displayedBibleInfo[1] !== undefined ? displayedBibleInfo[1] : "undefined"}
      onChange={(e) => updateChapterIndex(e, selectedBibleBookName, updateDisplayedBibleInfo)}
    >
      {createChapterSelector(amountOfChapters)}
    </select>
  );
}
