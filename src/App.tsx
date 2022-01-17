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
