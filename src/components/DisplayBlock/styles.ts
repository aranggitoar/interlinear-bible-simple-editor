import { styled } from 'solid-styled-components';

export const BlockContainer = styled.div`
  align-items: flex-start;
  display: flex;
  grid-area: display;
  justify-content: center;
  height: 100%;
  margin-top: 2rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 75%;

  &.rtl {
    direction: rtl !important;
  }

  &.ltr {
    direction: ltr !important;
  }
`;

export const WordContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  max-width: 75%;
`;

export const LexiconContainer = styled.div`
  align-items: center;
  color: #4444dd;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.15em 0;
  max-width: 135px;

  &:hover {
    color: #3333cc;
  }
`;

export const OriginalContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  justify-content: center;
  padding: 0.15em 0;
  max-width: 135px;
`;

export const TranslationField = styled.textarea`
  border: 1px dashed rgb(188, 186, 184) !important;
  border-radius: 2.5px !important;
  color: #dd4444 !important;
  height: 2em;
  padding: 0.1em 0.4em;
  resize: none;
  width: 100%;

  &:hover {
    border: 1px dashed rgb(142, 140, 138) !important;
  }
`;

export const MorphologyContainer = styled.div`
  align-items: center;
  color: #555555;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.15em 0;
  max-width: 135px;
  text-align: center;
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
