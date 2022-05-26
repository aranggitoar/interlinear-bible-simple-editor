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


// Get the translation result from the HTML.
export function getTranslationResult() {
  let verseLength = document.getElementsByClassName('row-target-language').length as number;
  let arrayOfResult = [] as Array<string>;
  for (let i = 0; verseLength > i; i++) {
    // @ts-ignore // property exists
    let value = document.getElementById('target-language-' + i).value as string;
    if (value === "") {
      arrayOfResult.push("");
    } else {
      arrayOfResult.push(value);
    }
  }
  return arrayOfResult;
}
