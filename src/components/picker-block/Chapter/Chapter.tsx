import * as React from 'react';

import { getTranslationResult } from '@/utilities/getTranslationResult';
import { storeTranslationResult } from '@/utilities/storeTranslationResult';

type Props = {
  loadedBibleObject: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void
}

const defaultBibleChapterPickerText = "Choose chapter";

function createChapterPicker(chapterCount: number, selectedChapterIndex: number) {
  var markup = `<option disabled value="undefined">${defaultBibleChapterPickerText}</option>`;
  for (let i = 0; i < chapterCount; i++) {
    let selected = ''
    if (selectedChapterIndex === chapterCount) {
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

const updateChapterIndex = (e: React.FormEvent<HTMLSelectElement>, oldBible: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void): void => {
  e.preventDefault();

  // Also update the target language.
  updateTranslation(oldBible.bibleObject, oldBible.chosenBibleBookDetails);

  oldBible.chosenBibleBookDetails[1] = e.currentTarget.value as string;
  // Reset the verse index.
  oldBible.chosenBibleBookDetails[2] = '0' as string;

  const newBible: ILoadedBible = {
    ['bibleObject']: oldBible.bibleObject,
    ['chosenBibleSourceName']: oldBible.chosenBibleSourceName,
    ['chosenBibleBookNames']: oldBible.chosenBibleBookNames,
    ['chosenBibleBookDetails']: oldBible.chosenBibleBookDetails
  }

  updateUploadedBible(newBible)
}

const ChapterPickerBlock: React.FC<Props> = ({loadedBibleObject, updateUploadedBible}) => {
  const localCopy = loadedBibleObject.bibleObject;
  let chapterCount = 0 as number;

  let bibleBookDetails = loadedBibleObject.chosenBibleBookDetails
  let selectedBibleBookName = bibleBookDetails[0];
  // Converts string type into unknown, then into number.
  let selectedChapterIndex = bibleBookDetails[1] as unknown as number;

  if (localCopy[selectedBibleBookName] !== undefined) {
    chapterCount = localCopy[selectedBibleBookName].length;
  }

  return (
    <select id="chapter-picker" className="picker-items"
      name="chapter-picker" defaultValue="undefined"
      onChange={(e) => updateChapterIndex(e, loadedBibleObject, updateUploadedBible)}
      dangerouslySetInnerHTML={{__html:createChapterPicker(chapterCount,
      selectedChapterIndex)}}>
    </select>
  );
}

export default ChapterPickerBlock;
