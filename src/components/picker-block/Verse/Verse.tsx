import * as React from 'react';

import { getTranslationResult } from '@/utilities/getTranslationResult';
import { storeTranslationResult } from '@/utilities/storeTranslationResult';

type Props = {
  loadedBibleObject: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void
}

const defaultBibleVersePickerText = "Choose verse";

function createVersePicker(verseCount: number, selectedVerseIndex: number) {
  var markup = `<option disabled value="undefined">${defaultBibleVersePickerText}</option>`;
  for (let i = 0; i < verseCount; i++) {
    let selected = ''
    if (selectedVerseIndex === verseCount) {
      selected = 'selected'
    }
    markup += `<option ${selected} value="${i}">${i+1}</option>`
  }
  return markup;
}

const updateTranslation = (bibleObject: Object, chosenBibleBookDetails: Array<string>):void => {
  let newTranslationData = getTranslationResult(document.getElementsByClassName('row-target-language').length);
  bibleObject = storeTranslationResult(bibleObject, chosenBibleBookDetails, newTranslationData)
}

const updateVerseIndex = (e: React.FormEvent<HTMLSelectElement>, oldBible: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void): void => {
  e.preventDefault();

  // Also update the target language.
  updateTranslation(oldBible.bibleObject, oldBible.chosenBibleBookDetails);

  oldBible.chosenBibleBookDetails[2] = e.currentTarget.value as string;

  const newBible: ILoadedBible = {
    ['bibleObject']: oldBible.bibleObject,
    ['chosenBibleSourceName']: oldBible.chosenBibleSourceName,
    ['chosenBibleBookNames']: oldBible.chosenBibleBookNames,
    ['chosenBibleBookDetails']: oldBible.chosenBibleBookDetails
  }

  updateUploadedBible(newBible)
}

const VersePickerBlock: React.FC<Props> = ({loadedBibleObject, updateUploadedBible}) => {
  const localCopy = loadedBibleObject.bibleObject;
  let verseCount = 0 as number;

  let bibleBookDetails = loadedBibleObject.chosenBibleBookDetails
  let selectedBibleBookName = bibleBookDetails[0];
  let selectedChapterIndex = bibleBookDetails[1];
  // Converts string type into unknown, then into number.
  let selectedVerseIndex = bibleBookDetails[2] as unknown as number;

  if (localCopy[selectedBibleBookName] !== undefined) {
    verseCount = localCopy[selectedBibleBookName][selectedChapterIndex].length;
  }

  let markup = createVersePicker(verseCount, selectedVerseIndex);

  return (
    <select id="verse-picker" className="picker-items" name="verse-picker"
      defaultValue="undefined"
      onChange={(e) => updateVerseIndex(e, loadedBibleObject, updateUploadedBible)}
      dangerouslySetInnerHTML={{__html:markup}}>
    </select>
  );
}

export default VersePickerBlock;
