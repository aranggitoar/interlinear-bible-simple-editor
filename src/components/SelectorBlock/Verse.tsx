// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { SimpleSelect, SimpleOption } from '@hope-ui/solid';
import { JSX } from 'solid-js/jsx-runtime';
import { setBibleVerseIndexFromBibleInfo } from 'stores/BibleDataActions';
import { bibleData } from 'stores/BibleDataStore';

const defaultBibleVerseSelectorText = 'Pilih ayat';

export default (): JSX.Element => (
  <SimpleSelect
    onChange={setBibleVerseIndexFromBibleInfo}
    placeholder={defaultBibleVerseSelectorText}
    value={bibleData.bibleInfo.bibleVerseIndex}
    style={{
      width: '7.75rem',
    }}
  >
    <SimpleOption disabled value="undefined">
      {defaultBibleVerseSelectorText}
    </SimpleOption>
    {() => {
      const jsxMarkup = [];
      for (let i = 0; i < bibleData.bibleInfo.bibleVerseCount; i++) {
        jsxMarkup.push(<SimpleOption value={i}>{i + 1}</SimpleOption>);
      }
      return jsxMarkup;
    }}
  </SimpleSelect>
);
