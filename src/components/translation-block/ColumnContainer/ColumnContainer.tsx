import * as React from 'react';
import styled from 'styled-components';

import TranslationBlockRowContainer from '@/components/translation-block/RowContainer/RowContainer';

import { assembleBibleDataByVerse } from '@/utilities/assembleBibleDataByVerse';
import { arrayOfCorrectlyOrderedNTBibleBookName, arrayOfCorrectlyOrderedOTBibleBookName } from '@/utilities/correctlyOrderedBibleBookName';


const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

// Generate the column containers.
// Return an array of JSX Elements.
function columnContainerGenerator(sourceData: ILoadedVerse, count: number) {
  let jsxMarkup = [] as Array<JSX.Element>;

  for (let i = 0; i < count; i++) {
    let columnId = "column-" + i as string;
    // Key attribute is a necessary internal component for React to not output warnings.
    // It is implicitly defined but it's defined explicitly here to be safe.
    // References:
    // https://reactjs.org/docs/lists-and-keys.html#keys
    // https://reactjs.org/docs/reconciliation.html#recursing-on-children
    jsxMarkup.push(
      <div key={i} id={columnId}>
        {<TranslationBlockRowContainer loadedBibleVerse={sourceData}verseIndex={i} />}
      </div>
    );
  }

  return jsxMarkup as Array<JSX.Element>;
}

// Interpret the verse direction.
// Return a string of the direction.
function verseDirection(currentBook: string) {
  if (arrayOfCorrectlyOrderedOTBibleBookName.indexOf(currentBook) > -1) {
    return "rtl";
  } 

  if (arrayOfCorrectlyOrderedNTBibleBookName.indexOf(currentBook) > -1) {
    return "ltr";
  }
}

// Display translation block's column container.
const TranslationBlockColumnContainer: React.FC<Props> = ({loadedBibleObject}) => {
  let verseData = assembleBibleDataByVerse(loadedBibleObject) as ILoadedVerse,
      verseLength = verseData.arrayOfTargetWords.length as number,
      currentBook = loadedBibleObject.chosenBibleBookDetails[0] as string;

  return (
    <Container>
      <div id="column-container" className={verseDirection(currentBook)}>
        {columnContainerGenerator(verseData, verseLength)}
      </div>
    </Container>
  );
}

export default TranslationBlockColumnContainer;
