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

import styled from "styled-components/macro";

export const Container = styled.div`
  background: #f7f9fa;
  border-radius: 10px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  left: 50%;
  max-width: 330px;
  padding: 1.25em 1.5em;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  & button:first-child {
    margin-right: 2em;
  }
`;

export const Text = styled.p`
  color: black;
  font-size: 1.1rem;
  margin-bottom: 1.5em;
  text-align: center;
`;

export const Button = styled.button`
  background: "#f7f9fa";
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(241, 85, 76, 0.25);
  color: "#d2342a";
  font-size: 1.2rem;
  padding: 0.3em 0;
  text-align: center;
  transition: background-color 100ms;
  width: 100px;

  &:hover {
    background: "#f1f1f1";
  }
`;
