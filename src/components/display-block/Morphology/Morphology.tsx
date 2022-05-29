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

import { FC, ReactElement, useContext } from 'react';
import { BibleDataContext, useTracked } from 'contexts/BibleDataContext';
import { morphHBMorphologyParser } from 'utils/morphHBMorphologyParser';
import { byzMTMorphologyParser } from 'utils/byzMTMorphologyParser';
import { MorphologyContainer } from './styles';

// Filter the displayed morphological data.
// Declared outside the component function for testing purposes.
export const filterDisplayedMorphology = (data: string): string => {
  let parsedMorphology = '' as string;

  // If file is not OSHB.
  if (data[0] !== 'H') {
    if (/[-]/.test(data)) {
      parsedMorphology = byzMTMorphologyParser(data.split('-')[0]);
    } else {
      parsedMorphology = byzMTMorphologyParser(data);
    }
    return parsedMorphology;
  }

  // For special case of ByzMT morphological code which starts with H.
  if (data === 'HEB') {
    return byzMTMorphologyParser(data);
  }

  // Get the main morphological data codes into an array.
  const mainMorphologicalDataPoints = data.match(/[A-Z]/g);

  if (mainMorphologicalDataPoints !== null) {
    // Remove the first character, which is just an 'H' to identify it as Hebrew morphological data
    mainMorphologicalDataPoints.shift();

    if (mainMorphologicalDataPoints.length === 1) {
      parsedMorphology = morphHBMorphologyParser(mainMorphologicalDataPoints[0]);
    }

    if (mainMorphologicalDataPoints.length === 2) {
      // Parse the first character if it is V, because the second one would be the stem category
      if (
        mainMorphologicalDataPoints[1] === 'S' ||
        mainMorphologicalDataPoints[0] === 'V'
      ) {
        parsedMorphology = morphHBMorphologyParser(mainMorphologicalDataPoints[0]);
      } else {
        parsedMorphology = morphHBMorphologyParser(mainMorphologicalDataPoints[1]);
      }
    }

    if (mainMorphologicalDataPoints.length === 3) {
      if (mainMorphologicalDataPoints[1] === 'T') {
        parsedMorphology = morphHBMorphologyParser(mainMorphologicalDataPoints[2]);
      } else {
        parsedMorphology = morphHBMorphologyParser(mainMorphologicalDataPoints[1]);
      }
    }

    if (mainMorphologicalDataPoints.length === 4) {
      parsedMorphology = morphHBMorphologyParser(mainMorphologicalDataPoints[2]);
    }
  }

  return parsedMorphology;
}

export const MorphologyDisplayBlock: FC<{ wordIndex: number }> = ({
  wordIndex,
}): ReactElement<Record<string, unknown>> => {
  const { state } = useContext(BibleDataContext);
  // const state = useTracked();
  const { bibleObject, bibleInfo } = state;
  const { bibleBookName, bibleChapterIndex, bibleVerseIndex } = bibleInfo;

  const morphology =
    bibleObject[bibleBookName][bibleChapterIndex][bibleVerseIndex][wordIndex][3];

  return <MorphologyContainer>{filterDisplayedMorphology(morphology)}</MorphologyContainer>;
};
