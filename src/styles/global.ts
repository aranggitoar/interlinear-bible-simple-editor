// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { globalCss } from '@hope-ui/solid';
import SBLBibLitWoff from 'assets/fonts/sbl_blit-webfont.woff2';
import SBLBibLitTTF from 'assets/fonts/SBL_BLit.ttf';

export const GlobalStyle = globalCss({
  '@font-face': {
    fontFamily: 'SBL BibLit',
    src: `local("SBL Biblit"), local("SBLBiblit"), url(${SBLBibLitWoff}) format("woff2"), url(${SBLBibLitTTF}) format("ttf")`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },

  '*': {
    fontFamily: 'SBL BibLit',
    fontSize: '16px',
  },

  // For notification library "Solid Toast"
  '.sldt-active *': {
    fontFamily: 'sans-serif !important',
  },
});
