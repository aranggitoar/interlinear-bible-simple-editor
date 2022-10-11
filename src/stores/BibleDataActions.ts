// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { produce } from 'solid-js/store';
import { bibleData, setBibleData } from './BibleDataStore';
import * as T from 'types/BibleData';

export const setBibleObject = (newBibleObject: T.BibleDataObjectType) => {
  setBibleData({ ...bibleData, bibleObject: newBibleObject });
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
  setBibleData({ ...bibleData, bibleFileName: newBibleFileName });

export const setBibleBookNames = (newBibleBookNames: Array<string>) =>
  setBibleData({ ...bibleData, bibleBookNames: newBibleBookNames });

export const setBibleInfo = (newBibleInfo: T.BibleDataInfoType) =>
  setBibleData({ ...bibleData, bibleInfo: newBibleInfo });

export const setBibleBookNameFromBibleInfo = (newBibleBookName: string) =>
  setBibleData({
    ...bibleData,
    bibleInfo: {
      ...bibleData.bibleInfo,
      bibleBookName: newBibleBookName,
      bibleChapterIndex: 0,
      bibleChapterCount: bibleData.bibleObject[newBibleBookName].length,
      bibleVerseIndex: 0,
      bibleVerseCount: bibleData.bibleObject[newBibleBookName][0].length,
      bibleWordIndex: 0,
      bibleWordCount: bibleData.bibleObject[newBibleBookName][0][0].length,
    },
  });

export const setBibleChapterIndexFromBibleInfo = (newBibleChapterIndex: number) =>
  setBibleData({
    ...bibleData,
    bibleInfo: {
      ...bibleData.bibleInfo,
      bibleChapterIndex: newBibleChapterIndex,
      bibleVerseIndex: 0,
      bibleVerseCount:
        bibleData.bibleObject[bibleData.bibleInfo.bibleBookName][newBibleChapterIndex]
          .length,
      bibleWordIndex: 0,
      bibleWordCount:
        bibleData.bibleObject[bibleData.bibleInfo.bibleBookName][newBibleChapterIndex][0]
          .length,
    },
  });

export const setBibleVerseIndexFromBibleInfo = (newBibleVerseIndex: number) =>
  setBibleData({
    ...bibleData,
    bibleInfo: {
      ...bibleData.bibleInfo,
      bibleVerseIndex: newBibleVerseIndex,
      bibleWordIndex: 0,
      bibleWordCount:
        bibleData.bibleObject[bibleData.bibleInfo.bibleBookName][
          bibleData.bibleInfo.bibleChapterIndex
        ][newBibleVerseIndex].length,
    },
  });

export const moveOneVerseForward = () => {
  let verseIndex = bibleData.bibleInfo.bibleVerseIndex;
  let chapterIndex = bibleData.bibleInfo.bibleChapterIndex;

  const maxVerseIndex =
    bibleData.bibleObject[bibleData.bibleInfo.bibleBookName][chapterIndex].length - 1;

  const maxChapterIndex =
    bibleData.bibleObject[bibleData.bibleInfo.bibleBookName].length - 1;

  if (chapterIndex <= maxChapterIndex && verseIndex <= maxVerseIndex) verseIndex += 1;

  // If the verse index is the max index + 1,
  // go forward to the next chapter.
  if (verseIndex === maxVerseIndex + 1)
    setBibleChapterIndexFromBibleInfo((chapterIndex += 1));

  if (verseIndex <= maxVerseIndex) setBibleVerseIndexFromBibleInfo(verseIndex);
};

export const moveOneVerseBackward = () => {
  let verseIndex = bibleData.bibleInfo.bibleVerseIndex;
  let chapterIndex = bibleData.bibleInfo.bibleChapterIndex;

  if (chapterIndex >= 0 && verseIndex >= 0) verseIndex -= 1;

  // If the verse index is negative,
  // go back to the last chapter.
  if (verseIndex === -1 && chapterIndex > 0) {
    const verseCount =
      bibleData.bibleObject[bibleData.bibleInfo.bibleBookName][chapterIndex].length + 1;
    verseIndex = verseCount;
    setBibleChapterIndexFromBibleInfo((chapterIndex -= 1));
  }

  if (chapterIndex >= 0) setBibleVerseIndexFromBibleInfo(verseIndex);
};

export const setBibleWordIndexFromBibleInfo = (newBibleWordIndex: number) =>
  setBibleData({
    ...bibleData,
    bibleInfo: {
      ...bibleData.bibleInfo,
      bibleWordIndex: newBibleWordIndex,
    },
  });
