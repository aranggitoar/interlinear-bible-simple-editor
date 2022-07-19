import { createEffect } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { setBibleVerseIndexFromBibleInfo } from 'stores/bibleDataActions';
import { bibleData } from 'stores/bibleDataStore';
import * as S from './styles';

const defaultBibleVerseSelectorText = 'Pilih ayat';

const createVerseSelector = (amountOfVerses: number): JSX.Element => {
  const jsxMarkup = [
    <S.Option disabled value="undefined">
      {defaultBibleVerseSelectorText}
    </S.Option>,
  ] as Array<JSX.Element>;

  for (let i = 0; i < amountOfVerses; i++) {
    jsxMarkup.push(<S.Option value={i}>{i + 1}</S.Option>);
  }
  return jsxMarkup as JSX.Element;
};

export default (): JSX.Element => {
  let component: HTMLSelectElement;

  createEffect(() => {
    component.value =
      bibleData.bibleInfo.bibleBookName !== ''
        ? bibleData.bibleInfo.bibleVerseIndex.toString()
        : 'undefined';
  });

  return (
    <S.Select
      // @ts-ignore tsserver doesn't understand www.solidjs.com/tutorial/bindings_refs
      ref={component}
      onChange={(event) => {
        setBibleVerseIndexFromBibleInfo(+event.currentTarget.value);
      }}
    >
      {createVerseSelector(bibleData.bibleInfo.bibleVerseCount)}
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
