// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import { JSX } from 'solid-js/jsx-runtime';
import {
  Container,
  Text,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  createDisclosure,
  HopeProvider,
  css,
} from '@hope-ui/solid';
import { config } from 'styles/theme';
import { bibleData } from 'stores/BibleDataStore';
import {
  correctlyOrderedBibleBookNameReference,
  correctlyOrderedBibleBookNameReferenceID,
  correctlyOrderedOTBibleBookNameReference,
} from 'utils/references/correctlyOrderedBibleBookNameReferences';
import { filterDisplayedLexiconIndex } from 'utils/filterDisplayedLexiconIndex';
import { getLexiconEntry } from 'utils/getLexiconEntry';
import { createContentRows } from '.';

export default (props: Record<string, number | string>) => {
  const { isOpen, onOpen, onClose } = createDisclosure();
  const [currentlyDisplayedLexiconEntry, setCurrentlyDisplayedLexiconEntry] =
    createSignal('');
  const [isMultipleLexiconEntry, setIsMultipleLexiconEntry] = createSignal(false);
  const [isNonExistent, setIsNonExistent] = createSignal(false);

  // Get the lexicon entry/entries and get the index/indexes.
  const lexicon =
    bibleData.bibleObject[props.bibleBookName as string][
      props.bibleChapterIndex as number
    ][props.bibleVerseIndex as number][props.wordIndex as number][2];
  const lexiconIndex = filterDisplayedLexiconIndex(lexicon);

  // Check if it is a string of multiple lexicon entries.
  if (/&/.test(lexicon) === true) {
    setCurrentlyDisplayedLexiconEntry(lexicon.split('&')[0]);
    setIsMultipleLexiconEntry(true);
  } else {
    setCurrentlyDisplayedLexiconEntry(lexicon);
  }

  // Check if the lexicon entry doesn't exists.
  if (getLexiconEntry(currentlyDisplayedLexiconEntry())[0] === undefined) {
    setIsNonExistent(true);
  }

  // Create lexicon modal header, as there might be more than one lexicon entry.
  const createLexiconModalHeader = () =>
    isMultipleLexiconEntry() === true
      ? () => {
          const splitLexiconId = lexicon.split('&');
          const jsxMarkup = [] as Array<JSX.Element>;

          for (let i = 0; i < splitLexiconId.length; i++) {
            jsxMarkup.push(
              <Text
                onClick={() => setCurrentlyDisplayedLexiconEntry(splitLexiconId[i])}
                css={{
                  display: 'inline-block',
                  marginLeft: (() => (i > 0 ? '1rem' : '0'))(),
                  borderBottom: (() =>
                    currentlyDisplayedLexiconEntry() === splitLexiconId[i]
                      ? '1px solid black'
                      : '')(),
                  color: (() =>
                    currentlyDisplayedLexiconEntry() === splitLexiconId[i]
                      ? 'initial'
                      : '$blackAlpha11')(),
                  cursor: 'pointer',
                }}
              >
                {splitLexiconId[i]}
              </Text>
            );
          }

          return jsxMarkup;
        }
      : lexicon;

  // Create verse reference modals.
  const createVerseReferenceModals = () => {
    // Get the element nodes of the verse reference anchors.
    const references = document.getElementsByClassName('bible');

    for (let i = 0; i < references.length; i++) {
      const {
        isOpen: isRefOpen,
        onOpen: onRefOpen,
        onClose: onRefClose,
      } = createDisclosure();

      // Get the raw reference code.
      let verseRef = (references[i] as HTMLAnchorElement).href;

      // Make it so everytime any reference is clicked a modal is
      // rendered based on the parsed reference code.
      references[i].addEventListener('click', () => {
        let splitVerseRef = verseRef.substring(verseRef.indexOf('#') + 2, 50).split('.');
        const bibleBookName =
          correctlyOrderedBibleBookNameReference[
            (splitVerseRef[0] as unknown as number) - 1
          ];
        const bibleBookNameID =
          correctlyOrderedBibleBookNameReferenceID[
            (splitVerseRef[0] as unknown as number) - 1
          ];
        const bibleChapterIndex = (splitVerseRef[1] as unknown as number) - 1;
        const bibleVerseIndex = (splitVerseRef[2] as unknown as number) - 1;
        const wordsInVerse =
          bibleData.bibleObject[bibleBookName][bibleChapterIndex][bibleVerseIndex];

        onRefOpen();

        // Render a modal for each anchor tag.
        render(
          () => (
            <HopeProvider config={config}>
              <Modal
                centered
                scrollBehavior="inside"
                opened={isRefOpen()}
                onClose={onRefClose}
              >
                <ModalOverlay css={{ 'z-index': '1300 !important' }} />
                <ModalContent
                  css={{ 'z-index': '1300 !important' }}
                  maxW="60vw"
                  maxH="75vh"
                >
                  <ModalCloseButton />
                  <ModalHeader
                    borderBottom="1px solid #CCC"
                    fontWeight="bold"
                    fontSize="1.1rem"
                  >
                    {bibleBookNameID +
                      ' ' +
                      (bibleChapterIndex + 1) +
                      ':' +
                      (bibleVerseIndex + 1)}
                  </ModalHeader>
                  <ModalBody id={'ref' + verseRef} padding="1rem 2rem">
                    <Container
                      h="100%"
                      display="flex"
                      gridArea="display"
                      justifyContent="center"
                      alignItems="flex-start"
                      mt="1rem"
                    >
                      <Flex
                        flexDirection="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        maxWidth="75%"
                        class={
                          correctlyOrderedOTBibleBookNameReference.indexOf(
                            bibleData.bibleInfo.bibleBookName
                          ) > -1
                            ? css({ direction: 'rtl' })()
                            : css({ direction: 'ltr' })()
                        }
                      >
                        {createContentRows(
                          wordsInVerse.length,
                          bibleBookName,
                          bibleChapterIndex,
                          bibleVerseIndex,
                          currentlyDisplayedLexiconEntry()
                        )}
                      </Flex>
                    </Container>
                  </ModalBody>
                  <ModalFooter borderTop="1px solid #CCC" />
                </ModalContent>
              </Modal>
            </HopeProvider>
          ),
          document.getElementById('verse-reference-modal') as HTMLElement
        );
      });
    }
  };

  return (
    <>
      <Text
        color={isNonExistent() === true ? '#fff' : '$info11'}
        cursor={isNonExistent() === true ? 'default' : 'pointer'}
        _hover={{
          color: isNonExistent() === true ? '#fff' : '$info10',
        }}
        m="0.3rem 0"
        onClick={() => {
          onOpen();
          createVerseReferenceModals();
        }}
      >
        {lexiconIndex}
      </Text>
      <Modal centered scrollBehavior="inside" opened={isOpen()} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="90vw">
          <ModalCloseButton />
          <ModalHeader borderBottom="1px solid #CCC" fontWeight="bold" fontSize="1.1rem">
            {createLexiconModalHeader}
          </ModalHeader>
          <ModalBody
            padding="1.25rem 2.5rem"
            css={{
              'ol, ul': {
                paddingLeft: '1.5rem',
              },
            }}
            innerHTML={getLexiconEntry(currentlyDisplayedLexiconEntry())[0]}
          />
          <ModalFooter borderTop="1px solid #CCC" />
        </ModalContent>
      </Modal>
    </>
  );
};
