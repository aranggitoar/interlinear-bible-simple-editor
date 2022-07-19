import { createEffect } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { setBibleChapterIndexFromBibleInfo } from 'stores/bibleDataActions';
import { bibleData } from 'stores/bibleDataStore';
import * as S from './styles';

const defaultBibleChapterSelectorText = 'Pilih pasal';

const createChapterSelector = (amountOfChapters: number): JSX.Element => {
  const jsxMarkup = [
    <S.Option disabled value="undefined">
      {defaultBibleChapterSelectorText}
    </S.Option>,
  ] as Array<JSX.Element>;

  for (let i = 0; i < amountOfChapters; i++) {
    jsxMarkup.push(<S.Option value={i}>{i + 1}</S.Option>);
  }
  return jsxMarkup as JSX.Element;
};

export default (): JSX.Element => {
  let component: HTMLSelectElement;

  createEffect(() => {
    component.value =
      bibleData.bibleInfo.bibleBookName !== ''
        ? bibleData.bibleInfo.bibleChapterIndex.toString()
        : 'undefined';
  });

  return (
    <S.Select
      // @ts-ignore tsserver doesn't understand www.solidjs.com/tutorial/bindings_refs
      ref={component}
      onChange={(event) => {
        setBibleChapterIndexFromBibleInfo(+event.currentTarget.value);
      }}
    >
      {createChapterSelector(bibleData.bibleInfo.bibleChapterCount)}
    </S.Select>
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
