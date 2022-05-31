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
