// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import * as gL from 'assets/data/lexicon-greek.json';
import * as hL from 'assets/data/lexicon-hebrew.json';
import { LexiconEntryType } from 'types/LexiconEntryType';
import { filterDisplayedLexiconIndex } from 'utils/filterDisplayedLexiconIndex';

// Get lexicon data by its index.
export const getLexiconEntry = (stringOfLexiconIndex: string): Array<string> => {
  const greekLexicon: LexiconEntryType = <LexiconEntryType>gL;
  const hebrewLexicon: LexiconEntryType = <LexiconEntryType>hL;
  const lexiconDataHTMLMarkup = [] as Array<string>;

  if (stringOfLexiconIndex[0] === 'H') {
    const key = `H${filterDisplayedLexiconIndex(stringOfLexiconIndex)}`;
    lexiconDataHTMLMarkup.push(hebrewLexicon[key]);
  }

  if (stringOfLexiconIndex[0] === 'G') {
    // Some words have two strongs number on them, split and output them in the first and second index
    if (/&/.test(stringOfLexiconIndex)) {
      const temp = stringOfLexiconIndex.split('&');
      const key = [
        `G${filterDisplayedLexiconIndex(temp[0])}`,
        `G${filterDisplayedLexiconIndex(temp[1])}`,
      ];
      lexiconDataHTMLMarkup.push(greekLexicon[key[0]]);
      lexiconDataHTMLMarkup.push(greekLexicon[key[1]]);
    } else {
      const key = `G${filterDisplayedLexiconIndex(stringOfLexiconIndex)}`;
      lexiconDataHTMLMarkup.push(greekLexicon[key]);
    }
  }

  return lexiconDataHTMLMarkup;
};
