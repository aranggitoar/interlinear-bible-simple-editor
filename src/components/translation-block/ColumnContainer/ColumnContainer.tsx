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

import { useContext, FC, ReactElement } from 'react';
import { TranslationBlockRowContainer } from 'components/translation-block/RowContainer/RowContainer';
import {
  correctlyOrderedNTBibleBookNameReference,
  correctlyOrderedOTBibleBookNameReference,
} from 'utils/references/correctlyOrderedBibleBookNameReferences';
import { BibleDataContext, useTrackedState } from 'contexts/BibleDataContext';
import { Container, ColumnContainer } from './styles';

// Generate the column containers.
// Return an array of JSX Elements.
function columnContainerGenerator(wordCount: number): Array<JSX.Element> {
  const jsxMarkup = [] as Array<JSX.Element>;

  for (let i = 0; i < wordCount; i++) {
    const columnId = `column-${i}` as string;
    // Key attribute is a necessary internal component for React to not output warnings.
    // It is implicitly defined but it's defined explicitly here to be safe.
    // References:
    // https://reactjs.org/docs/lists-and-keys.html#keys
    // https://reactjs.org/docs/reconciliation.html#recursing-on-children
    jsxMarkup.push(
      <div key={i} id={columnId}>
        <TranslationBlockRowContainer wordIndex={i} />
      </div>
    );
  }

  return jsxMarkup as Array<JSX.Element>;
}

// Display translation block's column container.
export const TranslationBlockColumnContainer: FC = (): ReactElement => {
  const { state } = useContext(BibleDataContext);
  // const state = useTrackedState();

  let wordCount = 0 as number;
  if (state.bibleObject[state.bibleInfo.bibleBookName] !== undefined) {
    if (
      state.bibleObject[state.bibleInfo.bibleBookName][
        state.bibleInfo.bibleChapterIndex
      ] !== undefined
    ) {
      if (
        state.bibleObject[state.bibleInfo.bibleBookName][
          state.bibleInfo.bibleChapterIndex
        ][state.bibleInfo.bibleVerseIndex] !== undefined
      ) {
        wordCount = state.bibleObject[state.bibleInfo.bibleBookName][
          state.bibleInfo.bibleChapterIndex
        ][state.bibleInfo.bibleVerseIndex].length as number;
      }
    }
  }

  return (
    <Container>
      <ColumnContainer
        className={(() => {
          // Interpret the verse direction.
          // Return a string of the direction.
          let direction = '';
          if (
            correctlyOrderedOTBibleBookNameReference.indexOf(
              state.bibleInfo.bibleBookName
            ) > -1
          )
            direction = 'rtl';
          if (
            correctlyOrderedNTBibleBookNameReference.indexOf(
              state.bibleInfo.bibleBookName
            ) > -1
          )
            direction = 'ltr';
          return direction;
        })()}
      >
        {columnContainerGenerator(wordCount)}
      </ColumnContainer>
    </Container>
  );
};
