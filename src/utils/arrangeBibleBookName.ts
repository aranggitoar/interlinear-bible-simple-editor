// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { correctlyOrderedBibleBookNameReference } from './references/correctlyOrderedBibleBookNameReferences';

// Arrange the array of Bible book names.
export function arrangeBibleBookName(bibleBookNames: Array<string>) {
  const orderedBibleBookNames = [] as Array<string>;

  for (let i = 0; correctlyOrderedBibleBookNameReference.length > i; i++) {
    if (
      bibleBookNames.find((name) =>
        name.match(correctlyOrderedBibleBookNameReference[i])
      ) !== undefined
    ) {
      orderedBibleBookNames.push(correctlyOrderedBibleBookNameReference[i]);
    }
  }

  return orderedBibleBookNames;
}
