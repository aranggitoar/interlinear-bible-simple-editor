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
import { createContentRows } from '.';
import * as T from 'types/ReferenceData';

export default () => {
  const addVerseReferenceTabs = (tabID: string) => {
    // Get the element nodes of the verse reference anchors.
    const references = (document.getElementById(tabID) as Element).getElementsByClassName(
      'bible'
    );

    for (let i = 0; i < references.length; i++) {
      // Check for certain CSS class to skip listened elements.
      if (references[i].classList.contains('listened') === false) {
        // Add certain CSS class to mark element as listened.
        references[i].classList.add('listened');

        // Get the raw reference code.
        let verseRef = (references[i] as HTMLAnchorElement).href;

        // Make it so everytime any reference is clicked a modal is
        // rendered based on the parsed reference code.
        references[i].addEventListener('click', () => {
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
    }
    console.log(references);
  };

  return (
    <Tabs
      w={referenceData[0] === undefined ? 'initial' : '47.5vw'}
      right="1rem"
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
                  onFocus={() =>
                    typeof reference.content === 'string'
                      ? addVerseReferenceTabs(reference.uuid)
                      : ''
                  }
                >
                  {reference.title}
                </Tab>
                <Text
                  css={{ margin: '0 0.25rem 0 0.15rem', cursor: 'pointer', zIndex: '3' }}
                  onClick={() => deleteReferenceDataItem(reference.uuid)}
                >
                  ✕
                </Text>
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
