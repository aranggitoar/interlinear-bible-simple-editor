// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import * as r from 'utils/references/morphologicalCodesReferences';

// Parse ByzMT verb morphological codes.
const verbByzMTMorphParser = (morphData: Array<string>): Array<Array<string>> => {
  let parsedMorphData = [[], []] as Array<Array<string>>;

  // Parse the tense, voice and mood.
  if (morphData.length >= 1) {
    let tmp = morphData[0];

    if (tmp.length === 4) {
      parsedMorphData[0].push(r.verbTenseByzMTMorphRef[tmp[0] + tmp[1]]);
      parsedMorphData[1].push('Aspek ' + tmp[0] + tmp[1]);
      tmp = tmp.replace(tmp[0] + tmp[1], '');
    }

    if (tmp.length === 3) {
      parsedMorphData[0].push(r.verbTenseByzMTMorphRef[tmp[0]]);
      parsedMorphData[1].push('Aspek ' + tmp[0]);
      tmp = tmp.replace(tmp[0], '');
    }

    parsedMorphData[0].push(r.verbVoiceByzMTMorphRef[tmp[0]]);
    parsedMorphData[1].push('Diatesis ' + tmp[0]);

    parsedMorphData[0].push(r.verbMoodByzMTMorphRef[tmp[1]]);
    parsedMorphData[1].push('Modus ' + tmp[1]);
  }

  // Parse the person and number or case, number and gender if there are 2 or
  // more data points.
  if (morphData.length >= 2) {
    const tmp = morphData[1];

    // If there are 3 characters, it must be case, number and gender.
    if (tmp.length === 3) {
      parsedMorphData[0].push(r.verbCaseByzMTMorphRef[tmp[0]]);
      parsedMorphData[1].push('Kasus ' + tmp[0]);

      parsedMorphData[0].push(r.verbNumberByzMTMorphRef[tmp[1]]);
      parsedMorphData[1].push('Jumlah ' + tmp[1]);

      parsedMorphData[0].push(r.verbGenderByzMTMorphRef[tmp[2]]);
      parsedMorphData[1].push('Gender ' + tmp[2]);
    }

    // If there are 2 characters, it must be person and number.
    if (tmp.length === 2) {
      parsedMorphData[0].push(r.verbPersonByzMTMorphRef[tmp[0]]);
      parsedMorphData[1].push('Persona ' + tmp[0]);

      parsedMorphData[0].push(r.verbNumberByzMTMorphRef[tmp[1]]);
      parsedMorphData[1].push('Jumlah' + tmp[1]);
    }
  }

  // Parse the extra code.
  if (morphData.length === 3) {
    parsedMorphData[0].push(r.verbExtraByzMTMorphRef.morphData[2]);
    parsedMorphData[1].push(morphData[2]);
  }

  return parsedMorphData;
};

// Parse ByzMT other than verb morphological codes.
const nonVerbByzMTMorphParser = (morphData: Array<string>): Array<Array<string>> => {
  let parsedMorphData = [[], []] as Array<Array<string>>;

  // Parse the case, number and gender OR suffix for some adjectives, adverbs,
  // particles and conjunctions.
  if (morphData.length >= 1) {
    let tmp = morphData[0];

    if (tmp.length === 1) {
      parsedMorphData[0].push(r.declinedSuffixByzMTMorphRef[tmp[0]]);
      parsedMorphData[1].push('Fitur ' + tmp[0]);
    }

    // Some pronouns has person attached or in the place of gender.
    if (tmp.length === 4 || /[0-9]/.test(tmp[0])) {
      parsedMorphData[0].push(r.declinedPersonByzMTMorphRef[tmp[0]]);
      parsedMorphData[1].push('Persona ' + tmp[0]);
      tmp = tmp.replace(tmp[0], '');
    }

    // Some adjectives has another number attached.
    if (tmp.length === 5) {
      parsedMorphData[0].push(r.declinedNumberByzMTMorphRef[tmp[0]]);
      parsedMorphData[1].push('Persona ' + tmp[0]);
      tmp = tmp.replace(tmp[0], '');
    }

    if (tmp.length > 1) {
      parsedMorphData[0].push(r.declinedCaseByzMTMorphRef[tmp[0]]);
      parsedMorphData[1].push('Kasus ' + tmp[0]);

      parsedMorphData[0].push(r.declinedNumberByzMTMorphRef[tmp[1]]);
      parsedMorphData[1].push('Jumlah ' + tmp[1]);
    }

    // Some pronouns has person instead of gender, so this is separated with
    // the above if block.
    if (tmp.length > 2) {
      parsedMorphData[0].push(r.declinedGenderByzMTMorphRef[tmp[2]]);
      parsedMorphData[1].push('Gender ' + tmp[2]);
    }
  }

  // Parse the suffix.
  if (morphData.length === 2) {
    const tmp = morphData[1];
    parsedMorphData[0].push(r.declinedSuffixByzMTMorphRef[tmp[0]]);
    parsedMorphData[1].push(tmp[0]);
  }

  return parsedMorphData;
};

// Parse any ByzMT morphological codes.
export const byzMTMorphParser = (
  morphData: string,
  parsedMorph: Array<string | Array<string>>
): Array<string | Array<string>> => {
  if (/[-]/.test(morphData) === false) {
    parsedMorph.push(r.undeclinedByzMTMorphRef[morphData]);
    parsedMorph.push(morphData);
    return parsedMorph;
  }

  const splitData = morphData.split('-');

  if (r.specialUndeclinedByzMTMorphRef[splitData[1]] !== undefined) {
    parsedMorph.push(r.declinedAndVerbPrefixByzMTMorphRef[splitData[0]]);
    parsedMorph.push(splitData[0]);
    parsedMorph.push([r.specialUndeclinedByzMTMorphRef[splitData[1]]]);
    parsedMorph.push(['Keterangan ' + splitData[1]]);
    return parsedMorph;
  }

  if (splitData.length > 1) {
    parsedMorph.push(r.declinedAndVerbPrefixByzMTMorphRef[splitData[0]]);
    parsedMorph.push(splitData.shift() as string);

    if (parsedMorph[1] === 'V') {
      const tmp = verbByzMTMorphParser(splitData);
      parsedMorph.push(tmp[0]);
      parsedMorph.push(tmp[1]);
    } else {
      const tmp = nonVerbByzMTMorphParser(splitData);
      parsedMorph.push(tmp[0]);
      parsedMorph.push(tmp[1]);
    }
  }

  return parsedMorph;
};
