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
import { TextField } from '@fluentui/react';

import { filterDisplayedStrongsData } from '@/utilities/filterDisplayedStrongsData';
import { filterDisplayedOriginalLanguage } from '@/utilities/filterDisplayedOriginalLanguage';
import { filterDisplayedMorphologicalData } from '@/utilities/filterDisplayedMorphologicalData';
import { getStrongsDictionaryEntry } from '@/utilities/getStrongsDictionaryEntry';


// Generate the row containers.
// Return an array of JSX Elements.
function rowContainerGenerator(sourceData: ILoadedVerse, index: number) {
  // Prepare markup.
  let jsxMarkup = [] as Array<JSX.Element>;

  // Prepare translation index identification.
  let targetLanguageID = 'target-language-' + index as unknown as string;

  // Add word index in the verse array.
  if (sourceData.chosenBibleBookDetails.length < 4) {
    sourceData.chosenBibleBookDetails.push(index as unknown as string);
  } else {
    sourceData.chosenBibleBookDetails[3] = index as unknown as string;
  }

  // Insert the about to be created dialog box upstairs in the next markup
  jsxMarkup.push(
    <div key={`${index}1`} className="row-strongs row-container"
    /*onClick={}*/
    data-strongs-entry={getStrongsDictionaryEntry(sourceData.arrayOfStrongs[index])}>
      {filterDisplayedStrongsData(sourceData.arrayOfStrongs[index])}
    </div>
  );

  jsxMarkup.push(
    <div key={`${index}2`} className="row-original-language row-container">
      {filterDisplayedOriginalLanguage(sourceData.arrayOfOriginalWords[index])}
    </div>
  );

  jsxMarkup.push(
    <div key={`${index}3`} className="row-target-language row-container">
      <TextField id={targetLanguageID} value={sourceData.arrayOfTargetWords[index]} />
    </div>
  );

  jsxMarkup.push(
    <div key={`${index}4`} className="row-morphology row-container">
      {filterDisplayedMorphologicalData(sourceData.arrayOfMorphologies[index])}
    </div>
  );

  return jsxMarkup as Array<JSX.Element>;
}

// Display translation block's row container.
const TranslationBlockRowContainer: React.FC<VerseDataProps> = ({loadedBibleVerse, verseIndex}) => {
  return (
    <>
      {rowContainerGenerator(loadedBibleVerse, verseIndex)}
    </>
  );
}

export default TranslationBlockRowContainer;
