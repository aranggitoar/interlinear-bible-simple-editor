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

import { createContext, useMemo, useState, FC, ReactNode } from 'react';
import {
  LexiconEntryDialogType,
  LexiconEntryDialogContextType,
} from 'types/LexiconEntryDialog';

export const LexiconEntryDialogContext =
  createContext<LexiconEntryDialogContextType | null>(null);

// @ts-ignore // for now
export const LexiconEntryDialogProvider: FC<ReactNode> = ({ children, ...props }) => {
  const [lexiconEntryDialog, setLexiconEntryDialog] = useState<LexiconEntryDialogType>({
    isOpen: false,
    lexiconIndex: '',
    lexiconEntry: '',
  });

  const updateLexiconEntryDialog = (newLexiconEntryDialog: LexiconEntryDialogType) => {
    setLexiconEntryDialog(newLexiconEntryDialog);
  };

  return (
    <LexiconEntryDialogContext.Provider
      value={useMemo(
        () => ({ lexiconEntryDialog, updateLexiconEntryDialog }),
        [lexiconEntryDialog, updateLexiconEntryDialog]
      )}
      {...props}
    >
      {children}
    </LexiconEntryDialogContext.Provider>
  );
};
