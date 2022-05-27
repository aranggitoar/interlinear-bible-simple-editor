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

import { filterDisplayedStrongsData } from './filterDisplayedStrongsData';
const strongsHebrewDictionary = require('$/strongs-dictionary.json');
const strongsGreekDictionary = require('$/strongs-greek-dictionary.json');

// Get lexicon data by a strongs number.
export function getStrongsDictionaryEntry(stringOfStrongsNumber: string) {
	if (stringOfStrongsNumber[0] === 'H') {
		return strongsHebrewDictionary[
			`H${filterDisplayedStrongsData(stringOfStrongsNumber)}`
		];
	}

	if (stringOfStrongsNumber[0] === 'G') {
		if (/&/.test(stringOfStrongsNumber)) {
			let temp = stringOfStrongsNumber.split('&');
			return [
				strongsGreekDictionary[`G${filterDisplayedStrongsData(temp[0])}`],
				strongsGreekDictionary[`G${filterDisplayedStrongsData(temp[1])}`],
			];
		}
		// Outputs the individual strongs object correctly
		return strongsGreekDictionary[
			`G${filterDisplayedStrongsData(stringOfStrongsNumber)}`
		];
	}
}
