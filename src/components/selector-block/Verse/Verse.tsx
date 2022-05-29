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
import { setBibleVerseIndexFromBibleInfo } from 'utils/bibleDataReducerHelperFunctions';
import { BibleDataContext, useTracked } from 'contexts/BibleDataContext';
import { Select, Option } from '../styles';

const defaultBibleVerseSelectorText = 'Choose verse';

function createVerseSelector(amountOfVerses: number) {
  const jsxMarkup = [
    <Option disabled value="undefined">
      {defaultBibleVerseSelectorText}
    </Option>,
  ];

  for (let i = 0; i < amountOfVerses; i++) {
    jsxMarkup.push(<Option value={i}>{i + 1}</Option>);
  }
  return jsxMarkup as Array<JSX.Element>;
}

export const VerseSelectorBlock: FC = () => {
  const { state, dispatch } = useContext(BibleDataContext);
  // const [state, dispatch] = useTracked();

  let amountOfVerses = 0 as number;

  if (state.bibleObject[state.bibleInfo.bibleBookName] !== undefined) {
    if (
      state.bibleObject[state.bibleInfo.bibleBookName][
        state.bibleInfo.bibleChapterIndex as unknown as number
      ] !== undefined
    ) {
      amountOfVerses =
        state.bibleObject[state.bibleInfo.bibleBookName][
          state.bibleInfo.bibleChapterIndex as unknown as number
        ].length;
    }
  }

  return (
    <Select
      value={
        state.bibleInfo.bibleBookName !== ''
          ? state.bibleInfo.bibleVerseIndex
          : 'undefined'
      }
      onChange={(event) => {
        dispatch(setBibleVerseIndexFromBibleInfo(event.target.value as unknown as number));
      }}
    >
      {createVerseSelector(amountOfVerses)}
    </Select>
  );
};
