// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { Show, JSX } from 'solid-js';
import { Box, HStack } from '@hope-ui/solid';
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
import { globalSettings } from 'stores/globalSettingsStore';
import BibleBook from './SelectorItems/BibleBook';
import Chapter from './SelectorItems/Chapter';
import Verse from './SelectorItems/Verse';
import { MoveBackwardByOne, MoveForwardByOne } from './SelectorItems/MoveByOne';
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
    background="white"
    display="flex"
    justifyContent="space-between"
    w="97.5%"
    p="1rem"
    position="fixed"
    top="0"
    m="1rem"
    zIndex="2"
  >
    <HStack spacing="1rem">
      <MoveBackwardByOne />
      <HStack spacing="1rem">
        <BibleBook />
        <Chapter />
        <Show when={globalSettings.viewBibleBy === 'verses'}>
          <Verse />
        </Show>
      </HStack>
      <MoveForwardByOne />
    </HStack>
    <HStack spacing="1rem">
      <Sync loadBibleFromParsedJSON={loadBibleFromParsedJSON} />
      <Save />
      <Load loadBibleFromParsedJSON={loadBibleFromParsedJSON} />
    </HStack>
  </Box>
);
