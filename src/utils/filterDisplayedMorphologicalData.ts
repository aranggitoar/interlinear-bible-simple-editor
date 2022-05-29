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

// Parse the inserted morphological data.
export function morphHBParser(morphologicalData: string) {
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
      parsedMorphologicalData = "Unknown"
      break;
  }
  return parsedMorphologicalData;
}

export function byzMTParser(morphologicalData: string) {
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
      parsedMorphologicalData = "Unknown"
      break;
  }
  return parsedMorphologicalData;
}

// Filter the displayed morphological data.
export function filterDisplayedMorphologicalData(morphologicalData: string) {
  let parsedMorphologicalData = '' as string;

  // If file is not OSHB.
  if (morphologicalData[0] !== 'H') {
    if (/[-]/.test(morphologicalData)) {
      parsedMorphologicalData = byzMTParser(morphologicalData.split('-')[0]);
    } else {
      parsedMorphologicalData = byzMTParser(morphologicalData);
    }
    return parsedMorphologicalData;
  }

  // For special case of ByzMT morphological code which starts with H.
  if (morphologicalData === 'HEB') {
    return byzMTParser(morphologicalData);
  }

  // Get the main morphological data codes into an array.
  const mainMorphologicalDataPoints = morphologicalData.match(/[A-Z]/g);

  if (mainMorphologicalDataPoints !== null) {
    // Remove the first character, which is just an 'H' to identify it as Hebrew morphological data
    mainMorphologicalDataPoints.shift();

    if (mainMorphologicalDataPoints.length === 1) {
      parsedMorphologicalData = morphHBParser(mainMorphologicalDataPoints[0]);
    }

    if (mainMorphologicalDataPoints.length === 2) {
      // Parse the first character if it is V, because the second one would be the stem category
      if (mainMorphologicalDataPoints[1] === 'S' || mainMorphologicalDataPoints[0] === 'V') {
        parsedMorphologicalData = morphHBParser(mainMorphologicalDataPoints[0]);
      } else {
        parsedMorphologicalData = morphHBParser(mainMorphologicalDataPoints[1]);
      }
    }

    if (mainMorphologicalDataPoints.length === 3) {
      if (mainMorphologicalDataPoints[1] === 'T') {
        parsedMorphologicalData = morphHBParser(mainMorphologicalDataPoints[2]);
      } else {
        parsedMorphologicalData = morphHBParser(mainMorphologicalDataPoints[1]);
      }
    }

    if (mainMorphologicalDataPoints.length === 4) {
      parsedMorphologicalData = morphHBParser(mainMorphologicalDataPoints[2]);
    }
  }

  return parsedMorphologicalData;
}
