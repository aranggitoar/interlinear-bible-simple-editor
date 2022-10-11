// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

interface IReference {
  [index: string]: string;
}

// Object of main morphological data code as keys and parsed as values.
export const simpleMorphHBMorphRef = {
  A: 'Adjektiva',
  C: 'Konjungsi',
  D: 'Adverbia',
  N: 'Nomina',
  P: 'Pronomina',
  R: 'Preposisi',
  T: 'Partikel',
  V: 'Verba',
} as IReference;

// Morphological codes for Open Scripture's Hebrew Bible.
// Reference:
// https://hb.openscriptures.org/parsing/HebrewMorphologyCodes.html
export const simplePOSMorphHBMorphRef = {
  C: 'Konjungsi',
  D: 'Adverbia',
} as IReference;

export const regularPOSMorphHBMorphRef = {
  A: 'Adjektiva',
  N: 'Nomina',
  P: 'Pronomina',
  R: 'Preposisi',
  T: 'Partikel',
  V: 'Verba',
} as IReference;

export const verbStemMorphHBMorphRef = {
  q: 'Qal',
  N: 'Niphal',
  p: 'Piel',
  P: 'Pual',
  h: 'Hiphil',
  H: 'Hophal',
  t: 'Hithpael',
  o: 'Polel',
  O: 'Polal',
  r: 'Hithpolel',
  m: 'Poel',
  M: 'Poal',
  k: 'Palel',
  K: 'Pulal',
  Q: 'Qal passive',
  l: 'Pilpel',
  L: 'Polpal',
  f: 'Hithpalpel',
  D: 'Nithpael',
  j: 'Pealal',
  i: 'Pilel',
  u: 'Hothpaal',
  c: 'Tiphil',
  v: 'Hishtaphel',
  w: 'Nithpalel',
  y: 'Nithpoel',
  z: 'Hithpoel',
} as IReference;

export const verbTypeMorphHBMorphRef = {
  p: 'Sempurna (Qatal)', // Perfect
  q: 'Sempurna Sekuensial (Weqatal)', // Sequential Perfect
  i: 'Tidak Sempurna (Yiqtol)', // Imperfect
  w: 'Tidak Sempurna Sekuensial (Wayyiqtol)', // Sequential Imperfect
  h: 'Kohortatif', // Cohortative
  j: 'Jusif', // Jussive
  v: 'Imperatif', // Imperative
  r: 'Partisip Aktif', // Participle Active
  s: 'Partisip Pasif', // Participle Passive
  a: 'Infinitif Absolut', // Infinitive Absolute
  c: 'Infinitif Konstruk', // Infinitive Construct
} as IReference;

export const verbPersonMorphHBMorphRef = {
  '1': 'Orang Pertama',
  '2': 'Orang Kedua',
  '3': 'Orang Ketiga',
} as IReference;

export const verbGenderMorphHBMorphRef = {
  M: 'Maskulin',
  F: 'Feminim',
  N: 'Neuter',
  m: 'Maskulin',
  f: 'Feminim',
  b: 'Keduanya (Nomina)',
  c: 'Umum (Verba)',
} as IReference;

export const verbNumberMorphHBMorphRef = {
  S: 'Singular',
  P: 'Plural',
  s: 'Singular',
  p: 'Plural',
  d: 'Dual',
} as IReference;

export const verbStateMorphHBMorphRef = {
  a: 'Absolut',
  c: 'Konstruk', // Construct
  d: 'Ditentukan', // Determined
} as IReference;

export const adjectiveTypeMorphHBMorphRef = {
  a: 'Adjektiva',
  c: 'Bilangan Kardinal',
  g: 'Gentilik', // Gentilic
  o: 'Bilangan Ordinal',
} as IReference;

export const nounTypeMorphHBMorphRef = {
  c: 'Umum', // Common
  g: 'Gentilik', // Gentilic
  p: 'Nama Khusus', // Proper Name
} as IReference;

export const pronounTypeMorphHBMorphRef = {
  d: 'Demonstratif',
  f: 'Indefinit',
  i: 'Interogatif',
  p: 'Personal',
  r: 'Relatif',
} as IReference;

export const prepositionTypeMorphHBMorphRef = {
  d: 'Artikula Definit',
} as IReference;

export const suffixTypeMorphHBMorphRef = {
  d: 'he Direksional',
  h: 'he Paragogis',
  n: 'nun Paragogis',
  p: 'Pronominal',
} as IReference;

export const particleTypeMorphHBMorphRef = {
  a: 'Afirmasi',
  d: 'Artikula Definit',
  e: 'Dorongan', // Exhortation
  i: 'Interogatif',
  j: 'Interjeksi',
  m: 'Demonstratif',
  n: 'Negatif',
  o: 'Penanda Obyek Langsung', // Direct Object Marker
  r: 'Relatif',
} as IReference;

export const otherPersonMorphHBMorphRef = verbPersonMorphHBMorphRef;

export const otherGenderMorphHBMorphRef = verbGenderMorphHBMorphRef;

export const otherNumberMorphHBMorphRef = verbNumberMorphHBMorphRef;

export const otherStateMorphHBMorphRef = verbStateMorphHBMorphRef;

// Morphological codes for the Byzantine Majority Text.
// References:
// https://github.com/byztxt/robinson-documentation/blob/master/doc/DECLINE.COD
// https://github.com/byztxt/robinson-documentation/blob/master/doc/PARSING.COD
export const verbTenseByzMTMorphRef = {
  P: 'Masa Kini (Present)',
  I: 'Tidak Sempurna (Imperfect)',
  F: 'Masa Depan',
  '2F': 'Masa Depan Kedua', // Second Future
  A: 'Aoris',
  '2A': 'Aoris Kedua',
  R: 'Sempurna (Perfect)', // peRfect
  '2R': 'Sempurna (Perfect) Kedua', // Second peRfect
  L: 'Sempurna Lampau', // pLuperfect
  '2L': 'Sempurna Lampau Kedua', // Second pLuperfect
} as IReference;

export const verbVoiceByzMTMorphRef = {
  A: 'Aktif',
  M: 'Tengah', // Middle
  P: 'Pasif',
  E: 'Antara Tengah atau Pasif', // Either middle or passive
  D: 'Deponen Tengah', // middle Deponent
  O: 'Deponen Pasif', // passive depOnent
  N: 'Deponen Tengah atau Pasif', // middle or passive depoNent
} as IReference;

export const verbMoodByzMTMorphRef = {
  I: 'Indikatif',
  S: 'Subjunktif',
  O: 'Optatif',
  M: 'Imperatif', // iMperative
  N: 'Infinitif', // iNfinitive
  P: 'Partisip',
} as IReference;

export const verbPersonByzMTMorphRef = {
  ...verbPersonMorphHBMorphRef,
} as IReference;

export const verbCaseByzMTMorphRef = {
  N: 'Nominatif',
  G: 'Genitif',
  D: 'Datif',
  A: 'Akusatif',
} as IReference;

export const verbNumberByzMTMorphRef = verbNumberMorphHBMorphRef;

export const verbGenderByzMTMorphRef = verbGenderMorphHBMorphRef;

export const verbExtraByzMTMorphRef = {
  ATT: 'Bentuk Yunani Attika', // ATTic Greek form
} as IReference;

export const undeclinedByzMTMorphRef = {
  ADV: 'Adverbia',
  CONJ: 'Konjungsi',
  COND: 'Partikel Kondisional',
  PRT: 'Partikel',
  PREP: 'Preposisi',
  INJ: 'Interjeksi',
  ARAM: 'Transliterasi Aramaik',
  HEB: 'Transliterasi Ibrani',
} as IReference;

export const specialUndeclinedByzMTMorphRef = {
  'N-PRI': 'Nomina Nama Diri Tanpa Deklinasi',
  'A-NUI': 'Numeralia Tanpa Deklinasi (Adjektiva)',
  'N-LI': 'Huruf Tanpa Deklinasi (Nomina)',
  'N-OI': 'Nomina atau Tipe Lain Tanpa Deklinasi',
} as IReference;

export const declinedAndVerbPrefixByzMTMorphRef = {
  CONJ: 'Konjungsi',
  PRT: 'Partikel',
  N: 'Nomina',
  A: 'Adjektiva',
  R: 'Pronomina Relatif',
  C: 'Pronomina Resiprokal',
  D: 'Pronomina Demonstratif',
  T: 'Artikula Definit',
  K: 'Pronomina Korelatif',
  I: 'Pronomina Interogatif',
  X: 'Pronomina Indefinit',
  Q: 'Pronomina Korelatif',
  F: 'Pronomina Refleksif',
  S: 'Adjektiva Posesif',
  P: 'Pronomina Personal',
  V: 'Verba',
} as IReference;

export const declinedPersonByzMTMorphRef = verbPersonMorphHBMorphRef;

export const declinedCaseByzMTMorphRef = {
  ...verbCaseByzMTMorphRef,
  V: 'Vokatif',
} as IReference;

export const declinedNumberByzMTMorphRef = verbNumberMorphHBMorphRef;

export const declinedGenderByzMTMorphRef = verbGenderMorphHBMorphRef;

export const declinedSuffixByzMTMorphRef = {
  S: 'Superlatif', // used primarily with adjectives and some adverbs
  C: 'Komparatif', // used primarily with adjectives and some adverbs
  ABB: 'Bentuk Disingkat', // ABBreviated form
  I: 'Interogatif',
  N: 'Negatif', // used with some particles, adverbs, adjectives, and conjunctions
  K: '~\\Kai~\\', // (CONJ) merged by crasis with forms of the demonstrative pronoun \~\\ekeinov\~\\ or the first person personal pronoun \~\\egw\~\\; also, the neuter definite article (\~\\to\~\\) merged by crasis with a second word. Declension follows that of the second word.
  ATT: 'Bentuk Yunani Attika',
} as IReference;
