// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { JSX } from 'solid-js/jsx-runtime';
import { css } from '@hope-ui/solid';
import { Container, Flex } from '@hope-ui/solid';
import Lexicon from './Lexicon';
import Original from './Original';
import Translation from './Translation';
import Morphology from './Morphology';
import { correctlyOrderedOTBibleBookNameReference } from 'utils/references/correctlyOrderedBibleBookNameReferences';
import { bibleData } from 'stores/BibleDataStore';

const createContentRows = (wordsInVerse: number): JSX.Element => {
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
      >
        <Lexicon wordIndex={wordIndex} />
        <Original wordIndex={wordIndex} />
        <Translation wordIndex={wordIndex} />
        <Morphology wordIndex={wordIndex} />
      </Flex>
    );
  }

  return jsxMarkup as JSX.Element;
};

export default (): JSX.Element => (
  <Container
    h="100%"
    display="flex"
    gridArea="display"
    justifyContent="center"
    alignItems="flex-start"
    mt="2rem"
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
      {createContentRows(bibleData.bibleInfo.bibleWordCount)}
    </Flex>
  </Container>
);
