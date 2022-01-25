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

import TranslationBlock from '@/components/translation-block';
import { MenuBlock } from '@/components/menu-block';
import { PickerBlock } from '@/components/picker-block';

import LoadedBibleProvider from '@/contexts/LoadedBibleContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100%;
`;

const Separator = styled.hr`
  border: 1px solid #777;
  box-shadow: 20px 20px 250px 1px;
  margin: 1em 0 2em;
  width: 30%;
`;

export function App(): React.ReactElement<Record<string, unknown>> {
  return (
    <Container id="app">
      <LoadedBibleProvider>
        <MenuBlock />
        <PickerBlock />
        <Separator />
        <TranslationBlock />
      </LoadedBibleProvider>
    </Container>
  );
}
