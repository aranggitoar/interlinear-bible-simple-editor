import * as React from 'react';

import { useId, useBoolean } from '@fluentui/react-hooks';
import {
  TextField,
  Modal,
  IDragOptions,
  Stack,
  IStackProps,
  Toggle,
} from '@fluentui/react';


// https://developer.microsoft.com/en-us/fluentui#/controls/web/modal
function strongsDictionaryEntryDialogBox(strongsDictionaryEntry: Object) {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
  const [keepInBounds, { toggle: toggleKeepInBounds }] = useBoolean(false);
  
}

