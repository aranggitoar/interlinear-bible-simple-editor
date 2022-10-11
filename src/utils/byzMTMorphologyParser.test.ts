// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { simpleByzMTMorphologicalDataReference } from 'utils/references/morphologicalCodesReferences';
import { byzMTMorphologyParser } from 'utils/byzMTMorphologyParser';

// Function to turn each object key into a typed array member.
function typedKeys<ValueType>(object: ValueType): (keyof ValueType)[] {
  return Object.keys(object) as (keyof ValueType)[];
}

describe('byzMTMorphologyParser', () => {
  test('parse known ByzMT morphological code', () => {
    const reference = simpleByzMTMorphologicalDataReference;

    typedKeys(reference).forEach((code) => {
      expect(byzMTMorphologyParser(code)).toBe(reference[code]);
    });
  });

  test('parse unknown ByzMT morphological code', () => {
    expect(byzMTMorphologyParser('J')).toBe('Unknown');
  });
});
