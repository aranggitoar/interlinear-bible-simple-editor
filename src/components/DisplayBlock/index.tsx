import Lexicon from './Lexicon';
// import LexiconEntryDialog from './Lexicon/Dialog';
import Original from './Original';
import Translation from './Translation';
import Morphology from './Morphology';
import {
  correctlyOrderedNTBibleBookNameReference,
  correctlyOrderedOTBibleBookNameReference,
} from 'utils/references/correctlyOrderedBibleBookNameReferences';
import { BibleData } from 'stores/BibleDataStore';
import * as S from './styles';

function createContentRows(wordsInVerse: number) {
  const jsxMarkup = [];

  // Generate as many containers as the word count of the current verse.
  for (let wordIndex = 0; wordIndex < wordsInVerse; wordIndex++) {
    jsxMarkup.push(
      <S.RowContainer>
        <Lexicon wordIndex={wordIndex} />
        <Original wordIndex={wordIndex} />
        <Translation wordIndex={wordIndex} />
        <Morphology wordIndex={wordIndex} />
      </S.RowContainer>
    );
  }

  return jsxMarkup as Array<Element>;
}

export default () => {
  let direction = '';

  // Interpret the verse direction.
  // Return a string of the direction.
  if (
    correctlyOrderedOTBibleBookNameReference.indexOf(BibleData.bibleInfo.bibleBookName) >
    -1
  )
    direction = 'rtl';
  if (
    correctlyOrderedNTBibleBookNameReference.indexOf(BibleData.bibleInfo.bibleBookName) >
    -1
  )
    direction = 'ltr';

  return (
    <S.ColumnContainer id={direction}>
      {createContentRows(BibleData.bibleInfo.bibleWordCount)}
      {/* <LexiconEntryDialog /> */}
    </S.ColumnContainer>
  );
};

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
