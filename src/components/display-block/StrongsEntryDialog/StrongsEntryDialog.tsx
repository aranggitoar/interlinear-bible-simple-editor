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

import { FC, ReactElement, useState, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Draggable from 'react-draggable';
import parse from 'html-react-parser';
import { StrongsEntryDialogContext } from 'contexts/StrongsEntryDialogContext';
import { StrongsEntryDialogContextType } from 'types/StrongsEntryDialog';
// import { filterDisplayedStrongs } from 'utils/filterDisplayedStrongs';
import { StrongsEntryDialogContainer, MarkupContainer, Box, CloseButton } from './styles';

export const StrongsEntryDialogBox: FC = ({
  children,
  ...rest
}): ReactElement<Record<string, unknown>> | null => {
  const { strongsEntryDialog, updateStrongsEntryDialog } = useContext(
    StrongsEntryDialogContext
  ) as StrongsEntryDialogContextType;
  const { isOpen, markup } = strongsEntryDialog;
  const [marginToCenter, setMarginToCenter] = useState({ left: 0, top: 0 });
  const btnRef = useRef(null);

  const portalContainer = document.getElementById('portal') as Element | DocumentFragment;

  // Reset the StrongsEntryDialog.
  const closeStrongsEntryDialog = () => {
    updateStrongsEntryDialog({ isOpen: false, markup: '' });
  };

  useEffect(() => {
    const { current } = btnRef;
    // @ts-ignore // property 'focus' exists on object 'current'.
    if (current) current.focus();
    const bibleHrefs = [] as Array<string>;
    const dictHrefs = [] as Array<string>;
    document.querySelectorAll('#portal .bible').forEach((node) => {
      // @ts-ignore // property 'href' exists on object 'node'.
      bibleHrefs.push(node.href.split('#')[1]);
    });
    document.querySelectorAll('#portal .dict').forEach((node) => {
      // @ts-ignore // property 'href' exists on object 'node'.
      dictHrefs.push(node.href.split('#')[1]);
    });
    console.log(bibleHrefs);
    console.log(dictHrefs);

    // Setting the Draggable container's direct children in the middle of the
    // page, as it cannot be set by CSS.
    if (document.querySelector('.strongsEntryDialogContainer') !== null) {
      const left =
        document.body.clientWidth / 2 -
        // @ts-ignore // the check is made
        document.querySelector('.strongsEntryDialogContainer').clientWidth / 2;
      const top =
        // @ts-ignore // the check is made
        (document.querySelector('.strongsEntryDialogContainer').clientHeight / 2 -
          document.body.clientHeight) /
        2;
      setMarginToCenter({
        left,
        top,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    // @ts-ignore // for now
    const handleKeydown = (event) => {
      if (event.key === 'Escape') closeStrongsEntryDialog();
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [closeStrongsEntryDialog]);

  // A hack to avoid error because of an unsolved issue
  // https://github.com/react-grid-layout/react-draggable/issues/652.
  const DraggableAny: any = Draggable;

  // A hack to avoid warning because <Draggable> requires raw access to the
  // underlying DOM node.
  const avoidWarningRef = useRef(null);

  // When this if condition is not last, the Hook call order will be changed on
  // re-render, so always keep it last.
  if (!isOpen) return null;

  return createPortal(
    <DraggableAny avoidWarningRef={avoidWarningRef}>
      <StrongsEntryDialogContainer
        ref={avoidWarningRef}
        role="dialog"
        aria-describedby="dialog-desc"
        style={{
          marginLeft: marginToCenter.left,
          marginTop: marginToCenter.top,
        }}
        className="strongsEntryDialogContainer"
        {...rest}
      >
        <Box>
          {children}
          <CloseButton ref={btnRef} onClick={closeStrongsEntryDialog}>
            X
          </CloseButton>
        </Box>
        <MarkupContainer>{parse(markup)}</MarkupContainer>
      </StrongsEntryDialogContainer>
    </DraggableAny>,
    portalContainer
  );
};
