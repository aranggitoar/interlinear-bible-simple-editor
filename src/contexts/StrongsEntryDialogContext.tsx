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

import { createContext, useState, FC, ReactNode } from 'react';
import { StrongsEntryDialogType, StrongsEntryDialogContextType } from 'types/StrongsEntryDialog';

export const StrongsEntryDialogContext = createContext<StrongsEntryDialogContextType | null>(null);

// @ts-ignore // for now
export const StrongsEntryDialogProvider: FC<ReactNode> = ({ children, ...props }) => {
  const [strongsEntryDialog, setStrongsEntryDialog] = useState<StrongsEntryDialogType>({
    isOpen: false,
    markup: '',
    title: '',
  });

  const updateStrongsEntryDialog = (newStrongsEntryDialog: StrongsEntryDialogType) => {
    setStrongsEntryDialog(newStrongsEntryDialog);
  }

  return (
    <StrongsEntryDialogContext.Provider
      value={{strongsEntryDialog, updateStrongsEntryDialog}}
      {...props}
    >
      {children}
    </StrongsEntryDialogContext.Provider>
  );
};
