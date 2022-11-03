// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { JSX } from 'solid-js/jsx-runtime';
import { css, HStack, Box, Flex } from '@hope-ui/solid';
import Lexicon from './Lexicon';
import Original from './Original';
import Translation from './Translation';
import Morphology from './Morphology';
import Reference from './Reference';
import { correctlyOrderedOTBibleBookNameReference } from 'utils/references/correctlyOrderedBibleBookNameReferences';
import { bibleData } from 'stores/BibleDataStore';
import { referenceData } from 'stores/ReferenceDataStore';

// Create rows of lexicon entry, original word, translated word, and word morphology.
export const createContentRows = (
  wordsInVerse: number,
  bibleBookName: string,
  bibleChapterIndex: number,
  bibleVerseIndex: number,
  currentlyDisplayedLexiconEntry?: string
): JSX.Element => {
  const jsxMarkup = [] as Array<JSX.Element>;

  // Generate as many containers as the word count of the current verse.
  for (let wordIndex = 0; wordIndex < wordsInVerse; wordIndex++) {
    jsxMarkup.push(
      <Flex
        alignItems="center"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        maxWidth="75%"
        p="0.75rem 1.25rem"
        css={{
          '*': {
            color: (() => {
              const lexiconRegExp = new RegExp(currentlyDisplayedLexiconEntry as string);

              return lexiconRegExp.test(
                bibleData.bibleObject[bibleBookName][bibleChapterIndex][bibleVerseIndex][
                  wordIndex
                ][2]
              ) && currentlyDisplayedLexiconEntry !== undefined
                ? '$danger11'
                : '';
            })(),
          },
          '*:hover': {
            color: (() => {
              const lexiconRegExp = new RegExp(currentlyDisplayedLexiconEntry as string);

              return lexiconRegExp.test(
                bibleData.bibleObject[bibleBookName][bibleChapterIndex][bibleVerseIndex][
                  wordIndex
                ][2]
              ) && currentlyDisplayedLexiconEntry !== undefined
                ? '$danger11'
                : '';
            })(),
          },
        }}
      >
        <Lexicon
          wordIndex={wordIndex}
          bibleBookName={bibleBookName}
          bibleChapterIndex={bibleChapterIndex}
          bibleVerseIndex={bibleVerseIndex}
        />
        <Original
          wordIndex={wordIndex}
          bibleBookName={bibleBookName}
          bibleChapterIndex={bibleChapterIndex}
          bibleVerseIndex={bibleVerseIndex}
        />
        <Translation
          wordIndex={wordIndex}
          bibleBookName={bibleBookName}
          bibleChapterIndex={bibleChapterIndex}
          bibleVerseIndex={bibleVerseIndex}
        />
        <Morphology
          wordIndex={wordIndex}
          bibleBookName={bibleBookName}
          bibleChapterIndex={bibleChapterIndex}
          bibleVerseIndex={bibleVerseIndex}
        />
      </Flex>
    );
  }

  return jsxMarkup as JSX.Element;
};

export default (): JSX.Element => (
  <Box
    h="100%"
    display="flex"
    gridArea="display"
    justifyContent={referenceData[0] === undefined ? 'center' : 'flex-start'}
    alignItems="flex-start"
    m="8rem 0 0 1rem"
    w="100vw"
    position="relative"
  >
    <HStack
      spacing={referenceData[0] === undefined ? 'initial' : '1rem'}
      alignItems="flex-start"
    >
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        w={referenceData[0] === undefined ? '75vw' : '60vw'}
        class={
          correctlyOrderedOTBibleBookNameReference.indexOf(
            bibleData.bibleInfo.bibleBookName
          ) > -1
            ? css({ direction: 'rtl' })()
            : css({ direction: 'ltr' })()
        }
      >
        {createContentRows(
          bibleData.bibleInfo.bibleWordCount,
          bibleData.bibleInfo.bibleBookName,
          bibleData.bibleInfo.bibleChapterIndex,
          bibleData.bibleInfo.bibleVerseIndex
        )}
      </Flex>
      <Reference />
    </HStack>
  </Box>
);
