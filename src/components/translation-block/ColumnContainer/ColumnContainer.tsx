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
import { FC } from 'react';

import { TranslationBlockRowContainer } from '@/components/translation-block/RowContainer/RowContainer';

import { arrayOfCorrectlyOrderedNTBibleBookName, arrayOfCorrectlyOrderedOTBibleBookName } from '@/utilities/correctlyOrderedBibleBookName';
import { Container, ColumnContainer } from './styles';


// Generate the column containers.
// Return an array of JSX Elements.
function columnContainerGenerator(loadedBibleObject: Object, displayedBibleInfo: Array<string>, updateUploadedBibleObject: (uploadedBibleObject: Object) => void, wordCount: number) {
  let jsxMarkup = [] as Array<JSX.Element>;

  for (let i = 0; i < wordCount; i++) {
    let columnId = "column-" + i as string;
    // Key attribute is a necessary internal component for React to not output warnings.
    // It is implicitly defined but it's defined explicitly here to be safe.
    // References:
    // https://reactjs.org/docs/lists-and-keys.html#keys
    // https://reactjs.org/docs/reconciliation.html#recursing-on-children
    jsxMarkup.push(
      <div key={i} id={columnId}>
        {<TranslationBlockRowContainer
          loadedBibleObject={loadedBibleObject}
          displayedBibleInfo={displayedBibleInfo}
          updateUploadedBibleObject={updateUploadedBibleObject}
          wordIndex={i}
        />}
      </div>
    );
  }

  return jsxMarkup as Array<JSX.Element>;
}

// Interpret the verse direction.
// Return a string of the direction.
function verseDirection(currentBook: string) {
  if (arrayOfCorrectlyOrderedOTBibleBookName.indexOf(currentBook) > -1) return "rtl";
  else if (arrayOfCorrectlyOrderedNTBibleBookName.indexOf(currentBook) > -1) return "ltr";
}

// Display translation block's column container.
export const TranslationBlockColumnContainer: FC<TranslationColumnProps> = ({loadedBibleObject, displayedBibleInfo, updateUploadedBibleObject}) => {
  let currentBook = displayedBibleInfo[0] as string,
    wordCount: number;
  if (loadedBibleObject[displayedBibleInfo[0]] !== undefined) {
    wordCount = loadedBibleObject[displayedBibleInfo[0]][displayedBibleInfo[1]][displayedBibleInfo[2]].length as number;
  }

  return (
    <Container>
      <ColumnContainer className={verseDirection(currentBook)}>
        {columnContainerGenerator(loadedBibleObject, displayedBibleInfo, updateUploadedBibleObject, wordCount)}
      </ColumnContainer>
    </Container>
  );
}
