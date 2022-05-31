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
import { Resizable } from 're-resizable';
import parse from 'html-react-parser';
import { StrongsEntryDialogContext } from 'contexts/StrongsEntryDialogContext';
import { StrongsEntryDialogContextType } from 'types/StrongsEntryDialog';
import {
  StrongsEntryDialogContainer,
  StrongsEntryDialogResizableContainer,
  StrongsEntryDialogCloseButton,
  StrongsEntryDialogTitle,
  StrongsEntryDialogMarkupContainer,
  StrongsEntryDialogFooter,
} from './styles';

export const StrongsEntryDialogBox: FC = ({
  children,
  ...rest
}): ReactElement<Record<string, unknown>> | null => {
  const { strongsEntryDialog, updateStrongsEntryDialog } = useContext(
    StrongsEntryDialogContext
  ) as StrongsEntryDialogContextType;
  const { isOpen, markup, title } = strongsEntryDialog;

  // Initialize state for Draggable container placement.
  const [marginToCenter, setMarginToCenter] = useState({ left: 0, top: 0 });

  // Initialize states for Resizable container size.
  const [resizableWidth, setResizableWidth] = useState('50vw');
  const [resizableHeight, setResizableHeight] = useState('50vh');

  // Get the portal container node.
  const portalContainer = document.getElementById('portal') as Element | DocumentFragment;

  // Reset the strongsEntryDialog global state.
  const closeStrongsEntryDialog = () => {
    updateStrongsEntryDialog({ isOpen: false, markup: '', title: '' });
  };

  // Set up the dialog box location and event listeners once and clean it when
  // it is closed.
  const strongsEntryDialogCloseButtonRef = useRef(null);
  useEffect(() => {
    const { current } = strongsEntryDialogCloseButtonRef;
    // @ts-ignore // property 'focus' exists on object 'current'.
    if (current) current.focus();

    // From here until 21 lines below are debugging codes for a feature to be
    // implemented, ignore them.
    const bibleHrefs = [] as Array<string>;
    const dictHrefs = [] as Array<string>;
    const logHash = (event: Event): void => {
      // @ts-ignore // property 'hash' exists on object 'MouseEvent'.
      console.log(event.target.hash);
    };
    const bibleReferenceNodes = document.querySelectorAll('#portal .bible');
    bibleReferenceNodes.forEach((node) => {
      // @ts-ignore // property 'href' exists on object 'node'.
      bibleHrefs.push(node.href.split('#')[1]);
      node.addEventListener('click', logHash);
    });
    const dictionaryReferenceNodes = document.querySelectorAll('#portal .dict');
    dictionaryReferenceNodes.forEach((node) => {
      // @ts-ignore // property 'href' exists on object 'node'.
      dictHrefs.push(node.href.split('#')[1]);
      node.addEventListener('click', logHash);
    });
    console.log(bibleHrefs);
    console.log(dictHrefs);

    // Setting the Draggable container's direct children in the middle of the
    // page, as it cannot be set by CSS.
    if (document.querySelector('.strongsEntryDialogContainer') !== null) {
      const left =
        document.body.clientWidth / 2 -
        // @ts-ignore // the check was made
        document.querySelector('.strongsEntryDialogContainer').clientWidth / 2;
      const top =
        // @ts-ignore // the check was made
        document.querySelector('.strongsEntryDialogContainer').clientHeight / 2 -
        document.body.clientHeight / 2;
      setMarginToCenter({
        left,
        top,
      });
    }

    // Clean the event listeners for debugging a feature to be implemented.
    return () => {
      bibleReferenceNodes.forEach((node) => {
        node.removeEventListener('click', logHash);
      });
      dictionaryReferenceNodes.forEach((node) => {
        node.removeEventListener('click', logHash);
      });
    };
  }, [isOpen]);

  // Add an Escape key event listener once and remove it only when the window
  // is closed.
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
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
    <DraggableAny handle="#strongsEntryDialogTitle" avoidWarningRef={avoidWarningRef}>
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
        <Resizable
          style={StrongsEntryDialogResizableContainer}
          size={{ width: resizableWidth, height: resizableHeight }}
          minWidth="35vw"
          minHeight="35vh"
          maxWidth="75vw"
          maxHeight="75vh"
          onResizeStop={(event, direction, ref, d) => {
            setResizableWidth(resizableWidth + d.width);
            setResizableHeight(resizableHeight + d.height);
          }}
        >
          <StrongsEntryDialogTitle id="strongsEntryDialogTitle">
            {title}
            <StrongsEntryDialogCloseButton
              ref={strongsEntryDialogCloseButtonRef}
              onClick={closeStrongsEntryDialog}
            >
              Close
            </StrongsEntryDialogCloseButton>
          </StrongsEntryDialogTitle>
          <StrongsEntryDialogMarkupContainer>
            {parse(markup)}
          </StrongsEntryDialogMarkupContainer>
          <StrongsEntryDialogFooter />
        </Resizable>
      </StrongsEntryDialogContainer>
    </DraggableAny>,
    portalContainer
  );
};
