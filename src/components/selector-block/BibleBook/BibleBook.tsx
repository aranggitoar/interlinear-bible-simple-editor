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
import { setBibleBookNameFromBibleInfo } from 'utils/bibleDataReducerHelperFunctions';
import { BibleDataContext } from 'contexts/BibleDataContext';
import { Select, Option } from '../styles';

const defaultBibleBookSelectorText = 'Choose bible book';

function createBibleBookSelector(bibleBookNameList: Array<string>) {
  const jsxMarkup = [
    <Option disabled value="undefined">
      {defaultBibleBookSelectorText}
    </Option>,
  ];

  for (let i = 0; i < bibleBookNameList.length; i++) {
    jsxMarkup.push(<Option value={bibleBookNameList[i]}>{bibleBookNameList[i]}</Option>);
  }
  return jsxMarkup as Array<JSX.Element>;
}

export const BibleBookSelectorBlock: FC = () => {
  const { state, dispatch } = useContext(BibleDataContext);

  return (
    <Select
      value={
        state.bibleInfo.bibleBookName !== '' ? state.bibleInfo.bibleBookName : 'undefined'
      }
      onChange={(event) => {
        dispatch(setBibleBookNameFromBibleInfo(event.target.value));
      }}
    >
      {createBibleBookSelector(state.bibleBookNames)}
    </Select>
  );
};
