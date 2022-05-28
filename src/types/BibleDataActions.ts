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

import { BibleDataType } from './BibleData';

export enum ActionType {
  SetBibleObject,
  SetTranslatedWordFromBibleObject,
  SetBibleFileName,
  SetBibleBookNames,
  SetBibleInfo,
  SetBibleBookNameFromBibleInfo,
  SetBibleChapterIndexFromBibleInfo,
  SetBibleVerseIndexFromBibleInfo,
  SetBibleWordIndexFromBibleInfo,
}

export interface SetBibleObject {
  type: ActionType.SetBibleObject;
  payload: BibleDataType['bibleObject'];
}

export interface SetTranslatedWordFromBibleObject {
  type: ActionType.SetTranslatedWordFromBibleObject;
  payload: { wordIndex: string; newTranslatedWord: string };
}

export interface SetBibleFileName {
  type: ActionType.SetBibleFileName;
  payload: BibleDataType['bibleFileName'];
}

export interface SetBibleBookNames {
  type: ActionType.SetBibleBookNames;
  payload: BibleDataType['bibleBookNames'];
}

export interface SetBibleInfo {
  type: ActionType.SetBibleInfo;
  payload: BibleDataType['bibleInfo'];
}

export interface SetBibleBookNameFromBibleInfo {
  type: ActionType.SetBibleBookNameFromBibleInfo;
  payload: BibleDataType['bibleInfo']['bibleBookName'];
}

export interface SetBibleChapterIndexFromBibleInfo {
  type: ActionType.SetBibleChapterIndexFromBibleInfo;
  payload: BibleDataType['bibleInfo']['bibleChapterIndex'];
}

export interface SetBibleVerseIndexFromBibleInfo {
  type: ActionType.SetBibleVerseIndexFromBibleInfo;
  payload: BibleDataType['bibleInfo']['bibleVerseIndex'];
}

export interface SetBibleWordIndexFromBibleInfo {
  type: ActionType.SetBibleWordIndexFromBibleInfo;
  payload: BibleDataType['bibleInfo']['bibleWordIndex'];
}

export type BibleDataActionsType =
  | SetBibleObject
  | SetTranslatedWordFromBibleObject
  | SetBibleFileName
  | SetBibleBookNames
  | SetBibleInfo
  | SetBibleBookNameFromBibleInfo
  | SetBibleChapterIndexFromBibleInfo
  | SetBibleVerseIndexFromBibleInfo
  | SetBibleWordIndexFromBibleInfo;
