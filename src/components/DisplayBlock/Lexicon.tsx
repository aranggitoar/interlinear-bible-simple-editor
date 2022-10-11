// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import {
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  createDisclosure,
} from '@hope-ui/solid';
import { bibleData } from 'stores/BibleDataStore';
import { filterDisplayedLexiconIndex } from 'utils/filterDisplayedLexiconIndex';
import { getLexiconEntry } from 'utils/getLexiconEntry';

export default (props: Record<string, number>) => {
  const { isOpen, onOpen, onClose } = createDisclosure();
  const lexicon =
    bibleData.bibleObject[bibleData.bibleInfo.bibleBookName][
      bibleData.bibleInfo.bibleChapterIndex
    ][bibleData.bibleInfo.bibleVerseIndex][props.wordIndex][2];

  return (
    <>
      <Text
        color="$info11"
        cursor="pointer"
        _hover={{
          color: '$info10',
        }}
        m="0.3rem 0"
        onClick={onOpen}
      >
        {filterDisplayedLexiconIndex(lexicon)}
      </Text>
      <Modal centered scrollBehavior="inside" opened={isOpen()} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="90vw">
          <ModalCloseButton />
          <ModalHeader borderBottom="1px solid #CCC" fontWeight="bold" fontSize="1.1rem">
            {lexicon}
          </ModalHeader>
          <ModalBody
            padding="1.25rem 2.5rem"
            css={{
              'ol, ul': {
                paddingLeft: '1.5rem',
              },
            }}
            innerHTML={getLexiconEntry(lexicon)[0]}
          />
          <ModalFooter borderTop="1px solid #CCC" />
        </ModalContent>
      </Modal>
    </>
  );
};
