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
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  width: 60vw;
  height: 60vh;
  padding: 1.25em 1.5em;
  position: fixed;
  overflow-y: scroll;
  z-index: 10;
`;

export const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  & button:first-child {
    margin-right: 2em;
  }
`;

export const MarkupContainer = styled.div`
  color: black;
  font-size: 1.1rem;
  text-align: left;
`;

export const CloseButton = styled.button`
  background: "#fff";
  border: 1px solid #ccc;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  color: "#222";
  cursor: pointer;
  font-size: 1.2rem;
  text-align: center;
  transition: color 200ms;

  &:hover {
    color: "#000";
  }
`;
