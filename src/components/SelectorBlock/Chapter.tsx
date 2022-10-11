// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { SimpleSelect, SimpleOption } from '@hope-ui/solid';
import { JSX } from 'solid-js/jsx-runtime';
import { setBibleChapterIndexFromBibleInfo } from 'stores/BibleDataActions';
import { bibleData } from 'stores/BibleDataStore';

const defaultBibleChapterSelectorText = 'Pilih pasal';

export default (): JSX.Element => (
  <SimpleSelect
    onChange={(v) => {
      setBibleChapterIndexFromBibleInfo(v);
    }}
    placeholder={defaultBibleChapterSelectorText}
    value={bibleData.bibleInfo.bibleChapterIndex}
    style={{
      width: '7.75rem',
    }}
  >
    <SimpleOption disabled value={NaN}>
      {defaultBibleChapterSelectorText}
    </SimpleOption>
    {() => {
      const jsxMarkup = [];
      for (let i = 0; i < bibleData.bibleInfo.bibleChapterCount; i++) {
        jsxMarkup.push(<SimpleOption value={i}>{i + 1}</SimpleOption>);
      }
      return jsxMarkup;
    }}
  </SimpleSelect>
);
