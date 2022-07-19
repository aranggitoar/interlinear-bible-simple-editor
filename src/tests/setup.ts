import nT from 'assets/data/byzparsed.json';
import { arrangeBibleBookName } from 'utils/arrangeBibleBookName';
import { setBibleData } from 'stores/bibleDataStore';
import { setGlobalSettings } from 'stores/globalSettingsStore';
import type * as T from 'types/bibleData';

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
