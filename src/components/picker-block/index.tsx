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

import BibleBookPickerBlock from './BibleBook/BibleBook';
import ChapterPickerBlock from './Chapter/Chapter';
import VersePickerBlock from './Verse/Verse';
import { MoveBackwardByOne, MoveForwardByOne } from './MoveByOne/MoveByOne';

import { LoadedBibleContext } from '@/contexts/LoadedBibleContext';
import { Container } from './styles';


export function PickerBlock(): React.ReactElement<Record<string, unknown>> {
  const { loadedBibleObject, updateUploadedBible } = React.useContext(LoadedBibleContext) as LoadedBibleContextType
  return (
    <Container>
      <MoveBackwardByOne loadedBibleObject={loadedBibleObject} updateUploadedBible={updateUploadedBible}/>
      <BibleBookPickerBlock loadedBibleObject={loadedBibleObject} updateUploadedBible={updateUploadedBible}/>
      <ChapterPickerBlock loadedBibleObject={loadedBibleObject} updateUploadedBible={updateUploadedBible}/>
      <VersePickerBlock loadedBibleObject={loadedBibleObject} updateUploadedBible={updateUploadedBible}/>
      <MoveForwardByOne loadedBibleObject={loadedBibleObject} updateUploadedBible={updateUploadedBible}/>
    </Container>
  );
}

export default PickerBlock;
