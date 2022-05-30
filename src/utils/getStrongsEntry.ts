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
import { StrongsEntryType } from 'types/StrongsEntryType';
import { filterDisplayedStrongs } from 'utils/filterDisplayedStrongs';

// Get lexicon data by a strongs number.
export const getStrongsEntry = (stringOfStrongsNumber: string): Array<string> => {
  const greekLexicon: StrongsEntryType = <StrongsEntryType>gL;
  const hebrewLexicon: StrongsEntryType = <StrongsEntryType>hL;
  const lexiconDataHTMLMarkup = [] as Array<string>;

  if (stringOfStrongsNumber[0] === 'H') {
    const key = `H${filterDisplayedStrongs(stringOfStrongsNumber)}`;
    lexiconDataHTMLMarkup.push(hebrewLexicon[key]);
  }

  if (stringOfStrongsNumber[0] === 'G') {
    // Some words have two strongs number on them, split and output them in the first and second index
    if (/&/.test(stringOfStrongsNumber)) {
      const temp = stringOfStrongsNumber.split('&');
      const key = [
        `G${filterDisplayedStrongs(temp[0])}`,
        `G${filterDisplayedStrongs(temp[1])}`,
      ];
      lexiconDataHTMLMarkup.push(greekLexicon[key[0]]);
      lexiconDataHTMLMarkup.push(greekLexicon[key[1]]);
    } else {
      const key = `G${filterDisplayedStrongs(stringOfStrongsNumber)}`;
      lexiconDataHTMLMarkup.push(greekLexicon[key]);
    }
  }

  return lexiconDataHTMLMarkup;
};
