// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import * as r from 'utils/references/morphologicalCodesReferences';

const verbMorphHBMorphParser = (morphData: string): Array<Array<string>> => {
  let parsedMorphData = [[], []] as Array<Array<string>>;

  parsedMorphData[0].push(r.verbStemMorphHBMorphRef[morphData[0]]);
  parsedMorphData[1].push('Akar ' + morphData[0]);

  parsedMorphData[0].push(r.verbTypeMorphHBMorphRef[morphData[1]]);
  parsedMorphData[1].push('Tipe ' + morphData[1]);

  parsedMorphData[0].push(r.verbPersonMorphHBMorphRef[morphData[2]]);
  parsedMorphData[1].push('Persona ' + morphData[2]);

  parsedMorphData[0].push(r.verbGenderMorphHBMorphRef[morphData[3]]);
  parsedMorphData[1].push('Gender ' + morphData[3]);

  parsedMorphData[0].push(r.verbNumberMorphHBMorphRef[morphData[4]]);
  parsedMorphData[1].push('Jumlah ' + morphData[4]);

  if (morphData[5] !== undefined) {
    parsedMorphData[0].push(r.verbStateMorphHBMorphRef[morphData[5]]);
    parsedMorphData[1].push('Keadaan ' + morphData[5]);
  }

  return parsedMorphData;
};

const otherMorphHBMorphParser = (
  posCode: string,
  morphData: string
): Array<Array<string>> => {
  let parsedMorphData = [[], []] as Array<Array<string>>;

  if (posCode === 'R') {
    if (morphData === undefined) {
      return parsedMorphData;
    } else {
      return [[r.prepositionTypeMorphHBMorphRef[morphData]], ['Tipe ' + morphData]];
    }
  }

  if (posCode === 'T') {
    return [[r.particleTypeMorphHBMorphRef[morphData]], ['Tipe ' + morphData]];
  }

  if (posCode === 'A') {
    parsedMorphData[0].push(r.adjectiveTypeMorphHBMorphRef[morphData[0]]);
    parsedMorphData[1].push('Tipe ' + morphData[0]);
    morphData = morphData.replace(morphData[0], '');
  }

  if (posCode === 'N') {
    parsedMorphData[0].push(r.nounTypeMorphHBMorphRef[morphData[0]]);
    parsedMorphData[1].push('Tipe ' + morphData[0]);
    morphData = morphData.replace(morphData[0], '');
  }

  if (posCode === 'P') {
    parsedMorphData[0].push(r.pronounTypeMorphHBMorphRef[morphData[0]]);
    parsedMorphData[1].push('Tipe ' + morphData[0]);
    morphData = morphData.replace(morphData[0], '');

    parsedMorphData[0].push(r.otherPersonMorphHBMorphRef[morphData[0]]);
    parsedMorphData[1].push('Persona ' + morphData[0]);
    morphData = morphData.replace(morphData[0], '');
  }

  if (posCode === 'S') {
    parsedMorphData[0].push(r.suffixTypeMorphHBMorphRef[morphData[0]]);
    parsedMorphData[1].push('Tipe ' + morphData[0]);
    morphData = morphData.replace(morphData[0], '');

    parsedMorphData[0].push(r.otherPersonMorphHBMorphRef[morphData[0]]);
    parsedMorphData[1].push('Persona ' + morphData[0]);
    morphData = morphData.replace(morphData[0], '');
  }

  parsedMorphData[0].push(r.otherGenderMorphHBMorphRef[morphData[0]]);
  parsedMorphData[1].push('Gender ' + morphData[0]);

  parsedMorphData[0].push(r.otherNumberMorphHBMorphRef[morphData[1]]);
  parsedMorphData[1].push('Jumlah ' + morphData[1]);

  if (posCode === 'A' || 'N') {
    if (morphData[2] !== undefined) {
      parsedMorphData[0].push(r.otherStateMorphHBMorphRef[morphData[2]]);
      parsedMorphData[1].push('Keadaan ' + morphData[2]);
    }
  }

  return parsedMorphData;
};

// Parse the OSHB's (Westminster Leningrad Codex) morphological data.
export const morphHBMorphParser = (
  morphData: string,
  parsedMorph: Array<string | Array<string> | Array<Array<string>>>
): Array<string | Array<string> | Array<Array<string>>> => {
  // Remove the first character, which is just an 'H' to identify it as Hebrew morphological data
  morphData = morphData.replace(morphData[0], '');

  // If it is a simple POS, which doesn't have any features, just add the
  // parsed POS and its POS code.
  if (r.simplePOSMorphHBMorphRef[morphData] !== undefined) {
    parsedMorph.push(r.simplePOSMorphHBMorphRef[morphData]);
    parsedMorph.push(morphData);
  } else {
    // Try to split the POS code, as there might be more than one POS code
    // separated by a '/'.
    let splitData = morphData.split('/');
    let parsedPOS = '';

    const tmp = [[], []] as Array<Array<string>>;
    const tmpB = [[], []] as Array<Array<Array<string>>>;
    for (let i = 0; i < splitData.length; i++) {
      if (r.simplePOSMorphHBMorphRef[splitData[i][0]] !== undefined) {
        tmp[0].push(r.simplePOSMorphHBMorphRef[splitData[i][0]]);
        tmp[1].push(splitData[i]);
      } else {
        tmp[0].push(r.regularPOSMorphHBMorphRef[splitData[i][0]]);
        tmp[1].push(splitData[i]);
      }

      if (parsedPOS !== '') {
        parsedPOS +=
          ' / ' +
          (r.regularPOSMorphHBMorphRef[splitData[i][0]] === undefined
            ? r.simplePOSMorphHBMorphRef[splitData[i][0]]
            : r.regularPOSMorphHBMorphRef[splitData[i][0]]);
      } else {
        parsedPOS +=
          r.regularPOSMorphHBMorphRef[splitData[i][0]] === undefined
            ? r.simplePOSMorphHBMorphRef[splitData[i][0]]
            : r.regularPOSMorphHBMorphRef[splitData[i][0]];
      }

      splitData[i] = splitData[i].replace(splitData[i][0], '');

      if (splitData[i] !== (undefined || '')) {
        if (tmp[1][i][0] === 'V') {
          const tmpC = verbMorphHBMorphParser(splitData[i]);
          tmpB[0].push(tmpC[0]);
          tmpB[1].push(tmpC[1]);
        } else {
          const tmpC = otherMorphHBMorphParser(tmp[1][i][0] as string, splitData[i]);
          tmpB[0].push(tmpC[0]);
          tmpB[1].push(tmpC[1]);
        }
      } else {
        tmpB[0].push([]);
        tmpB[1].push([]);
      }
    }
    parsedMorph.push(tmp[0]);
    parsedMorph.push(tmp[1]);
    parsedMorph.push(tmpB[0]);
    parsedMorph.push(tmpB[1]);
    parsedMorph.push(parsedPOS);
  }

  return parsedMorph;
};
