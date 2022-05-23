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

  body {
    background-color: white;
    color: black;
    margin: auto;
  }

  #root {
    display: flex;
    width: 100%;
  }

  #hidden-containers {
    display: none;
  }
`;
