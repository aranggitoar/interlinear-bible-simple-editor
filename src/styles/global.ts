import { createGlobalStyles } from 'solid-styled-components';
import SBLBibLitWoff from 'assets/fonts/sbl_blit-webfont.woff2';
import SBLBibLitTTF from 'assets/fonts/SBL_BLit.ttf';

export default createGlobalStyles`
  @font-face {
    font-family: 'SBL BibLit';
    src: local('SBL Biblit'),
         local('SBLBiblit'),
         url(${SBLBibLitWoff}) format('woff2'),
         url(${SBLBibLitTTF}) format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: 'SBL BibLit' !important;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
  }

  #root {
    align-items: center;
    background-color: white;
    color: black;
    display: grid;
    grid-template-areas:
      "menu"
      "selector"
      "display";
    grid-template-rows: 4vh 8vh auto;
    justify-content: center;
    margin: auto;
    overflow: hidden;
    width: 100%;
  }

  #portal {
    position: absolute;
    z-index: 5;
    top: 0
    right: 0;
    max-width: 50vh;
    max-height: 50vh;
  }
`;

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
