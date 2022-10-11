// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { Show } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Box, HStack } from '@hope-ui/solid';
import BibleBook from './BibleBook';
import Chapter from './Chapter';
import Verse from './Verse';
import { MoveBackwardByOne, MoveForwardByOne } from './MoveByOne';
import { globalSettings } from 'stores/globalSettingsStore';

export default (): JSX.Element => (
  <Box w="100%" margin="4vh auto auto" display="flex" justifyContent="center">
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
  </Box>
);
