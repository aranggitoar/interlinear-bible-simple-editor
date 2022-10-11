// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { JSX } from 'solid-js';
import { Box, VStack } from '@hope-ui/solid';
import { populateWithEmptyTargetLanguage } from 'utils/populateWithEmptyTargetLanguage';
import { arrangeBibleBookName } from 'utils/arrangeBibleBookName';
import {
  setBibleFileName,
  setBibleObject,
  setBibleBookNames,
  setBibleBookNameFromBibleInfo,
  setBibleChapterIndexFromBibleInfo,
} from 'stores/BibleDataActions';
import { bibleData } from 'stores/BibleDataStore';
import { BibleDataObjectType } from 'types/BibleData';
import Sync from './Sync';
import Save from './Save';
import Load from './Load';

const loadBibleFromParsedJSON = (bibleObject: BibleDataObjectType, fileName?: string) => {
  let bibleBookNames = Object.keys(bibleObject);
  let updatedBibleObject = bibleObject;
  let bibleBookName = 'Genesis' as string;

  // If the file is a default Open Scripture's Hebrew Bible format, add the
  // container for target language.
  if (bibleObject[bibleBookName][0][0][0].length === 3) {
    updatedBibleObject = populateWithEmptyTargetLanguage(bibleObject);
  }

  // If there is more than one Bible book, arrange the order;
  if (bibleBookNames.length > 1) {
    bibleBookNames = arrangeBibleBookName(bibleBookNames);
  }

  console.log(bibleData.bibleInfo);
  setBibleFileName(fileName ? '' : 'byzparsed-morphhb.json');
  setBibleBookNames(bibleBookNames);
  setBibleObject(updatedBibleObject);
  setBibleBookNameFromBibleInfo(bibleBookName);
  // Without this, the chapter list doesn't seem to be reloaded.
  setBibleChapterIndexFromBibleInfo(0);
  console.log(bibleData.bibleInfo);
};

export default (): JSX.Element => (
  <Box
    display="flex"
    justifyContent="flex-start"
    p="1rem"
    position="fixed"
    top="0"
    zIndex="2"
  >
    <VStack spacing="1rem" alignItems="flex-start">
      <Sync loadBibleFromParsedJSON={loadBibleFromParsedJSON} />
      <Save />
      <Load loadBibleFromParsedJSON={loadBibleFromParsedJSON} />
    </VStack>
  </Box>
);
