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

import {
  ActionType,
  SetBibleObject,
  SetTranslatedWordFromBibleObject,
  SetBibleFileName,
  SetBibleBookNames,
  SetBibleInfo,
  SetBibleBookNameFromBibleInfo,
  SetBibleChapterIndexFromBibleInfo,
  SetBibleVerseIndexFromBibleInfo,
  SetBibleWordIndexFromBibleInfo,
} from 'types/BibleDataActions';
import { BibleDataType } from 'types/BibleData';

export const setBibleObject = (
  bibleObject: BibleDataType['bibleObject']
): SetBibleObject => ({
  type: ActionType.SetBibleObject,
  payload: bibleObject,
});

export const setTranslatedWordFromBibleObject = (
  wordIndex: string,
  newTranslatedWord: string
): SetTranslatedWordFromBibleObject => ({
  type: ActionType.SetTranslatedWordFromBibleObject,
  payload: { wordIndex, newTranslatedWord },
});

export const setBibleFileName = (
  bibleFileName: BibleDataType['bibleFileName']
): SetBibleFileName => ({
  type: ActionType.SetBibleFileName,
  payload: bibleFileName,
});

export const setBibleBookNames = (
  bibleBookNames: BibleDataType['bibleBookNames']
): SetBibleBookNames => ({
  type: ActionType.SetBibleBookNames,
  payload: bibleBookNames,
});

export const setBibleInfo = (bibleInfo: BibleDataType['bibleInfo']): SetBibleInfo => ({
  type: ActionType.SetBibleInfo,
  payload: bibleInfo,
});

export const setBibleBookNameFromBibleInfo = (
  displayedBibleBookName: BibleDataType['bibleInfo']['bibleBookName']
): SetBibleBookNameFromBibleInfo => ({
  type: ActionType.SetBibleBookNameFromBibleInfo,
  payload: displayedBibleBookName,
});

export const setBibleChapterIndexFromBibleInfo = (
  displayedBibleChapterIndex: BibleDataType['bibleInfo']['bibleBookName']
): SetBibleChapterIndexFromBibleInfo => ({
  type: ActionType.SetBibleChapterIndexFromBibleInfo,
  payload: displayedBibleChapterIndex,
});

export const setBibleVerseIndexFromBibleInfo = (
  displayedBibleVerseIndex: BibleDataType['bibleInfo']['bibleVerseIndex']
): SetBibleVerseIndexFromBibleInfo => ({
  type: ActionType.SetBibleVerseIndexFromBibleInfo,
  payload: displayedBibleVerseIndex,
});

export const setBibleWordIndexFromBibleInfo = (
  displayedBibleWordIndex: BibleDataType['bibleInfo']['bibleWordIndex']
): SetBibleWordIndexFromBibleInfo => ({
  type: ActionType.SetBibleWordIndexFromBibleInfo,
  payload: displayedBibleWordIndex,
});
