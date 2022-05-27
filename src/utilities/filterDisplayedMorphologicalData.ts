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


// Object of main morphological data code as keys and parsed as values.
const simpleMorphologicalDataReference = {
  A: "Adjective",
  C: "Conjunction",
  D: "Adverb",
  N: "Noun",
  P: "Pronoun",
  R: "Preposition",
  T: "Particle",
  V: "Verb",
}

// Unique morphological codes of the Byzantine Majority Text
// References:
// https://github.com/byztxt/robinson-documentation/blob/master/doc/DECLINE.COD
// https://github.com/byztxt/robinson-documentation/blob/master/doc/PARSING.COD
const simpleByzMTMorphologicalDataReference = {
  A: "Adjective",
  N: "Noun",
  P: "Pronoun",
  T: "Definite Article",
  V: "Verb",
  ADV: "Adverb",
  ARAM: "Aramaic Transliteration",
  CONJ: "Conjunction",
  COND: "Conditional Particle",
  HEB: "Hebrew Transliteration",
  INJ: "Interjection",
  PREP: "Preposition",
}

// Parse the inserted morphological data.
function parser(morphologicalData: string) {
  let parsedMorphologicalData = morphologicalData;
    switch(parsedMorphologicalData) {
      case 'A':
        parsedMorphologicalData = simpleMorphologicalDataReference['A'];
        break;
      case 'C':
        parsedMorphologicalData = simpleMorphologicalDataReference['C'];
        break;
      case 'D':
        parsedMorphologicalData = simpleMorphologicalDataReference['D'];
        break;
      case 'N':
        parsedMorphologicalData = simpleMorphologicalDataReference['N'];
        break;
      case 'P':
        parsedMorphologicalData = simpleMorphologicalDataReference['P'];
        break;
      case 'R':
        parsedMorphologicalData = simpleMorphologicalDataReference['R'];
        break;
      case 'T':
        parsedMorphologicalData = simpleMorphologicalDataReference['T'];
        break;
      case 'V':
        parsedMorphologicalData = simpleMorphologicalDataReference['V'];
        break;
    }
  return parsedMorphologicalData;
}

function byzMTParser(morphologicalData: string) {
  let parsedMorphologicalData = morphologicalData;
    switch(parsedMorphologicalData) {
      case 'ADV':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['ADV'];
        break;
      case 'ARAM':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['ARAM'];
        break;
      case 'CONJ':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['CONJ'];
        break;
      case 'COND':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['COND'];
        break;
      case 'HEB':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['HEB'];
        break;
      case 'INJ':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['INJ'];
        break;
      case 'PREP':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['PREP'];
        break;
      case 'C': // Reciprocal pronoun
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['P'];
        break;
      case 'D': // Demonstrative pronoun
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['P'];
        break;
      case 'F': // Reflexive pronoun
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['P'];
        break;
      case 'I': // Interrogative pronoun
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['P'];
        break;
      case 'K': // Correlative pronoun
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['P'];
        break;
      case 'N':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['N'];
        break;
      case 'P':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['P'];
        break;
      case 'Q': // Correlative or interrogative pronoun
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['P'];
        break;
      case 'R': // Relative pronoun
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['P'];
        break;
      case 'A':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['A'];
        break;
      case 'S': // Possesive adjective
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['A'];
        break;
      case 'T':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['T'];
        break;
      case 'V':
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['V'];
        break;
      case 'X': // Indefinite pronoun
        parsedMorphologicalData = simpleByzMTMorphologicalDataReference['P'];
        break;
    }
  return parsedMorphologicalData;
}

// Filter the displayed morphological data.
export function filterDisplayedMorphologicalData(morphologicalData: string) {
  let parsedMorphologicalData: string;
  console.log(morphologicalData);

  // If file is not OSHB.
  if (morphologicalData[0] !== "H") {
    if (/[-]/.test(morphologicalData)) {
      parsedMorphologicalData = byzMTParser(morphologicalData[0])
    } else {
      parsedMorphologicalData = byzMTParser(morphologicalData)
    }
    console.log(parsedMorphologicalData)
    return parsedMorphologicalData;
  }

  // Get the main morphological data codes into an array.
  let mainMorphologicalDataPoints = morphologicalData.match(/[A-Z]/g);
  mainMorphologicalDataPoints.shift();

  if (mainMorphologicalDataPoints.length === 1) {
    parsedMorphologicalData = parser(mainMorphologicalDataPoints[0]);
  }

  if (mainMorphologicalDataPoints.length === 2) {
    if (mainMorphologicalDataPoints[1] === 'S') {
      parsedMorphologicalData = parser(mainMorphologicalDataPoints[0]);
    } else {
      parsedMorphologicalData = parser(mainMorphologicalDataPoints[1]);
    }
  }

  if (mainMorphologicalDataPoints.length === 3) {
    if (mainMorphologicalDataPoints[1] === 'T') {
      parsedMorphologicalData = parser(mainMorphologicalDataPoints[2]);
    } else {
      parsedMorphologicalData = parser(mainMorphologicalDataPoints[1]);
    }
  }

  return parsedMorphologicalData;
}
