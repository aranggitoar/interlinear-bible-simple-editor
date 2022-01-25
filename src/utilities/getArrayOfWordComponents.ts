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


// Get the whole verse.
// Accept an empty nested array of strings,
// and a stringified array from the Bible object state.
// Return them as a nested arrays of strings.
export function getArrayOfWordComponents(chosenVerseContent: Array<string>) {
  const arrayOfVerseComponents = chosenVerseContent;
  let arrayOfWordComponents = [] as Array<Array<string>>;

  for (let i = 0; arrayOfVerseComponents.length > i; i += 4) {
    if (i > 4) {
      i + 1
    }

    let temp = [
      arrayOfVerseComponents[i],
      arrayOfVerseComponents[i+1],
      arrayOfVerseComponents[i+2],
      arrayOfVerseComponents[i+3],
    ] as Array<string>;

    arrayOfWordComponents.push(temp);
  }

  return arrayOfWordComponents as Array<Array<string>>;
}
