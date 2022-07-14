import { simpleByzMTMorphologicalDataReference } from 'utils/references/morphologicalCodesReferences';

export const byzMTMorphologyParser = (morphologicalData: string): string => {
  let parsedMorphologicalData = morphologicalData;
  switch (parsedMorphologicalData) {
    case 'ADV':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.ADV;
      break;
    case 'ARAM':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.ARAM;
      break;
    case 'CONJ':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.CONJ;
      break;
    case 'COND':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.COND;
      break;
    case 'HEB':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.HEB;
      break;
    case 'INJ':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.INJ;
      break;
    case 'PREP':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.PREP;
      break;
    case 'PRT':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.PRT;
      break;
    case 'C': // Reciprocal pronoun
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.P;
      break;
    case 'D': // Demonstrative pronoun
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.P;
      break;
    case 'F': // Reflexive pronoun
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.P;
      break;
    case 'I': // Interrogative pronoun
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.P;
      break;
    case 'K': // Correlative pronoun
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.P;
      break;
    case 'N':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.N;
      break;
    case 'P':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.P;
      break;
    case 'Q': // Correlative or interrogative pronoun
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.P;
      break;
    case 'R': // Relative pronoun
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.P;
      break;
    case 'A':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.A;
      break;
    case 'S': // Possesive adjective
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.A;
      break;
    case 'T':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.T;
      break;
    case 'V':
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.V;
      break;
    case 'X': // Indefinite pronoun
      parsedMorphologicalData = simpleByzMTMorphologicalDataReference.P;
      break;
    default:
      parsedMorphologicalData = 'Unknown';
      break;
  }
  return parsedMorphologicalData;
};

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
