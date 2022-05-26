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
import { assembleBibleDataByWord } from '@/utilities/assembleBibleDataByWord';

import { Container, RowContainer, TranslationInputField } from './style';


const updateWordTranslation = (
  e: FormEvent<HTMLTextAreaElement | HTMLInputElement>,
  loadedBibleObject: Object, displayedBibleInfo: Array<string>,
  updateUploadedBibleObject: (uploadedBibleObject: Object) => void,
  setTranslatedWord: (newTranslatedWord: string) => void,
  translatedWordIndex: number
): void => {
  e.preventDefault();

  // Copy the currently displayed Bible information
  const [ displayedBibleBookName, displayedBibleChapterIndex,
        displayedBibleVerseIndex ] = displayedBibleInfo,
    // @ts-ignore // property exists
    newTranslatedWord = e.target.value;

  // Update the translated word state
  setTranslatedWord(newTranslatedWord);

  // Update the global Bible object
  updateUploadedBibleObject({
    ...loadedBibleObject,
    displayedBibleBookName: [
      ...loadedBibleObject
        [displayedBibleBookName]
        [displayedBibleChapterIndex]
        [displayedBibleVerseIndex]
        [translatedWordIndex]
        .splice(0, 1, newTranslatedWord)
    ]
  });
}

// Generate the row containers.
// Return an array of JSX Elements.
const rowContainerGenerator = (
  loadedBibleObject: Object, displayedBibleInfo: Array<string>,
  updateUploadedBibleObject: (uploadedBibleObject: Object) => void,
  wordIndex: number
): Array<JSX.Element> => {

  // Get every component of the current word.
  const { targetWord, originalWord, strongs, morphology } =
    assembleBibleDataByWord(loadedBibleObject, [...displayedBibleInfo,
    wordIndex as unknown as string]) as ILoadedWord,

  // Prepare a local state for the currently displayed target word.
    [translatedWord, setTranslatedWord] = useState<string>(""),

  // Prepare translation index identification.
    targetLanguageID = 'target-language-' + wordIndex as unknown as string,

  // Prepare the variables to be consumed.
    containerVariables = [
      ["1" + wordIndex, "row-strongs", filterDisplayedStrongsData(strongs)],
      ["2" + wordIndex, "row-original-language", filterDisplayedOriginalLanguage(originalWord)],
      ["3" + wordIndex, "row-target-language", <TranslationInputField
        id={targetLanguageID} value={targetWord} onChange={(e) =>
        updateWordTranslation(e, loadedBibleObject,
        displayedBibleInfo, updateUploadedBibleObject,
        setTranslatedWord, wordIndex)}/>],
      ["4" + wordIndex, "row-morphology", filterDisplayedMorphologicalData(morphology)]
    ]

  // Iterate the variables to be consumed into a container.
  return containerVariables.map((containerVariable) => {
    return (
      <RowContainer key={containerVariable[0] as unknown as string}
        className={containerVariable[1] as unknown as string}>
        {containerVariable[2]}
      </RowContainer>
    )
  });
}

// Display translation block's row container.
export const TranslationBlockRowContainer: FC<TranslationRowProps> = ({
  loadedBibleObject, displayedBibleInfo, updateUploadedBibleObject, wordIndex
}) => {
  return (
    <Container>
      {rowContainerGenerator(loadedBibleObject, displayedBibleInfo,
        updateUploadedBibleObject, wordIndex)}
    </Container>
  );
}
