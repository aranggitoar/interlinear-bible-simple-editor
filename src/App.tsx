// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { Component } from 'solid-js';
import { Toaster } from 'solid-toast';
import { HopeProvider } from '@hope-ui/solid';
import { config } from 'styles/theme';
import { GlobalStyle } from 'styles/global';
import DisplayBlock from 'components/DisplayBlock';
import MenuBlock from 'components/MenuBlock';
import SelectorBlock from 'components/SelectorBlock';

const App: Component = () => (
  <HopeProvider config={config}>
    <GlobalStyle />
    <MenuBlock />
    <SelectorBlock />
    <DisplayBlock />
    <Toaster
      containerStyle={{ 'font-family': 'sans-serif' }}
      position="top-left"
      gutter={16}
    />
  </HopeProvider>
);

export default App;
