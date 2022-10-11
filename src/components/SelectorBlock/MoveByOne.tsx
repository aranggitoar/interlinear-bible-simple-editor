// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { IconButton } from '@hope-ui/solid';
import { ArrowCircleRight, ArrowCircleLeft } from 'phosphor-solid';
import { JSX } from 'solid-js/jsx-runtime';
import { moveOneVerseForward, moveOneVerseBackward } from 'stores/BibleDataActions';

export const MoveBackwardByOne = (): JSX.Element => (
  <IconButton
    aria-label="Move Verse Backward"
    id="backward"
    compact
    borderRadius="50%"
    size="xl"
    variant="ghost"
    onClick={() => moveOneVerseBackward()}
    icon={<ArrowCircleLeft size={32} weight="thin" />}
  />
);

export const MoveForwardByOne = (): JSX.Element => (
  <IconButton
    aria-label="Move Verse Forward"
    id="forward"
    compact
    borderRadius="50%"
    size="xl"
    variant="ghost"
    onClick={() => moveOneVerseForward()}
    icon={<ArrowCircleRight size={32} weight="thin" />}
  />
);
