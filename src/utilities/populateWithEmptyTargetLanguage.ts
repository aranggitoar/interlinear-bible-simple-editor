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

// Populate source file with empty arrays.
export function populateWithEmptyTargetLanguage(bibleObject: Object) {
	let bibleBookCount = Object.keys(bibleObject).length;
	let localCopy = bibleObject as Object;

	// Loop every book.
	for (let i = 0; bibleBookCount > i; i++) {
		let currentBibleBookName = Object.keys(bibleObject)[i];
		let currentBibleBookArray = localCopy[currentBibleBookName];

		// Loop every chapter.
		for (let i = 0; currentBibleBookArray.length > i; i++) {
			let currentChapterArray = currentBibleBookArray[i];

			// Loop every verse.
			for (let i = 0; currentChapterArray.length > i; i++) {
				let currentVerseArray = currentChapterArray[i];

				// Insert empty string to every word inside a verse.
				for (let i = 0; currentVerseArray.length > i; i++) {
					currentVerseArray[i].unshift('');
				}

				currentChapterArray[i] = currentVerseArray;
			}

			currentBibleBookArray[i] = currentChapterArray;
		}

		localCopy[currentBibleBookName] = currentBibleBookArray;
	}

	return localCopy;
}
