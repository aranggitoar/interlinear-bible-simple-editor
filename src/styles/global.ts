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


import { createGlobalStyle } from 'styled-components';
import SBLBibLitWoff from '@/assets/sbl_blit-webfont.woff2';
import SBLBibLitTTF from '@/assets/SBL_BLit.ttf';


export default createGlobalStyle`
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
  }

  main {
    align-items: center;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  #root {
    display: flex;
    width: 100%;
  }
`;
