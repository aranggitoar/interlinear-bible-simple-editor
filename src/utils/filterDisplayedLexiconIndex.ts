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
