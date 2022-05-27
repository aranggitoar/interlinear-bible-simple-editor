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


import React, { useContext, FC, MouseEvent } from 'react';

import { LoadedBibleContext } from '@/contexts/LoadedBibleContext';
import { ButtonContainer, MoveByOneButton } from './styles';


export const MoveBackwardByOne: FC = () => {
  const [state, dispatch] = useContext(LoadedBibleContext);
  let verseIndex: number
  let chapterIndex: number
  if (state.bibleInfo !== undefined) {
    verseIndex = state.bibleInfo.bibleVerseIndex;
    chapterIndex = state.bibleInfo.bibleChapterIndex;
    if (chapterIndex >= 0 && verseIndex >= 0) {
      verseIndex--;
    }
  }

  return (
    <ButtonContainer>
      <MoveByOneButton id="backward" className="move-by-one"
      // onClick={(e) => updateVerseIndex(e)}>
      onClick={() => {
        // If the verse index is negative:
        // go back to the last verse of the chapter before
        if (verseIndex == -1 && chapterIndex > 0) {
          chapterIndex--;
          if (state.bibleObject[state.bibleInfo.bibleBookName] !== undefined) {
            if (state.bibleObject[state.bibleInfo.bibleBookName][state.bibleInfo.bibleChapterIndex] !== undefined) {
              let maxVerseIndex = state.bibleObject[state.bibleInfo.bibleBookName][state.bibleInfo.bibleChapterIndex].length + 1;
              verseIndex = maxVerseIndex;
            }
          }
          dispatch({ type: 'setBibleChapterIndexFromBibleInfo', bibleChapterIndex: chapterIndex as unknown as string })
        }
        if (verseIndex >= 0 && chapterIndex >= 0) {
          dispatch({ type: 'setBibleVerseIndexFromBibleInfo', bibleVerseIndex: verseIndex as unknown as string });
        }
      }}>
      &#8249;
      </MoveByOneButton>
    </ButtonContainer>
  );
}

export const MoveForwardByOne: FC = () => {
  const [state, dispatch] = useContext(LoadedBibleContext);
  let verseIndex: number
  if (state.bibleInfo !== undefined) {
    verseIndex = state.bibleInfo.bibleVerseIndex;
    if (state.bibleObject[state.bibleInfo.bibleBookName] !== undefined) {
      if (state.bibleObject[state.bibleInfo.bibleBookName][state.bibleInfo.bibleChapterIndex] !== undefined) {
        let maxVerseIndex = state.bibleObject[state.bibleInfo.bibleBookName][state.bibleInfo.bibleChapterIndex].length - 1;
        if (verseIndex < maxVerseIndex) verseIndex++;
      }
    }
  }

  return (
    <ButtonContainer>
      <MoveByOneButton id="forward" className="move-by-one"
        // onClick={(e) => updateVerseIndex(e)}>
        onClick={() => {
          dispatch({ type: 'setBibleVerseIndexFromBibleInfo', bibleVerseIndex: verseIndex as unknown as string });
        }}>
        &#8250;
      </MoveByOneButton>
    </ButtonContainer>
  );
}
