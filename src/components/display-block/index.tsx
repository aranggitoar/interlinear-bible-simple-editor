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
import { LexiconDisplayBlock } from 'components/display-block/Lexicon/Lexicon';
import { OriginalDisplayBlock } from 'components/display-block/Original/Original';
import { TranslationDisplayBlock } from 'components/display-block/Translation/Translation';
import { MorphologyDisplayBlock } from 'components/display-block/Morphology/Morphology';
import { LexiconEntryDialogBox } from 'components/display-block/LexiconEntryDialog/LexiconEntryDialog';
import {
  correctlyOrderedNTBibleBookNameReference,
  correctlyOrderedOTBibleBookNameReference,
} from 'utils/references/correctlyOrderedBibleBookNameReferences';
import { BibleDataContext } from 'contexts/BibleDataContext';
import { ColumnContainer, RowContainer } from './styles';

export const DisplayBlock: FC = (): ReactElement<Record<string, unknown>> => {
  const { state } = useContext(BibleDataContext);
  const { bibleObject, bibleInfo } = state;
  const { bibleBookName, bibleChapterIndex, bibleVerseIndex } = bibleInfo;

  const rowContainers = [];
  let wordsInVerse = 0 as number;
  let direction = '';

  // Interpret the verse direction.
  // Return a string of the direction.
  if (correctlyOrderedOTBibleBookNameReference.indexOf(bibleBookName) > -1)
    direction = 'rtl';
  if (correctlyOrderedNTBibleBookNameReference.indexOf(bibleBookName) > -1)
    direction = 'ltr';

  if (bibleObject[bibleBookName] !== undefined) {
    wordsInVerse = bibleObject[bibleBookName][bibleChapterIndex][bibleVerseIndex]
      .length as number;
  }

  // Generate as many containers as the word count of the current verse.
  for (let wordIndex = 0; wordIndex < wordsInVerse; wordIndex++) {
    // Key attribute is a necessary internal component for React to not output warnings.
    // It is implicitly defined but it's defined explicitly here to be safe.
    // References:
    // https://reactjs.org/docs/lists-and-keys.html#keys
    // https://reactjs.org/docs/reconciliation.html#recursing-on-children
    rowContainers.push(
      <RowContainer key={`${wordIndex}4`}>
        <LexiconDisplayBlock key={`${wordIndex}0`} wordIndex={wordIndex} />
        <OriginalDisplayBlock key={`${wordIndex}1`} wordIndex={wordIndex} />
        <TranslationDisplayBlock key={`${wordIndex}2`} wordIndex={wordIndex} />
        <MorphologyDisplayBlock key={`${wordIndex}3`} wordIndex={wordIndex} />
      </RowContainer>
    );
  }

  return (
    <ColumnContainer id={direction}>
      <LexiconEntryDialogBox />
      {rowContainers}
    </ColumnContainer>
  );
};
