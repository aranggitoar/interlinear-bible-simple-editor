import { Component } from 'solid-js';
import { populateWithEmptyTargetLanguage } from 'utils/populateWithEmptyTargetLanguage';
import { arrangeBibleBookName } from 'utils/arrangeBibleBookName';
import {
  setBibleObject,
  setBibleFileName,
  setBibleBookNames,
  setBibleInfo,
} from 'stores/BibleDataActions';
import { BibleData } from 'stores/BibleDataStore';
import { BibleDataInfoType } from 'types/BibleData';
import { FileHandlerButton, InvisibleInput, Container } from './style';

const saveFileText = 'Save';
const loadFileText = 'Load';

const uploadRequestHandler: Component = () => {
  const handleChange = (event: Event): void => {
    event.preventDefault();

    const fileReader = new FileReader();
    // @ts-ignore // property "files" of "event.target" exists
    fileReader.readAsText(event.target.files[0], 'UTF-8');
    // @ts-ignore // property "files" of "event.target" exists
    const fileName = event.target.files[0].name;

    fileReader.onload = (fileReaderEvent) => {
      // @ts-ignore // property "result" of "currentTarget" exists
      const bibleObject = Object.assign(JSON.parse(fileReaderEvent.currentTarget.result));
      let bibleBookNames = Object.keys(bibleObject);
      let updatedBibleObject = bibleObject;

      // Check which book exists.
      let bibleBookName = '' as string;
      if (bibleObject.Genesis !== undefined) {
        bibleBookName = 'Genesis';
      } else if (bibleObject.Matthew !== undefined) {
        bibleBookName = 'Matthew';
      }

      // If the file is a default Open Scripture's Hebrew Bible format, add the
      // container for target language.
      if (bibleObject[bibleBookName][0][0][0].length === 3) {
        updatedBibleObject = populateWithEmptyTargetLanguage(bibleObject);
      }

      // If there is more than one Bible book, arrange the order;
      if (bibleBookNames.length > 1) {
        bibleBookNames = arrangeBibleBookName(bibleBookNames);
      }

      setBibleFileName(fileName);
      setBibleBookNames(bibleBookNames);
      setBibleObject(updatedBibleObject);
      setBibleInfo({
        bibleBookName,
        bibleChapterCount: updatedBibleObject[bibleBookName].length,
        bibleChapterIndex: 0,
        bibleVerseCount: updatedBibleObject[bibleBookName][0].length,
        bibleVerseIndex: 0,
        bibleWordCount: updatedBibleObject[bibleBookName][0][0].length,
        bibleWordIndex: 0,
      } as BibleDataInfoType);

      console.log(BibleData);
    };
  };

  return (
    <FileHandlerButton>
      {loadFileText}
      <InvisibleInput type="file" onChange={handleChange} />
    </FileHandlerButton>
  );
};

const downloadRequestHandler: Component = () => {
  const downloadBibleAsJSON = () => {
    const hiddenElement = document.createElement('a');
    hiddenElement.href = `data:attachment/text,${encodeURI(
      JSON.stringify(BibleData.bibleObject)
    )}`;
    hiddenElement.target = '_blank';
    hiddenElement.download = BibleData.bibleFileName as string;
    hiddenElement.click();
  };

  return (
    <FileHandlerButton onClick={downloadBibleAsJSON}>{saveFileText}</FileHandlerButton>
  );
};

export default () => {
  const FileLoadHandlerButton = uploadRequestHandler;
  const FileSaveHandlerButton = downloadRequestHandler;
  return (
    <>
      <Container>
        <FileLoadHandlerButton />
      </Container>
      <Container>
        <FileSaveHandlerButton />
      </Container>
    </>
  );
};

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
