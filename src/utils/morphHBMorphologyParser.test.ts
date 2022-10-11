// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { simpleMorphHBMorphologicalDataReference } from 'utils/references/morphologicalCodesReferences';
import { morphHBMorphologyParser } from 'utils/morphHBMorphologyParser';

// Function to turn each object key into a typed array member.
function typedKeys<ValueType>(object: ValueType): (keyof ValueType)[] {
  return Object.keys(object) as (keyof ValueType)[];
}

describe('morphHBMorphologyParser', () => {
  test('parse known MorphHB morphological code', () => {
    const reference = simpleMorphHBMorphologicalDataReference;

    typedKeys(reference).forEach((code) => {
      expect(morphHBMorphologyParser(code)).toBe(reference[code]);
    });
  });

  test('parse unknown MorphHB morphological code', () => {
    expect(morphHBMorphologyParser('Z')).toBe('Unknown');
  });
});
