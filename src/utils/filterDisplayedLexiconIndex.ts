// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

// Filter the displayed strongs data.
export const filterDisplayedLexiconIndex = (data: string): string => {
  let filteredLexicon = data as string;

  if (filteredLexicon[0] === 'G') {
    if (filteredLexicon.indexOf('&') > -1) {
      filteredLexicon = filteredLexicon.replace('&', ' & ');
    }
    filteredLexicon = filteredLexicon.replace(/[G]/g, '');
  } else if (filteredLexicon[0] === 'H') {
    // The Lexicon number for OSHB is always with a forward slash, but the Lexicon number is always last
    if (/\//.test(data)) {
      const temp = data.split('/');
      const [, posTwo, posThree] = temp;
      if (temp.length === 3) {
        filteredLexicon = posThree;
      } else {
        filteredLexicon = posTwo;
      }
    }
    filteredLexicon = filteredLexicon.replace('H', '');
  }

  return filteredLexicon;
};
