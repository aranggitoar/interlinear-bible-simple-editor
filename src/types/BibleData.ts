// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

export type BibleDataInfoType = {
  bibleBookName: string;
  bibleChapterCount: number;
  bibleChapterIndex: number;
  bibleVerseCount: number;
  bibleVerseIndex: number;
  bibleWordCount: number;
  bibleWordIndex: number; // Only for tracking translated words.
};

export type BibleDataObjectType = {
  [key: string]: Array<Array<Array<Array<string>>>>;
};

export type BibleDataType = {
  bibleObject: BibleDataObjectType;
  bibleFileName: string;
  bibleBookNames: Array<string>;
  bibleInfo: BibleDataInfoType;
};
