// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import {
  morphHBMorphologicalDataMock,
  byzMTMorphologicalDataMock,
} from 'utils/tests/morphologicalDataMock';
import { filterDisplayedMorphology } from './Morphology';

test('parse raw MorphHB morphological data', () => {
  const { rawData, result } = morphHBMorphologicalDataMock;

  result.forEach((code, index) => {
    expect(filterDisplayedMorphology(rawData[index])).toBe(code);
  });
});

test('parse unknown raw MorphHB morphological data', () => {
  expect(filterDisplayedMorphology('HZ')).toBe('Unknown');
});

test('parse raw ByzMT morphological data', () => {
  const { rawData, result } = byzMTMorphologicalDataMock;

  result.forEach((code, index) => {
    expect(filterDisplayedMorphology(rawData[index])).toBe(code);
  });
});

test('parse unknown raw ByzMT morphological data', () => {
  expect(filterDisplayedMorphology('J-GSM')).toBe('Unknown');
});
