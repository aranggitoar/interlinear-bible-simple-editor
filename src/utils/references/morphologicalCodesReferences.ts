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
export const simpleMorphHBMorphologicalDataReference = {
  A: 'Adjective',
  C: 'Conjunction',
  D: 'Adverb',
  N: 'Noun',
  P: 'Pronoun',
  R: 'Preposition',
  T: 'Particle',
  V: 'Verb',
};

// Unique morphological codes of the Byzantine Majority Text
// References:
// https://github.com/byztxt/robinson-documentation/blob/master/doc/DECLINE.COD
// https://github.com/byztxt/robinson-documentation/blob/master/doc/PARSING.COD
export const simpleByzMTMorphologicalDataReference = {
  A: 'Adjective',
  N: 'Noun',
  P: 'Pronoun',
  T: 'Definite Article',
  V: 'Verb',
  ADV: 'Adverb',
  ARAM: 'Aramaic Transliteration',
  CONJ: 'Conjunction',
  COND: 'Conditional Particle',
  HEB: 'Hebrew Transliteration',
  INJ: 'Interjection',
  PREP: 'Preposition',
  PRT: 'Particle',
};

export const advancedByzMTMorphologicalDataReference = {
  C: 'Reciprocal Pronoun',
  D: 'Demonstrative Pronoun',
  F: 'Reflexive Pronoun',
  I: 'Interrogative Pronoun',
  K: 'Correlative Pronoun',
  Q: 'Correlative or Interrogative Pronoun',
  R: 'Relative Pronoun',
  X: 'Indefinite Pronoun',
  S: 'Possesive Adjective',
}
