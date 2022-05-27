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


import {
  useContext, 
  ReactElement,
  FC,
  MouseEventHandler,
  FormEvent
} from 'react';

import { populateWithEmptyTargetLanguage } from '@/utilities/populateWithEmptyTargetLanguage';
import { arrangeBibleBookName } from '@/utilities/arrangeBibleBookName';

import { LoadedBibleContext } from '@/contexts/LoadedBibleContext';
import { FileHandlerButton, InvisibleInput, Container } from './style';


const saveFileText = "Save";
const loadFileText = "Load";

const uploadRequestHandler: FC = (): ReactElement => {
  const [state, dispatch] = useContext(LoadedBibleContext);

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

      dispatch({ type: 'setBibleFileName', bibleFileName: fileName });
      dispatch({ type: 'setBibleBookNames', bibleBookNames: bibleBookNames });
      dispatch({ type: 'setBibleObject', bibleObject: updatedFileObject });
      dispatch({ type: 'setBibleInfo', bibleInfo: {
        "bibleBookName": bibleBookName, "bibleChapterIndex": '0',
        "bibleVerseIndex": '0', "bibleWordIndex": '0',
      } as LoadedBibleInfoType });
    }
  };

  return (
    <FileHandlerButton>
      {loadFileText}
      <InvisibleInput type="file" onChange={handleChange} />
    </FileHandlerButton>
  );
}

const downloadRequestHandler: FC = (): ReactElement => {
  const [state, dispatch] = useContext(LoadedBibleContext);

  const downloadBibleAsJSON: MouseEventHandler<HTMLLabelElement> = (): void => {
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(JSON.stringify(state.bibleObject));
    hiddenElement.target = '_blank';
    hiddenElement.download = state.bibleFileName as string;
    hiddenElement.click();
  }
  
  return (
    <FileHandlerButton onClick={downloadBibleAsJSON}>
      {saveFileText}
    </FileHandlerButton>
  );
}

const MenuBlockFileHandler: FC = () => {
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
}

export default MenuBlockFileHandler;
