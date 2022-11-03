// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { createSignal } from 'solid-js';
import { Text } from '@hope-ui/solid';
import { bibleData } from 'stores/BibleDataStore';
import { referenceData } from 'stores/ReferenceDataStore';
import { addReferenceDataItem } from 'stores/ReferenceDataActions';
import { filterDisplayedLexiconIndex } from 'utils/filterDisplayedLexiconIndex';
import { getLexiconEntry } from 'utils/getLexiconEntry';

export default (props: Record<string, number | string>) => {
  const [currentlyDisplayedLexiconEntry, setCurrentlyDisplayedLexiconEntry] =
    createSignal('');
  const [isMultipleLexiconEntry, setIsMultipleLexiconEntry] = createSignal(false);
  const [isNonExistent, setIsNonExistent] = createSignal(false);

  // Get the lexicon entry/entries and get the index/indexes.
  const lexicon =
    bibleData.bibleObject[props.bibleBookName as string][
      props.bibleChapterIndex as number
    ][props.bibleVerseIndex as number][props.wordIndex as number][2];
  const lexiconIndex = filterDisplayedLexiconIndex(lexicon);

  // Check if it is a string of multiple lexicon entries.
  if (/&/.test(lexicon) === true) {
    setCurrentlyDisplayedLexiconEntry(lexicon.split('&')[0]);
    setIsMultipleLexiconEntry(true);
  } else {
    setCurrentlyDisplayedLexiconEntry(lexicon);
  }

  // Check if the lexicon entry doesn't exists.
  if (getLexiconEntry(currentlyDisplayedLexiconEntry())[0] === undefined) {
    setIsNonExistent(true);
  }

  return (
    <Text
      color={isNonExistent() === true ? '#fff' : '$info11'}
      cursor={isNonExistent() === true ? 'default' : 'pointer'}
      _hover={{
        color: isNonExistent() === true ? '#fff' : '$info10',
      }}
      m="0.3rem 0"
      onClick={() => {
        isMultipleLexiconEntry() === true
          ? () => {
              const splitLexiconId = lexicon.split('&');

              for (let i = 0; i < splitLexiconId.length; i++) {
                addReferenceDataItem(
                  splitLexiconId[i],
                  getLexiconEntry(splitLexiconId[i])[0]
                );
              }
            }
          : addReferenceDataItem(lexicon, getLexiconEntry(lexicon)[0]);
        console.log(referenceData);
      }}
    >
      {lexiconIndex}
    </Text>
  );
};
