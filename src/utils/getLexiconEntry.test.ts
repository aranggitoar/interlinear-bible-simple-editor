// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { getLexiconEntry } from 'utils/getLexiconEntry';
import { greekLexiconDataMock, hebrewLexiconDataMock } from './lexicalDataMock';

describe('getLexiconEntry', () => {
  test('get some Greek lexical data', () => {
    const { index, entry } = greekLexiconDataMock;

    entry.forEach((markup, i) => {
      expect(getLexiconEntry(index[i])[0]).toBe(markup);
    });
  });

  test('get some Hebrew lexical data', () => {
    const { index, entry } = hebrewLexiconDataMock;

    entry.forEach((markup, i) => {
      expect(getLexiconEntry(index[i])[0]).toBe(markup);
    });
  });
});
