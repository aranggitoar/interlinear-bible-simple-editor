import { setBibleChapterIndexFromBibleInfo } from 'stores/BibleDataActions';
import { BibleData } from 'stores/BibleDataStore';
import * as S from '../styles';

const defaultBibleChapterSelectorText = 'Choose chapter';

function createChapterSelector(amountOfChapters: number) {
  const jsxMarkup = [
    <S.Option disabled value="undefined">
      {defaultBibleChapterSelectorText}
    </S.Option>,
  ];

  for (let i = 0; i < amountOfChapters; i++) {
    jsxMarkup.push(<S.Option value={i}>{i + 1}</S.Option>);
  }
  return jsxMarkup as Array<Element>;
}

export default () => (
  <S.Select
    value={
      BibleData.bibleInfo.bibleBookName !== ''
        ? BibleData.bibleInfo.bibleChapterIndex
        : 'undefined'
    }
    onChange={(event) => {
      setBibleChapterIndexFromBibleInfo(event.currentTarget.value as unknown as number);
    }}
  >
    {createChapterSelector(BibleData.bibleInfo.bibleChapterCount)}
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
