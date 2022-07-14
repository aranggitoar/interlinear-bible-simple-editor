import { produce } from 'solid-js/store';
import { BibleData, setBibleData } from './BibleDataStore';
import * as T from 'types/BibleData';

export const setBibleObject = (newBibleObject: T.BibleDataObjectType) => {
  setBibleData({ ...BibleData, bibleObject: newBibleObject });
};

export const setTranslatedWordFromBibleObject = (
  wordIndex: number,
  newTranslatedWord: string
) =>
  setBibleData(
    produce((s) => {
      s.bibleObject[s.bibleInfo.bibleBookName][s.bibleInfo.bibleChapterIndex][
        s.bibleInfo.bibleVerseIndex
      ][wordIndex].splice(0, 1, newTranslatedWord);
    })
  );

export const setBibleFileName = (newBibleFileName: string) =>
  setBibleData({ ...BibleData, bibleFileName: newBibleFileName });

export const setBibleBookNames = (newBibleBookNames: Array<string>) =>
  setBibleData({ ...BibleData, bibleBookNames: newBibleBookNames });

export const setBibleInfo = (newBibleInfo: T.BibleDataInfoType) =>
  setBibleData({ ...BibleData, bibleInfo: newBibleInfo });

export const setBibleBookNameFromBibleInfo = (newBibleBookName: string) =>
  setBibleData({
    ...BibleData,
    bibleInfo: {
      ...BibleData.bibleInfo,
      bibleBookName: newBibleBookName,
      bibleChapterIndex: 0,
      bibleChapterCount: BibleData.bibleObject[newBibleBookName].length,
      bibleVerseIndex: 0,
      bibleVerseCount: BibleData.bibleObject[newBibleBookName][0].length,
      bibleWordCount: BibleData.bibleObject[newBibleBookName][0][0].length,
    },
  });

export const setBibleChapterIndexFromBibleInfo = (newBibleChapterIndex: number) =>
  setBibleData({
    ...BibleData,
    bibleInfo: {
      ...BibleData.bibleInfo,
      bibleChapterIndex: newBibleChapterIndex,
      bibleVerseIndex: 0,
      bibleVerseCount:
        BibleData.bibleObject[BibleData.bibleInfo.bibleBookName][newBibleChapterIndex]
          .length,
      bibleWordCount:
        BibleData.bibleObject[BibleData.bibleInfo.bibleBookName][newBibleChapterIndex][0]
          .length,
    },
  });

export const setBibleVerseIndexFromBibleInfo = (newBibleVerseIndex: number) =>
  setBibleData({
    ...BibleData,
    bibleInfo: {
      ...BibleData.bibleInfo,
      bibleVerseIndex: newBibleVerseIndex,
      bibleWordCount:
        BibleData.bibleObject[BibleData.bibleInfo.bibleBookName][
          BibleData.bibleInfo.bibleChapterIndex
        ][newBibleVerseIndex].length,
    },
  });

export const moveOneVerseForward = () => {
  let verseIndex = BibleData.bibleInfo.bibleVerseIndex;
  let chapterIndex = BibleData.bibleInfo.bibleChapterIndex;

  const maxVerseIndex =
    BibleData.bibleObject[BibleData.bibleInfo.bibleBookName][chapterIndex].length - 1;

  const maxChapterIndex =
    BibleData.bibleObject[BibleData.bibleInfo.bibleBookName].length - 1;

  if (chapterIndex <= maxChapterIndex && verseIndex <= maxVerseIndex) verseIndex += 1;

  // If the verse index is the max index + 1,
  // go forward to the next chapter.
  if (verseIndex === maxVerseIndex + 1)
    setBibleChapterIndexFromBibleInfo((chapterIndex += 1));

  if (verseIndex <= maxVerseIndex) setBibleVerseIndexFromBibleInfo(verseIndex);
};

export const moveOneVerseBackward = () => {
  let verseIndex = BibleData.bibleInfo.bibleVerseIndex;
  let chapterIndex = BibleData.bibleInfo.bibleChapterIndex;

  if (chapterIndex >= 0 && verseIndex >= 0) verseIndex -= 1;

  // If the verse index is negative,
  // go back to the last chapter.
  if (verseIndex === -1 && chapterIndex > 0) {
    const verseCount =
      BibleData.bibleObject[BibleData.bibleInfo.bibleBookName][chapterIndex].length + 1;
    verseIndex = verseCount;
    setBibleChapterIndexFromBibleInfo((chapterIndex -= 1));
  }

  if (chapterIndex >= 0) setBibleVerseIndexFromBibleInfo(verseIndex);
};

export const setBibleWordIndexFromBibleInfo = (newBibleWordIndex: number) =>
  setBibleData({
    ...BibleData,
    bibleInfo: {
      ...BibleData.bibleInfo,
      bibleWordIndex: newBibleWordIndex,
    },
  });

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
