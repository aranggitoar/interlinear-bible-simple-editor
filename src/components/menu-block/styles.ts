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
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  width: 100%;

  .menu-items {
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: .1em .2em;
  }

  .menu-items:hover {
    background: #f2f2f2;
  }

  .menu-items label,
  .menu-items span,
  .menu-items button {
    align-items: center;
    border: 0;
    background: none;
    font-size: 16px;
    font-weight: 400 !important;
    text-transform: uppercase;
    transition: all 500ms;
  }

  .menu-items button:hover {
    background: none;
  }

  #menu-load-file input,
  #menu-save-file input {
    display: none;
  }

  #menu-load-file label,
  #menu-save-file label {
    cursor: pointer;
  }

  #menu-load-file label:after,
  #menu-save-file span:after {
    content: "";
    height: 125%;
    left: 0;
    position: absolute;
    top: 0;
    width: 125%;
  }

  #menu-save-file {
    padding: 0;
  }
`;

