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

import { useContext, FC } from 'react';
import {
  setBibleChapterIndexFromBibleInfo,
  setBibleVerseIndexFromBibleInfo,
} from 'utils/bibleDataReducerHelperFunctions';
import { BibleDataContext } from 'contexts/BibleDataContext';
import { ButtonContainer, MoveByOneButton } from './styles';

export const MoveBackwardByOne: FC = () => {
  const { state, dispatch } = useContext(BibleDataContext);

  let verseIndex: number;
  let chapterIndex: number;
  // Object definition check.
  if (state.bibleInfo !== undefined) {
    verseIndex = state.bibleInfo.bibleVerseIndex;
    chapterIndex = state.bibleInfo.bibleChapterIndex;
    if (chapterIndex >= 0 && verseIndex >= 0) {
      verseIndex -= 1;
    }
  }

  return (
    <ButtonContainer>
      <MoveByOneButton
        id="backward"
        onClick={() => {
          // If the verse index is negative:
          // go back to the last verse of the chapter before
          if (verseIndex === -1 && chapterIndex > 0) {
            // Object definition check.
            if (state.bibleObject[state.bibleInfo.bibleBookName] !== undefined) {
              const maxVerseIndex =
                state.bibleObject[state.bibleInfo.bibleBookName][
                  chapterIndex].length + 1;
              verseIndex = maxVerseIndex;
            }
            dispatch(
              setBibleChapterIndexFromBibleInfo(chapterIndex -= 1)
            );
          }
          if (verseIndex >= 0 && chapterIndex >= 0) {
            dispatch(setBibleVerseIndexFromBibleInfo(verseIndex));
          }
        }}
      >
        &#8249;
      </MoveByOneButton>
    </ButtonContainer>
  );
};

export const MoveForwardByOne: FC = () => {
  const { state, dispatch } = useContext(BibleDataContext);

  let verseIndex: number;
  // Object definition check.
  if (state.bibleInfo !== undefined) {
    verseIndex = state.bibleInfo.bibleVerseIndex;
    // Object definition check.
    if (state.bibleObject[state.bibleInfo.bibleBookName] !== undefined) {
      const maxVerseIndex =
        state.bibleObject[state.bibleInfo.bibleBookName][
          state.bibleInfo.bibleChapterIndex
        ].length - 1;
      if (verseIndex < maxVerseIndex) verseIndex += 1;
    }
  }

  return (
    <ButtonContainer>
      <MoveByOneButton
        id="forward"
        onClick={() => {
          dispatch(setBibleVerseIndexFromBibleInfo(verseIndex));
        }}
      >
        &#8250;
      </MoveByOneButton>
    </ButtonContainer>
  );
};
