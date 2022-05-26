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


import React from 'react';
import { FC, FormEvent } from 'react';

import { populateWithEmptyTargetLanguage } from '@/utilities/populateWithEmptyTargetLanguage';
import { arrangeBibleBookName } from '@/utilities/arrangeBibleBookName';

import { FileHandlerButton, InvisibleInput, Container } from './style';


const saveFileText = "Save";
const loadFileText = "Load";

const uploadRequestHandler: FC<FileLoadHandlerMenuProps> = ({
  updateUploadedBibleObject, updateUploadedBibleFileName,
  updateUploadedBibleBookNames, updateDisplayedBibleInfo, children
}) => {
  var fileName = '';

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    const fileReader = new FileReader();
    // @ts-ignore // the element exists
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    // @ts-ignore // the element exists
    fileName = e.target.files[0].name;

    fileReader.onload = (e2) => {
      // @ts-ignore // the property exists
      const fileObject = Object.assign(JSON.parse(e2.currentTarget.result));
      let bibleBookNames = Object.keys(fileObject);
      let updatedFileObject = fileObject;

      // Check which book exists.
      let bibleBookName: string;
      if (fileObject['Genesis'] !== undefined) {
        bibleBookName = 'Genesis';
      } else if (fileObject['Matthew'] !== undefined) {
        bibleBookName = 'Matthew';
      }

      // If the file is a default Open Scripture's Hebrew Bible format, add the
      // container for target language.
      if (fileObject[bibleBookName][0][0][0].length === 3) {
        updatedFileObject = populateWithEmptyTargetLanguage(fileObject);
      }

      // If there is more than one Bible book, arrange the order;
      if (bibleBookNames.length > 1) {
        bibleBookNames = arrangeBibleBookName(bibleBookNames);
      }

      console.log(updatedFileObject);

      updateUploadedBibleObject(updatedFileObject);
      updateUploadedBibleFileName(fileName);
      updateUploadedBibleBookNames(bibleBookNames);
      updateDisplayedBibleInfo([bibleBookName, '0', '0']);
    }
  };

  return (
    <FileHandlerButton>
      {loadFileText}
      <InvisibleInput type="file" onChange={handleChange} />
    </FileHandlerButton>
  );
}

const downloadRequestHandler: FC<FileSaveHandlerMenuProps> = ({
  loadedBibleObject, loadedBibleFileName
}) => {
  const downloadBibleAsJSON = (): void => {
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(JSON.stringify(loadedBibleObject));
    hiddenElement.target = '_blank';
    hiddenElement.download = loadedBibleFileName as string;
    hiddenElement.click();
  }
  
  return (
    <FileHandlerButton onClick={downloadBibleAsJSON}>
      {saveFileText}
    </FileHandlerButton>
  );
}

const MenuBlockFileHandler: FC<MenuProps> = ({
  loadedBibleObject, loadedBibleFileName, updateUploadedBibleObject,
  updateUploadedBibleFileName, updateUploadedBibleBookNames,
  updateDisplayedBibleInfo
}) => {
  const FileLoadHandlerButton = uploadRequestHandler;
  const FileSaveHandlerButton = downloadRequestHandler;
  return (
    <>
      <Container>
        <FileLoadHandlerButton
          updateUploadedBibleObject={updateUploadedBibleObject}
          updateUploadedBibleFileName={updateUploadedBibleFileName}
          updateUploadedBibleBookNames={updateUploadedBibleBookNames}
          updateDisplayedBibleInfo={updateDisplayedBibleInfo}
        />
      </Container>
      <Container>
        <FileSaveHandlerButton
          loadedBibleObject={loadedBibleObject}
          loadedBibleFileName={loadedBibleFileName}
        />
      </Container>
    </>
  );
}

export default MenuBlockFileHandler;
