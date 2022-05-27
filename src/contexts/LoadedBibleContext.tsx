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


import { createContext, useReducer, Dispatch, FC, ReactNode } from 'react';

export const LoadedBibleContext = createContext<[any, Dispatch<any>]>(null);

const LoadedBibleProvider: FC<ReactNode> = ({ children }) => {
  const loadedBibleObject = {
    bibleObject: {},
    bibleFileName: '',
    bibleBookNames: [],
    bibleInfo: { "bibleBookName": '', "bibleChapterIndex": '', "bibleVerseIndex": '', "bibleWordIndex": '' },
  } as LoadedBibleType;

  const reducer = (state: LoadedBibleType, action: LoadedBibleType & LoadedBibleInfoType & LoadedBibleOtherType & WordIndexProps) => {
    switch (action.type) {
      case 'setBibleObject':
        return { ...state, bibleObject: action.bibleObject };
      case 'setTranslatedWordFromBibleObject':
        const copyOfBibleObject = { ...state.bibleObject, [state.bibleInfo.bibleBookName]: [
          ...state.bibleObject
            [state.bibleInfo.bibleBookName]
            [state.bibleInfo.bibleChapterIndex]
            [state.bibleInfo.bibleVerseIndex]
            [action.wordIndex]
            .splice(0, 1, action.newTranslatedWord)
          ]
        };
        return { ...state, bibleObject: {
          ...state.bibleObject,
          copyOfBibleObject
        }};
        // The code that doesn't work, replace line 39 to 51 for these code block
        // return { ...state, bibleObject: {
        //   ...state.bibleObject,
        //   [state.bibleInfo.bibleBookName]: [
        //     ...state.bibleObject
        //       [state.bibleInfo.bibleBookName]
        //       [state.bibleInfo.bibleChapterIndex]
        //       [state.bibleInfo.bibleVerseIndex]
        //       [action.wordIndex]
        //       .splice(0, 1, action.newTranslatedWord)
        //   ]
        // }};
      case 'setBibleFileName':
        return { ...state, bibleFileName: action.bibleFileName };
      case 'setBibleBookNames':
        return { ...state, bibleBookNames: action.bibleBookNames };
      case 'setBibleInfo':
        return { ...state, bibleInfo: action.bibleInfo };
      case 'setBibleBookNameFromBibleInfo':
        return { ...state, bibleInfo: { ...state.bibleInfo, bibleBookName: action.bibleBookName, bibleChapterIndex: '0', bibleVerseIndex: '0' } };
      case 'setBibleChapterIndexFromBibleInfo':
        return { ...state, bibleInfo: { ...state.bibleInfo, bibleChapterIndex: action.bibleChapterIndex, bibleVerseIndex: '0' } };
      case 'setBibleVerseIndexFromBibleInfo':
        return { ...state, bibleInfo: { ...state.bibleInfo, bibleVerseIndex: action.bibleVerseIndex } };
      case 'setBibleWordIndexFromBibleInfo':
        return { ...state, bibleInfo: { ...state.bibleInfo, bibleWordIndex: action.bibleWordIndex } };
      default:
        throw new Error('unexpected action type');
    }
  }

  const value = useReducer(reducer, loadedBibleObject);
  return (
    <LoadedBibleContext.Provider value={value}>
      {children}
    </LoadedBibleContext.Provider>
  );
};

export default LoadedBibleProvider;
