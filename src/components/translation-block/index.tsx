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
