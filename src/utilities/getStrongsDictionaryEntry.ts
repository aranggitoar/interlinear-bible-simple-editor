import { filterDisplayedStrongsData } from './filterDisplayedStrongsData';
const strongsHebrewDictionary = require("$/strongs-dictionary.json");
const strongsGreekDictionary = require("$/strongs-greek-dictionary.json");

// Get lexicon data by a strongs number.
export function getStrongsDictionaryEntry(stringOfStrongsNumber: string) {
  if (stringOfStrongsNumber[0] === "H") {
    return strongsHebrewDictionary[`H${filterDisplayedStrongsData(stringOfStrongsNumber)}`];
  }

  if (stringOfStrongsNumber[0] === "G") {
    if (/&/.test(stringOfStrongsNumber)) {
      let temp = stringOfStrongsNumber.split('&');
      return [strongsGreekDictionary[`G${filterDisplayedStrongsData(temp[0])}`],
              strongsGreekDictionary[`G${filterDisplayedStrongsData(temp[1])}`]];
    }
    // Outputs the individual strongs object correctly
    return strongsGreekDictionary[`G${filterDisplayedStrongsData(stringOfStrongsNumber)}`];
  }
}
