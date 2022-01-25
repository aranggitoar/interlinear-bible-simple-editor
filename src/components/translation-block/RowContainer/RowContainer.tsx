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
