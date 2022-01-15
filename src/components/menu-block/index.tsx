import React from 'react';
import styled from 'styled-components';

import MenuBlockFileHandler from './MenuBlockFileHandler/MenuBlockFileHandler';
import { MenuBlockSettings } from './Settings/Settings';

import { LoadedBibleContext } from '@/contexts/LoadedBibleContext';

import './index.css';

const Block = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 rem;
  width: 100%;
`;

export function MenuBlock(): React.ReactElement<Record<string, unknown>> {
  const { loadedBibleObject, updateUploadedBible } = React.useContext(LoadedBibleContext) as LoadedBibleContextType
  return (
    <Block>
      <MenuBlockFileHandler loadedBibleObject={loadedBibleObject} updateUploadedBible={updateUploadedBible}/>
    </Block>
  );
}

export default MenuBlock;
