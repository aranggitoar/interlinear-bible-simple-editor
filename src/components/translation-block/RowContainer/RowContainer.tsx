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
import { useState, FC, FormEvent } from 'react';

import { filterDisplayedStrongsData } from '@/utilities/filterDisplayedStrongsData';
import { filterDisplayedOriginalLanguage } from '@/utilities/filterDisplayedOriginalLanguage';
import { filterDisplayedMorphologicalData } from '@/utilities/filterDisplayedMorphologicalData';
import { getStrongsDictionaryEntry } from '@/utilities/getStrongsDictionaryEntry';
import { getTranslationResult } from '@/utilities/getTranslationResult';
import { storeTranslationResult } from '@/utilities/storeTranslationResult';
import { assembleBibleDataByVerse } from '@/utilities/assembleBibleDataByVerse';

import { Container, RowContainer, TranslationInputField } from './style';


const updateWordTranslation = (
  e: FormEvent<HTMLTextAreaElement | HTMLInputElement>,
  loadedBibleObject: Object, displayedBibleInfo: Array<string>,
  updateUploadedBibleObject: (uploadedBibleObject: Object) => void,
  updateTranslationData: (newTranslationData: Array<string>) => void,
  wordIndex: number
): void => {
  e.preventDefault();
  let newTranslation = getTranslationResult();
  // @ts-ignore // property exists
  newTranslation[wordIndex] = e.target.value;
  updateTranslationData(newTranslation);
  updateUploadedBibleObject(storeTranslationResult(loadedBibleObject, displayedBibleInfo, newTranslation));
}

// Generate the row containers.
// Return an array of JSX Elements.
const rowContainerGenerator = (
  loadedBibleObject: Object, displayedBibleInfo: Array<string>,
  updateUploadedBibleObject: (uploadedBibleObject: Object) => void,
  wordIndex: number
): Array<JSX.Element> => {
  let verseData = assembleBibleDataByVerse(loadedBibleObject, displayedBibleInfo) as ILoadedVerse,
      index = wordIndex;

  const [translationData, setTranslationData] = useState<Array<string>>([]);

  const updateTranslationData = (newTranslationData: Array<string>) => {
    setTranslationData(newTranslationData);
  }

  // Prepare markup.
  let jsxMarkup = [] as Array<JSX.Element>;

  // Prepare translation index identification.
  let targetLanguageID = 'target-language-' + index as unknown as string;

  // Insert the about to be created dialog box upstairs in the next markup
  jsxMarkup.push(
    <RowContainer key={`${index}1`} className="row-strongs"
    data-strongs-entry={getStrongsDictionaryEntry(verseData.arrayOfStrongs[index])}>
      {filterDisplayedStrongsData(verseData.arrayOfStrongs[index])}
    </RowContainer>
  );

  jsxMarkup.push(
    <RowContainer key={`${index}2`} className="row-original-language">
      {filterDisplayedOriginalLanguage(verseData.arrayOfOriginalWords[index])}
    </RowContainer>
  );

  jsxMarkup.push(
    <RowContainer key={`${index}3`} className="row-target-language">
      <TranslationInputField id={targetLanguageID} value={verseData.arrayOfTargetWords[index]} 
        onChange={(e) => updateWordTranslation(e, loadedBibleObject, displayedBibleInfo, updateUploadedBibleObject, updateTranslationData, index)}
      />
    </RowContainer>
  );

  jsxMarkup.push(
    <RowContainer key={`${index}4`} className="row-morphology">
      {filterDisplayedMorphologicalData(verseData.arrayOfMorphologies[index])}
    </RowContainer>
  );

  return jsxMarkup as Array<JSX.Element>;
}

// Display translation block's row container.
export const TranslationBlockRowContainer: FC<TranslationRowProps> = ({
  loadedBibleObject, displayedBibleInfo, updateUploadedBibleObject, wordIndex
}) => {
  return (
    <Container>
      {rowContainerGenerator(loadedBibleObject, displayedBibleInfo, updateUploadedBibleObject, wordIndex)}
    </Container>
  );
}
