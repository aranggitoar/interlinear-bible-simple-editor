import { JSX } from 'solid-js/jsx-runtime';
import Lexicon from './Lexicon';
// import LexiconEntryDialog from './Lexicon/Dialog';
import Original from './Original';
import Translation from './Translation';
import Morphology from './Morphology';
import {
  correctlyOrderedNTBibleBookNameReference,
  correctlyOrderedOTBibleBookNameReference,
} from 'utils/references/correctlyOrderedBibleBookNameReferences';
import { bibleData } from 'stores/bibleDataStore';
import * as S from './styles';

const createContentRows = (wordsInVerse: number): JSX.Element => {
  const jsxMarkup = [] as Array<JSX.Element>;

  // Generate as many containers as the word count of the current verse.
  for (let wordIndex = 0; wordIndex < wordsInVerse; wordIndex++) {
    jsxMarkup.push(
      <S.WordContainer>
        <Lexicon wordIndex={wordIndex} />
        <Original wordIndex={wordIndex} />
        <Translation wordIndex={wordIndex} />
        <Morphology wordIndex={wordIndex} />
      </S.WordContainer>
    );
  }

  return jsxMarkup as JSX.Element;
};

export default (): JSX.Element => {
  let direction = '';

  // Interpret the verse direction.
  // Return a string of the direction.
  if (
    correctlyOrderedOTBibleBookNameReference.indexOf(bibleData.bibleInfo.bibleBookName) >
    -1
  )
    direction = 'rtl';
  if (
    correctlyOrderedNTBibleBookNameReference.indexOf(bibleData.bibleInfo.bibleBookName) >
    -1
  )
    direction = 'ltr';

  return (
    <S.BlockContainer>
      <S.ContentContainer id={direction}>
        {createContentRows(bibleData.bibleInfo.bibleWordCount)}
      </S.ContentContainer>
      {/* <LexiconEntryDialog /> */}
    </S.BlockContainer>
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
