import { Show } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import BibleBook from './BibleBook';
import Chapter from './Chapter';
import Verse from './Verse';
import { MoveBackwardByOne, MoveForwardByOne } from './MoveByOne';
import { globalSettings } from 'stores/globalSettingsStore';
import * as S from './styles';

export default (): JSX.Element => (
  <S.BlockContainer>
    <S.ItemsContainer>
      <MoveBackwardByOne />
      <BibleBook />
      <Chapter />
      <Show when={globalSettings.viewBibleBy === 'verses'}>
        <Verse />
      </Show>
      <MoveForwardByOne />
    </S.ItemsContainer>
  </S.BlockContainer>
);

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
