import React from 'react';
import styled from 'styled-components';

import BibleBookPickerBlock from './BibleBook/BibleBook';
import ChapterPickerBlock from './Chapter/Chapter';
import VersePickerBlock from './Verse/Verse';
import { MoveBackwardByOne, MoveForwardByOne } from './MoveByOne/MoveByOne';

import { LoadedBibleContext } from '@/contexts/LoadedBibleContext';

import './index.css';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 75%;
  justify-content: center;
  padding: .75em 1rem;
`;

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
