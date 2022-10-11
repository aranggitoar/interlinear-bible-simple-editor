// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { createStore } from 'solid-js/store';
import * as T from 'types/BibleData';

export const [bibleData, setBibleData] = createStore({
  bibleObject: {},
  bibleFileName: '',
  bibleBookNames: [],
  bibleInfo: {
    bibleBookName: '',
    bibleChapterCount: NaN,
    bibleChapterIndex: NaN,
    bibleVerseCount: NaN,
    bibleVerseIndex: NaN,
    bibleWordCount: NaN,
    bibleWordIndex: NaN,
  },
} as T.BibleDataType);
