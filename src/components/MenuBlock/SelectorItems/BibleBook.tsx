// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { SimpleSelect, SimpleOption } from '@hope-ui/solid';
import { For } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { correctlyOrderedBibleBookNameReferenceID } from 'utils/references/correctlyOrderedBibleBookNameReferences';
import { setBibleBookNameFromBibleInfo } from 'stores/BibleDataActions';
import { bibleData } from 'stores/BibleDataStore';

const defaultBibleBookSelectorText = 'Pilih Kitab';

export default (): JSX.Element => (
  <SimpleSelect
    onChange={setBibleBookNameFromBibleInfo}
    placeholder={defaultBibleBookSelectorText}
    value={bibleData.bibleInfo.bibleBookName}
  >
    <SimpleOption disabled value="undefined">
      {defaultBibleBookSelectorText}
    </SimpleOption>
    <For each={bibleData.bibleBookNames}>
      {(item, i) => (
        <SimpleOption value={item}>
          {correctlyOrderedBibleBookNameReferenceID[i()]}
        </SimpleOption>
      )}
    </For>
  </SimpleSelect>
);
