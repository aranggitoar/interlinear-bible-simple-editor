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

import { BibleDataType, BibleDataObjectType } from 'types/BibleData';
import { ActionType, BibleDataActionsType } from 'types/BibleDataActions';

export const BibleDataReducer = (
  state: BibleDataType,
  action: BibleDataActionsType
): BibleDataType => {
  switch (action.type) {
    case ActionType.SetBibleObject:
      return { ...state, bibleObject: action.payload };
    case ActionType.SetTranslatedWordFromBibleObject: {
      const copyOfBibleObject = {
        ...state.bibleObject,
        [state.bibleInfo.bibleBookName]: [
          ...state.bibleObject[state.bibleInfo.bibleBookName][
            state.bibleInfo.bibleChapterIndex
          ][state.bibleInfo.bibleVerseIndex][
            action.payload.wordIndex
          ].splice(0, 1, action.payload.newTranslatedWord),
        ],
      } as BibleDataObjectType;
      return {
        ...state,
        bibleObject: {
          ...state.bibleObject,
          // @ts-ignore // unecessary missing properties
          copyOfBibleObject,
        },
      };
      // The code that doesn't work, replace line 32 to 49 for these code block
      // For one thing it is clear that without line 56 and the ({}) it is
      // missing an object spread operation, hence it will return only the
      // spliced string
      // return { ...state, bibleObject: {
      //   ...state.bibleObject, ({
      //     ...state.bibleObject,
      //     [state.bibleInfo.bibleBookName]: [
      //       ...state.bibleObject
      //       [state.bibleInfo.bibleBookName]
      //       [state.bibleInfo.bibleChapterIndex]
      //       [state.bibleInfo.bibleVerseIndex]
      //       [action.payload.wordIndex]
      //       .splice(0, 1, action.payload.newTranslatedWord)
      //     ]
      //   })
      // } as BibleDataObjectType};
    }
    case ActionType.SetBibleFileName:
      return { ...state, bibleFileName: action.payload };
    case ActionType.SetBibleBookNames:
      return { ...state, bibleBookNames: action.payload };
    case ActionType.SetBibleInfo:
      return { ...state, bibleInfo: action.payload };
    case ActionType.SetBibleBookNameFromBibleInfo:
      return {
        ...state,
        bibleInfo: {
          ...state.bibleInfo,
          bibleBookName: action.payload,
          bibleChapterIndex: 0,
          bibleVerseIndex: 0,
        },
      };
    case ActionType.SetBibleChapterIndexFromBibleInfo:
      return {
        ...state,
        bibleInfo: {
          ...state.bibleInfo,
          bibleChapterIndex: action.payload,
          bibleVerseIndex: 0,
        },
      };
    case ActionType.SetBibleVerseIndexFromBibleInfo:
      return {
        ...state,
        bibleInfo: { ...state.bibleInfo, bibleVerseIndex: action.payload },
      };
    case ActionType.SetBibleWordIndexFromBibleInfo:
      return {
        ...state,
        bibleInfo: { ...state.bibleInfo, bibleWordIndex: action.payload },
      };
    default:
      throw new Error('unexpected action type');
  }
};
