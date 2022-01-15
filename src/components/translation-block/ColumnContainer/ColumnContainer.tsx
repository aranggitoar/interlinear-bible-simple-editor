import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { TextField } from '@fluentui/react';

import { getArrayOfWordComponents } from '@/utilities/getArrayOfWordComponents';
import { getTargetWords } from '@/utilities/getTargetWords';
import { getOriginalWords } from '@/utilities/getOriginalWords';
import { getStrongs } from '@/utilities/getStrongs';
import { getMorphologies } from '@/utilities/getMorphologies';

import { filterDisplayedStrongsData } from '@/utilities/filterDisplayedStrongsData';
import { filterDisplayedOriginalLanguage } from '@/utilities/filterDisplayedOriginalLanguage';
import { filterDisplayedMorphologicalData } from '@/utilities/filterDisplayedMorphologicalData';

type Props = {
  loadedBibleObject: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void
}

function rowContentsGenerator(sourceData: Array<Array<string>>, index: number) {
  // Prepare markup.
  let markup = '';
  // Prepare translation index identification.
  let targetLanguageID = 'target-language-' + index as unknown as string;
  // Add word index in the verse array.
  if (sourceData[4].length < 4) {
    sourceData[4].push(index as unknown as string);
  } else {
    sourceData[4][3] = index as unknown as string;
  }

  markup = '<div class="row-strongs row-container">' + filterDisplayedStrongsData(sourceData[2][index]) + '</div>';

  markup += '<div class="row-original-language row-container">' + filterDisplayedOriginalLanguage(sourceData[1][index]) + '</div>'

  markup += '<div class="row-target-language row-container">' +
    ReactDOMServer.renderToStaticMarkup(
      <TextField id={targetLanguageID} value={sourceData[0][index]} />
    ) + '</div>';

  markup += '<div class="row-morphology row-container">' + filterDisplayedMorphologicalData(sourceData[3][index]) + '</div>'

  return markup;
}

function columnContainerGenerator(sourceData: Array<Array<string>>, count: number) {
  let markup = '';
  // In reverse because it is only for translation Old Testament for now.
  for (let i = count - 1; i >= 0; i--) {
    let columnId = "column-" + i as string;
    markup += `<div id=${columnId}>${rowContentsGenerator(sourceData, i)}</div>`
  }
  return markup;
}

function dataAssembler(bibleObjectCopy: ILoadedBible, updateUploadedBible: (newlyLoadedBibleObject:ILoadedBible) => void) {
  // Prepare empty variables.
  let bibleObject = {} as Object,
      chosenBibleBookDetails = [] as Array<string>,

      chosenBibleBookName = '' as string,
      chosenBibleBookContents = [] as Array<Array<Array<string>>>,
      chosenChapterIndex = '' as string,
      chosenChapterContents = [] as Array<Array<string>>,
      chosenVerseIndex = '' as string,
      arrayOfChosenVerseContents = [] as Array<string>,
      stringOfChosenVerseContents = '' as string,

      arrayOfSourceData = [] as Array<Array<string>>,
      arrayOfWordComponents = [] as Array<Array<string>>,
      arrayOfTargetWords = [] as Array<string>,
      arrayOfOriginalWords = [] as Array<string>,
      arrayOfStrongs = [] as Array<string>,
      arrayOfMorphologies = [] as Array<string>;

  // Prepare the Bible object.
  bibleObject = bibleObjectCopy.bibleObject,
  chosenBibleBookDetails = bibleObjectCopy.chosenBibleBookDetails,
  chosenBibleBookName = chosenBibleBookDetails[0],
  chosenChapterIndex = chosenBibleBookDetails[1],
  chosenVerseIndex = chosenBibleBookDetails[2];

  // Prepare the displayed Bible. Currently only verse by verse.
  // First index is the Bible book name, the second is chapter index and third
  // verse index.
  if (bibleObject[chosenBibleBookName] !== undefined) {
    chosenBibleBookContents = bibleObject[chosenBibleBookName];
    chosenChapterContents = chosenBibleBookContents[chosenChapterIndex];
    arrayOfChosenVerseContents = chosenChapterContents[chosenVerseIndex];

    stringOfChosenVerseContents = arrayOfChosenVerseContents.toString();
    arrayOfChosenVerseContents = stringOfChosenVerseContents.split(',')


    // Get parts of the loaded Bible object.
    getArrayOfWordComponents(arrayOfWordComponents, arrayOfChosenVerseContents);
    getTargetWords(arrayOfWordComponents, arrayOfTargetWords);
    getOriginalWords(arrayOfWordComponents, arrayOfOriginalWords);
    getStrongs(arrayOfWordComponents, arrayOfStrongs);
    getMorphologies(arrayOfWordComponents, arrayOfMorphologies);

    // Save the source data into an array.
    arrayOfSourceData = [
      arrayOfTargetWords,
      arrayOfOriginalWords,
      arrayOfStrongs,
      arrayOfMorphologies,
      chosenBibleBookDetails
    ]
  }
  
  return columnContainerGenerator(arrayOfSourceData, arrayOfStrongs.length)
}

const TranslationBlockColumnContainer: React.FC<Props> = ({loadedBibleObject, updateUploadedBible}) => {
  return (
    <>
      <div id="column-container" dangerouslySetInnerHTML={{__html:dataAssembler(loadedBibleObject, updateUploadedBible)}} />
    </>
  );
}

export default TranslationBlockColumnContainer;
