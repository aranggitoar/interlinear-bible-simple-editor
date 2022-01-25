import { getArrayOfWordComponents } from './getArrayOfWordComponents';
import { getTargetWords } from './getTargetWords';
import { getOriginalWords } from './getOriginalWords';
import { getStrongs } from './getStrongs';
import { getMorphologies } from './getMorphologies';


// Accepts the local component copy of the Bible object,
// outputs the formatted chosen verse.
export function assembleBibleDataByVerse(bibleObjectCopy: ILoadedBible) {
  // Prepare the necessary variables.
  let bibleObject = bibleObjectCopy.bibleObject as Object,
      chosenBibleBookDetails = bibleObjectCopy.chosenBibleBookDetails as Array<string>,
      chosenBibleBookName = chosenBibleBookDetails[0] as string,
      chosenBibleBookContents = [] as Array<Array<Array<string>>>,
      chosenChapterIndex = chosenBibleBookDetails[1] as string,
      chosenChapterContents = [] as Array<Array<string>>,
      chosenVerseIndex = chosenBibleBookDetails[2] as string,
      arrayOfChosenVerseContents = [] as Array<string>,
      stringOfChosenVerseContents = '' as string,
      arrayOfWordComponents = [] as Array<Array<string>>;

  // Prepare the displayed Bible.
  // Currently only verse by verse.
  if (bibleObject[chosenBibleBookName] !== undefined) {
    // Store the book contents.
    chosenBibleBookContents = bibleObject[chosenBibleBookName];

    // Store the chapter contents.
    chosenChapterContents = chosenBibleBookContents[chosenChapterIndex];
    arrayOfChosenVerseContents = chosenChapterContents[chosenVerseIndex] as Array<string>;

    // Store the verse contents.
    stringOfChosenVerseContents = arrayOfChosenVerseContents.toString() as string;
    arrayOfChosenVerseContents = stringOfChosenVerseContents.split(',');

    // Get parts of the verse.
    arrayOfWordComponents = getArrayOfWordComponents(arrayOfChosenVerseContents);
  }

  // Save the source data into a defined object.
  const arrayOfSourceData = {
    arrayOfTargetWords: getTargetWords(arrayOfWordComponents),
    arrayOfOriginalWords: getOriginalWords(arrayOfWordComponents),
    arrayOfStrongs: getStrongs(arrayOfWordComponents),
    arrayOfMorphologies: getMorphologies(arrayOfWordComponents),
    chosenBibleBookDetails: chosenBibleBookDetails
  } as ILoadedVerse;

  return arrayOfSourceData;
}

