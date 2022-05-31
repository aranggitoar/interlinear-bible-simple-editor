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

import styled from "styled-components";

export const StrongsEntryDialogContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: rgb(100 100 111 / 20%) 0px 4px 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 10;
`;

export const StrongsEntryDialogResizableContainer = {
  "align-items": "center",
  display: "flex",
  "flex-direction": "column",
  padding: "0 1.25em",
  "overflow-y": "scroll",
  "overflow-x": "hidden"
} as const;

export const StrongsEntryDialogTitle = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid #999;
  background: #fff;
  cursor: move;
  display: flex;
  padding: .75rem 0 .25rem;
  position: fixed;
  flex-direction: row;
  font-size: 1.3rem;
  font-weight: bold;
  justify-content: space-between;
  width: 90%;
`;

export const StrongsEntryDialogCloseButton = styled.button`
  background: #fff;
  border: 0;
  color: #333;
  cursor: pointer;
  font-size: 1.2rem;
  text-align: center;
  transition: color 200ms;

  &:hover {
    color: #000;
  }
`;

export const StrongsEntryDialogMarkupContainer = styled.div`
  color: black;
  font-size: 1.1rem;
  text-align: left;
  padding: 3rem 0;
  width: 90%;
`;

export const StrongsEntryDialogFooter = styled.div`
  background: #fff;
  bottom: 0;
  border-top: 1px solid #999;
  height: 5%;
  position: fixed;
  width: 90%;
`;
