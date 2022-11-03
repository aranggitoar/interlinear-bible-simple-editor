// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { css, Flex, Text, Tabs, TabList, Tab, TabPanel } from '@hope-ui/solid';
import { For } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { bibleData } from 'stores/BibleDataStore';
import { referenceData } from 'stores/ReferenceDataStore';
import {
  addReferenceDataItem,
  deleteReferenceDataItem,
} from 'stores/ReferenceDataActions';
import {
  correctlyOrderedBibleBookNameReference,
  correctlyOrderedBibleBookNameReferenceID,
  correctlyOrderedOTBibleBookNameReference,
} from 'utils/references/correctlyOrderedBibleBookNameReferences';
import { getLexiconEntry } from 'utils/getLexiconEntry';
import { createContentRows } from '.';
import * as T from 'types/ReferenceData';

export default () => {
  const addVerseReferenceTabs = (tabID: string) => {
    // Get the element nodes of the verse reference anchors.
    const verseReferences = (
      document.getElementById(tabID) as Element
    ).getElementsByClassName('bible');

    for (let i = 0; i < verseReferences.length; i++) {
      // Check for certain CSS class to skip listened elements.
      if (verseReferences[i].classList.contains('listened') === false) {
        // Add certain CSS class to mark element as listened.
        verseReferences[i].classList.add('listened');

        // Get the raw reference code.
        let verseRef = (verseReferences[i] as HTMLAnchorElement).href;

        // Make it so everytime any reference is clicked a modal is
        // rendered based on the parsed reference code.
        verseReferences[i].addEventListener('click', () => {
          console.log(verseRef);
          let splitVerseRef = verseRef
            .substring(verseRef.indexOf('#') + 2, 50)
            .split('.');
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

          addReferenceDataItem(
            bibleBookNameID + ' ' + (bibleChapterIndex + 1) + ':' + (bibleVerseIndex + 1),
            {
              wordsInVerse: wordsInVerse.length,
              bibleBookName: bibleBookName,
              bibleChapterIndex: bibleChapterIndex,
              bibleVerseIndex: bibleVerseIndex,
            } as T.VerseReferenceInfoType
          );
        });
      }

      // Get the element nodes of the lexicon reference anchors.
      const lexiconReferences = (
        document.getElementById(tabID) as Element
      ).getElementsByClassName('dict');

      for (let i = 0; i < lexiconReferences.length; i++) {
        if (lexiconReferences[i].classList.contains('listened') === false) {
          lexiconReferences[i].classList.add('listened');

          // Get the raw lexicon index.
          let lexiconRef = (lexiconReferences[i] as HTMLAnchorElement).href;
          lexiconReferences[i].addEventListener('click', () => {
            console.log(lexiconRef);
            lexiconRef = lexiconRef.substring(lexiconRef.indexOf('#') + 2, 50);
            console.log(lexiconRef);
            if (/&/.test(lexiconRef) === true) {
              const splitLexiconId = lexiconRef.split('&');
              for (let i = 0; i < splitLexiconId.length; i++) {
                addReferenceDataItem(
                  splitLexiconId[i],
                  getLexiconEntry(splitLexiconId[i])[0]
                );
              }
            } else {
              addReferenceDataItem(lexiconRef, getLexiconEntry(lexiconRef)[0]);
            }
          });
        }
      }
    }
    console.log(verseReferences);
  };

  return (
    <Tabs
      w={referenceData[0] === undefined ? 'initial' : '35vw'}
      right="3rem"
      height="70vh"
      position="fixed"
    >
      <TabList>
        <For each={referenceData}>
          {(reference) => {
            // Add listeners to verse reference tags for the first element.
            if (referenceData[0] !== undefined && referenceData.length === 1) {
              setTimeout(() => addVerseReferenceTabs(reference.uuid), 200);
            }
            return (
              <>
                <Tab
                  position="relative"
                  onFocus={() =>
                    typeof reference.content === 'string'
                      ? addVerseReferenceTabs(reference.uuid)
                      : ''
                  }
                >
                  {reference.title}
                  <Text
                    css={{
                      cursor: 'pointer',
                      zIndex: '3',
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      fontSize: '0.8rem',
                    }}
                    onClick={() => deleteReferenceDataItem(reference.uuid)}
                  >
                    ✕
                  </Text>
                </Tab>
              </>
            );
          }}
        </For>
      </TabList>
      <For each={referenceData}>
        {(reference) => {
          const jsxMarkup = [] as Array<JSX.Element>;
          if (typeof reference.content === 'string') {
            jsxMarkup.push(
              <TabPanel
                id={reference.uuid}
                innerHTML={reference.content as unknown as string}
                overflowY="scroll"
                height="100%"
              />
            );
          } else {
            jsxMarkup.push(
              <TabPanel
                id={reference.uuid}
                overflowY="scroll"
                height="100%"
                class={
                  correctlyOrderedOTBibleBookNameReference.indexOf(
                    bibleData.bibleInfo.bibleBookName
                  ) > -1
                    ? css({ direction: 'rtl' })()
                    : css({ direction: 'ltr' })()
                }
              >
                <Flex
                  flexDirection="row"
                  flexWrap="wrap"
                  justifyContent="center"
                  class={
                    correctlyOrderedOTBibleBookNameReference.indexOf(
                      bibleData.bibleInfo.bibleBookName
                    ) > -1
                      ? css({ direction: 'rtl' })()
                      : css({ direction: 'ltr' })()
                  }
                >
                  {createContentRows(
                    reference.content.wordsInVerse,
                    reference.content.bibleBookName,
                    reference.content.bibleChapterIndex,
                    reference.content.bibleVerseIndex
                  )}
                </Flex>
              </TabPanel>
            );
          }
          return jsxMarkup;
        }}
      </For>
    </Tabs>
  );
};
