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
  padding: 0 2em;
`;

const Separator = styled.hr`
  border: .25px solid #777;
  box-shadow: 20px 20px 250px 1px;
  margin: .25em 0 2em;
  width: 35%;
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
