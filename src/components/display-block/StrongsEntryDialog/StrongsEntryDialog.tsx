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

import { FC, ReactElement, useContext } from 'react';
import { createPortal } from 'react-dom';
import { StrongsEntryDialogContext } from 'contexts/StrongsEntryContext';
// import { filterDisplayedStrongs } from 'utils/filterDisplayedStrongs';
import { Container, Box, Text, Button } from './styles';

export const StrongsEntryDialogBox: FC = ({ children, ...rest }): ReactElement<Record<string, unknown>> => {
  const { strongsEntryDialog, setStrongsEntryDialog } = useContext(StrongsEntryDialogContext);
  const { isOpen, text, handler, noBtnText, yesBtnText } = strongsEntryDialog;

  return createPortal(
    <Container { ...rest }>
      <Text>Ngek ngik nguk ngak?</Text>
      <Box>
        {children}
        <Button>Uh</Button>
      </Box>
    </Container>,
    document.getElementById("portal") as Element | DocumentFragment
  );
};
