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


import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: center;
  padding: 1rem;

  #column-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    max-width: 75%;
  }

  #column-container > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: .5em;
  }

  .rtl {
    direction: rtl !important;
  }

  .ltr {
    direction: ltr !important;
  }

  .row-container {
    padding: .15em 0;
    max-width: 135px;
  }

  .row-strongs {
    color: #4444dd;
  }

  .row-original-language {
    font-size: 1.5em;
  }

  .row-target-language div {
    border: none;
    direction: ltr;
  }

  .row-morphology {
    color: #555555;
  }

  .row-target-language input {
    border: 1px dashed rgb(188,186,184) !important;
    border-radius: 2.5px !important;
    color: #dd4444 !important;
  }

  .row-target-language input:hover {
    border: 1px dashed rgb(142,140,138) !important;
  }
`;

