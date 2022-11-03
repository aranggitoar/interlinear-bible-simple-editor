// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

export type VerseReferenceInfoType = {
  wordsInVerse: number;
  bibleBookName: string;
  bibleChapterIndex: number;
  bibleVerseIndex: number;
  currentlyDisplayedLexiconEntry?: string;
};

export type ReferenceDataType = {
  title: string;
  content: string | VerseReferenceInfoType;
  uuid: string;
};
