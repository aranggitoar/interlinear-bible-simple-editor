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

import { simpleMorphHBMorphologicalDataReference } from 'utils/references/morphologicalCodesReferences';

// Parse the OSHB's (Westminster Leningrad Codex) morphological data.
export const morphHBMorphologyParser = (morphologicalData: string):string => {
  let parsedMorphologicalData = morphologicalData;
  switch (parsedMorphologicalData) {
    case 'A':
      parsedMorphologicalData = simpleMorphHBMorphologicalDataReference.A;
      break;
    case 'C':
      parsedMorphologicalData = simpleMorphHBMorphologicalDataReference.C;
      break;
    case 'D':
      parsedMorphologicalData = simpleMorphHBMorphologicalDataReference.D;
      break;
    case 'N':
      parsedMorphologicalData = simpleMorphHBMorphologicalDataReference.N;
      break;
    case 'P':
      parsedMorphologicalData = simpleMorphHBMorphologicalDataReference.P;
      break;
    case 'R':
      parsedMorphologicalData = simpleMorphHBMorphologicalDataReference.R;
      break;
    case 'T':
      parsedMorphologicalData = simpleMorphHBMorphologicalDataReference.T;
      break;
    case 'V':
      parsedMorphologicalData = simpleMorphHBMorphologicalDataReference.V;
      break;
    default:
      parsedMorphologicalData = 'Unknown';
      break;
  }
  return parsedMorphologicalData;
}
