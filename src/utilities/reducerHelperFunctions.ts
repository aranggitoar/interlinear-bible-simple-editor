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
} from '@/types/LoadedBibleActionsType';
import { LoadedBibleType } from '@/types/LoadedBibleType';

export const setBibleObject = (loadedBibleObject: LoadedBibleType): SetBibleObject => ({
	type: ActionType.SetBibleObject,
	payload: loadedBibleObject,
});

export const setTranslatedWordFromBibleObject = (
	wordIndex: string,
	newTranslatedWord: string
): SetTranslatedWordFromBibleObject => ({
	type: ActionType.SetTranslatedWordFromBibleObject,
	payload: { wordIndex, newTranslatedWord },
});

export const setBibleFileName = (
	loadedBibleFileName: LoadedBibleType['bibleFileName']
): SetBibleFileName => ({
	type: ActionType.SetBibleFileName,
	payload: loadedBibleFileName,
});

export const setBibleBookNames = (
	loadedBibleBookNames: LoadedBibleType['bibleBookNames']
): SetBibleBookNames => ({
	type: ActionType.SetBibleBookNames,
	payload: loadedBibleBookNames,
});

export const setBibleInfo = (
	loadedBibleInfo: LoadedBibleType['bibleInfo']
): SetBibleInfo => ({
	type: ActionType.SetBibleInfo,
	payload: loadedBibleInfo,
});

export const setBibleBookNameFromBibleInfo = (
	displayedBibleBookName: LoadedBibleType['bibleInfo']['bibleBookName']
): SetBibleBookNameFromBibleInfo => ({
	type: ActionType.SetBibleBookNameFromBibleInfo,
	payload: displayedBibleBookName,
});

export const setBibleChapterIndexFromBibleInfo = (
	displayedBibleChapterIndex: LoadedBibleType['bibleInfo']['bibleBookName']
): SetBibleChapterIndexFromBibleInfo => ({
	type: ActionType.SetBibleChapterIndexFromBibleInfo,
	payload: displayedBibleChapterIndex,
});

export const setBibleVerseIndexFromBibleInfo = (
	displayedBibleVerseIndex: LoadedBibleType['bibleInfo']['bibleVerseIndex']
): SetBibleVerseIndexFromBibleInfo => ({
	type: ActionType.SetBibleVerseIndexFromBibleInfo,
	payload: displayedBibleVerseIndex,
});

export const setBibleWordIndexFromBibleInfo = (
	displayedBibleWordIndex: LoadedBibleType['bibleInfo']['bibleWordIndex']
): SetBibleWordIndexFromBibleInfo => ({
	type: ActionType.SetBibleWordIndexFromBibleInfo,
	payload: displayedBibleWordIndex,
});
