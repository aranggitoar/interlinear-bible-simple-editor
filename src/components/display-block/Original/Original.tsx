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

import { FC, ReactElement, useContext } from 'react';
import { BibleDataContext } from 'contexts/BibleDataContext';
import { OriginalContainer } from './styles';

export const OriginalDisplayBlock: FC<{ wordIndex: number }> = ({
  wordIndex,
}): ReactElement<Record<string, unknown>> => {
  const { state } = useContext(BibleDataContext);
  const { bibleObject, bibleInfo } = state;
  const { bibleBookName, bibleChapterIndex, bibleVerseIndex } = bibleInfo;

  // Filter the displayed original language data.
  const filterDisplayedOriginal = (data: string): string => {
    let filteredOriginal = data;
    if (/\//.test(data)) {
      filteredOriginal = data.replace(/\//g, '');
    }
    return filteredOriginal;
  }

  const original =
    bibleObject[bibleBookName][bibleChapterIndex][bibleVerseIndex][wordIndex][1];

  return <OriginalContainer>{filterDisplayedOriginal(original)}</OriginalContainer>;
};
