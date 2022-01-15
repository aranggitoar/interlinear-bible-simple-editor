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

const primaryMorphologicalData = ['A', 'D', 'N', 'P', 'V'];

const secondaryMorphologicalData = ['C', 'R', 'T'];

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

// Filter the displayed morphological data.
export function filterDisplayedMorphologicalData(morphologicalData: string) {
  // Get the main morphological data codes into an array.
  let mainMorphologicalDataPoints = morphologicalData.match(/[A-Z]/g);
  mainMorphologicalDataPoints.shift();

  let parsedMorphologicalData: string;

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

  if (morphologicalData.split('/').length === 3) {
    parsedMorphologicalData = parser(mainMorphologicalDataPoints[1]);
  }

  return parsedMorphologicalData;
}
