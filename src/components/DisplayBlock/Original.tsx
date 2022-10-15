// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { Text } from '@hope-ui/solid';
import { bibleData } from 'stores/BibleDataStore';

export default (props: Record<string, number | string>) => {
  // Filter the displayed original language data.
  const filterDisplayedOriginal = (data: string): string => {
    let filteredOriginal = data;
    if (/\//.test(data)) {
      filteredOriginal = data.replace(/\//g, '');
    }
    return filteredOriginal;
  };

  const original =
    bibleData.bibleObject[props.bibleBookName as string][
      props.bibleChapterIndex as number
    ][props.bibleVerseIndex as number][props.wordIndex as number][1];

  return (
    <Text fontSize="1.75rem" m="0.3rem 0">
      {filterDisplayedOriginal(original)}
    </Text>
  );
};
