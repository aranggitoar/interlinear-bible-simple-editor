import * as React from 'react';
import { DefaultButton } from '@fluentui/react';

import { populateWithEmptyTargetLanguage } from '@/utilities/populateWithEmptyTargetLanguage';

const loadFileText = "Load File";
const saveFileText = "Save File";

const uploadFileText = "Upload";
const downloadFileText = "Download";

type PropsAll = {
  loadedBibleObject: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void
}

type PropsLoad = {
  loadedBibleObject: ILoadedBible,
}

type PropsUpdate = {
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void
}

const uploadRequestHandler: React.FC<PropsUpdate> = ({updateUploadedBible, children}) => {
  var fileName = '';

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    const fileReader = new FileReader();
    // @ts-ignore // the element exists
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    // @ts-ignore // the element exists
    fileName = e.target.files[0].name;

    fileReader.onload = (e2) => {
      // @ts-ignore // the property exists
      const fileObject = Object.assign(JSON.parse(e2.currentTarget.result));
      const bibleBookNames = Object.keys(fileObject);
      let updatedFileObject = fileObject;

      // Check which book exists.
      let bibleBookName: string;
      if (fileObject['Genesis'] !== undefined) {
        bibleBookName = 'Genesis';
      } else if (fileObject['Matthew'] !== undefined) {
        bibleBookName = 'Matthew';
      }

      if (fileObject[bibleBookName][0][0][0].length === 3) {
        updatedFileObject = populateWithEmptyTargetLanguage(fileObject);
      }

      // @ts-ignore // the element exists
      const newUploadedFile: ILoadedBible = {
        ['bibleObject']: updatedFileObject,
        ['chosenBibleSourceName']: fileName,
        ['chosenBibleBookNames']: bibleBookNames,
        ['chosenBibleBookDetails']: [bibleBookName, '0', '0']
      }
      updateUploadedBible(newUploadedFile);

    }
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <DefaultButton id="menu-load-file" className="menu-items">
          <label htmlFor="load-file">
            {loadFileText}
            <input id="load-file" type="file" onChange={handleChange} />
          </label>
          <span id="loaded-file-name">{fileName}</span>
        </DefaultButton>
    </>
  );
}

const downloadRequestHandler: React.FC<PropsLoad> = ({loadedBibleObject, children}) => {
  const stringifiedBibleObject = JSON.stringify(loadedBibleObject.bibleObject);

  // @ts-expect-error // name "Button" exists
  const downloadBibleAsJSON = (e: MouseEventHandler<Button>): void => {
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(stringifiedBibleObject);
    hiddenElement.target = '_blank';
    hiddenElement.download = loadedBibleObject.chosenBibleSourceName as string;
    hiddenElement.click();
  }
  
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <DefaultButton id="menu-save-file" onClick={downloadBibleAsJSON}>
          {saveFileText}
        </DefaultButton>
    </>
  );
}

const MenuBlockFileHandler: React.FC<PropsAll> = ({loadedBibleObject, updateUploadedBible}) => {
  const Upload = uploadRequestHandler;
  const Download = downloadRequestHandler;
  return (
    <>
      <div className="menu-items">
        <Upload updateUploadedBible={updateUploadedBible}>
          <button type="submit">{uploadFileText}</button>
        </Upload>
      </div>
      <div className="menu-items">
        <Download loadedBibleObject={loadedBibleObject}>
          <button type="submit">{downloadFileText}</button>
        </Download>
      </div>
    </>
  );
}
export default MenuBlockFileHandler;
