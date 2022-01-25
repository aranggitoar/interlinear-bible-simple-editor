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


// Get every original words from the verse.
// Accept an array of word components.
// Return them as an array of strings.
export function getOriginalWords(arrayOfWordComponents: Array<Array<string>>) {
  let arrayOfOriginalWords = [] as Array<string>;

  for (let i = 0; arrayOfWordComponents.length > i; i++) {
    arrayOfOriginalWords.push(arrayOfWordComponents[i][1]);
  }

  return arrayOfOriginalWords as Array<string>;
}
