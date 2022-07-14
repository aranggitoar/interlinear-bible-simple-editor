import { setBibleBookNameFromBibleInfo } from 'stores/BibleDataActions';
import { BibleData } from 'stores/BibleDataStore';
import * as S from '../styles';

const defaultBibleBookSelectorText = 'Choose bible book';

function createBibleBookSelector(bibleBookNameList: Array<string>) {
  const jsxMarkup = [
    <S.Option disabled value="undefined">
      {defaultBibleBookSelectorText}
    </S.Option>,
  ];

  for (let i = 0; i < bibleBookNameList.length; i++) {
    jsxMarkup.push(
      <S.Option value={bibleBookNameList[i]}>{bibleBookNameList[i]}</S.Option>
    );
  }
  return jsxMarkup as Array<Element>;
}

export default () => (
  <S.Select
    value={
      BibleData.bibleInfo.bibleBookName !== ''
        ? BibleData.bibleInfo.bibleBookName
        : 'undefined'
    }
    onChange={(event) => {
      setBibleBookNameFromBibleInfo(event.currentTarget.value);
    }}
  >
    {createBibleBookSelector(BibleData.bibleBookNames)}
  </S.Select>
);

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
