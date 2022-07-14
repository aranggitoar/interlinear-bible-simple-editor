import { lexiconEntryDialog, setLexiconEntryDialog } from './LexiconEntryDialogStore';
import { LexiconEntryDialogType } from 'types/LexiconEntryDialog';

export const toggleLexiconEntryDialog;
setLexiconEntryDialog({
  isOpen: true,
  lexiconIndex: lexicon,
  lexiconEntry: getLexiconEntry(lexicon)[0],
});
