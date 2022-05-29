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

import { simpleMorphHBMorphologicalDataReference, simpleByzMTMorphologicalDataReference} from 'utils/references/morphologicalCodesReferences';
import { morphHBParser, byzMTParser, filterDisplayedMorphologicalData } from 'utils/filterDisplayedMorphologicalData';
import { morphHBMorphologicalDataMock, byzMTMorphologicalDataMock } from 'utils/tests/morphologicalDataMock';

function typedKeys<ValueType>(object: ValueType): (keyof ValueType)[] {
  return Object.keys(object) as (keyof ValueType)[];
}

test('parse known MorphHB morphological code', () => {
  const reference = simpleMorphHBMorphologicalDataReference;

  typedKeys(reference).forEach(code => {
    expect(morphHBParser(code)).toBe(reference[code]);
  })
});

test ('parse unknown MorphHB morphological code', () => {
  expect(morphHBParser("Z")).toBe("Unknown");
});

test('parse known ByzMT morphological code', () => {
  const reference = simpleByzMTMorphologicalDataReference;

  typedKeys(reference).forEach(code => {
    expect(byzMTParser(code)).toBe(reference[code]);
  })
});

test ('parse unknown ByzMT morphological code', () => {
  expect(byzMTParser("J")).toBe("Unknown");
});

test('parse raw MorphHB morphological data', () => {
  const { rawData , result } = morphHBMorphologicalDataMock;

  result.forEach((code, index) => {
    expect(filterDisplayedMorphologicalData(rawData[index])).toBe(code)
  })
});

test('parse unknown raw MorphHB morphological data', () => {
  expect(filterDisplayedMorphologicalData("HZ")).toBe("Unknown");
});

test('parse raw ByzMT morphological data', () => {
  const { rawData , result } = byzMTMorphologicalDataMock;

  result.forEach((code, index) => {
    expect(filterDisplayedMorphologicalData(rawData[index])).toBe(code)
  })
});

test('parse unknown raw ByzMT morphological data', () => {
  expect(filterDisplayedMorphologicalData("J-GSM")).toBe("Unknown");
});
