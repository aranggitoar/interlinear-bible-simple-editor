import { styled } from 'solid-styled-components';

export const BlockContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  grid-area: selector;
  justify-content: center;
  position: fixed;
  top: 4vh;
  width: 100%;
  z-index: 2;
`;

export const ItemsContainer = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(2px);
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Select = styled.select`
  border: 1px solid #aaa;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1.2em;
  margin: 0.5em;
  min-width: 80px;
  padding: 0.15em 0.3em;
`;

export const Option = styled.option``;

export const ButtonContainer = styled.div`
  position: relative;
`;

export const MoveByOneButton = styled.button`
  background: none;
  border: none;
  color: #777;
  cursor: pointer;
  font-size: 40px;
  transition: transform 500ms, color 150ms;

  &:hover {
    background: none;
    color: #444;
  }

  &:after {
    background: none;
    content: '';
    height: 150%;
    left: 0;
    position: absolute;
    top: 0;
    width: 150%;
  }

  &#forward {
    margin-left: 5vw;
  }

  &#backward {
    margin-right: 5vw;
  }

  &#forward:hover {
    transform: translateX(10px);
  }

  &#backward:hover {
    transform: translateX(-10px);
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
