// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import nT from 'assets/data/byzparsed.json';
import { arrangeBibleBookName } from 'utils/arrangeBibleBookName';
import { setBibleData } from 'stores/BibleDataStore';
import { setGlobalSettings } from 'stores/globalSettingsStore';
import type * as T from 'types/BibleData';

export default () => {
  setGlobalSettings({
    viewBibleBy: 'verses',
  });
  setBibleData({
    bibleObject: nT,
    bibleFileName: '',
    bibleBookNames: arrangeBibleBookName(Object.keys(nT)),
    bibleInfo: {
      bibleBookName: 'Matthew',
      bibleChapterCount: (nT as T.BibleDataObjectType)['Matthew'].length,
      bibleChapterIndex: 0,
      bibleVerseCount: (nT as T.BibleDataObjectType)['Matthew'][0].length,
      bibleVerseIndex: 0,
      bibleWordCount: (nT as T.BibleDataObjectType)['Matthew'][0][0].length,
      bibleWordIndex: 0,
    },
  } as T.BibleDataType);
};
