import * as React from 'react';
import styled from 'styled-components';

import TranslationBlockColumnContainer from './ColumnContainer/ColumnContainer';

import { LoadedBibleContext } from '@/contexts/LoadedBibleContext'

import './index.css';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: center;
  padding: 1rem;
`;

export function TranslationBlock(): React.ReactElement<Record<string, unknown>> {
  const { loadedBibleObject, updateUploadedBible } = React.useContext(LoadedBibleContext) as LoadedBibleContextType;
  return (
    <Block>
      <TranslationBlockColumnContainer loadedBibleObject={loadedBibleObject} updateUploadedBible={updateUploadedBible}/>
    </Block>
  );
}

export default TranslationBlock;
