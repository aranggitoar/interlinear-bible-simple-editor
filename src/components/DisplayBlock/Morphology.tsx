// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { JSX } from 'solid-js/jsx-runtime';
import {
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@hope-ui/solid';
import { bibleData } from 'stores/BibleDataStore';
import { byzMTMorphParser } from 'utils/byzMTMorphologyParser';
import { morphHBMorphParser } from 'utils/morphHBMorphologyParser';

// Filter the displayed morphological data.
// Declared outside the component function for testing purposes.
export const filterDisplayedMorphology = (
  data: string
): Array<string | Array<string> | Array<Array<string>>> => {
  // Array of ByzMT displayed morphology consists of:
  // 0. Parsed part of speech
  // 1. Part of speech code
  // 2. Array of parsed grammatical categories
  // 3. Array of grammatical categories code
  let parsedMorphology = [] as Array<string | Array<string>>;

  // If file is not OSHB.
  if (data[0] !== 'H' || data === 'HEB') {
    return byzMTMorphParser(data, parsedMorphology);
  }

  // Array of OSHB displayed morphology consists of:
  // 0. A string of one or more parsed part of speech
  // 1. A string or an array of part of speech code
  // 2. An array or a nested array of parsed grammatical categories
  // 3. An array or a nested array of grammatical categories code
  let parsedOSHBMorph = [] as Array<string | Array<string> | Array<Array<string>>>;

  return morphHBMorphParser(data, parsedOSHBMorph);
};

export default (props: Record<string, number | string>) => {
  const morphology =
    bibleData.bibleObject[props.bibleBookName as string][
      props.bibleChapterIndex as number
    ][props.bibleVerseIndex as number][props.wordIndex as number][3];

  const filteredMorphology = filterDisplayedMorphology(morphology);

  const separatedWords = () => {
    const jsxMarkup = [] as Array<JSX.Element>;

    if (typeof filteredMorphology[1] !== 'string') {
      for (let i = 0; i < filteredMorphology[1].length; i++) {
        jsxMarkup.push(
          <>
            <b>Morfologi:</b> {filteredMorphology[1][i]}
            <br />
          </>
        );
      }
    } else {
      jsxMarkup.push(
        <>
          <b>Morfologi:</b> {filteredMorphology[1]}
          <br />
        </>
      );
    }

    return jsxMarkup;
  };

  const partOfSpeech = () => {
    const jsxMarkup = [] as Array<JSX.Element>;

    if (typeof filteredMorphology[0] === 'string') {
      jsxMarkup.push(
        <>
          &emsp;<b>Kelas Kata:</b>
          <br />
          &emsp;&emsp;
          <b innerHTML={filteredMorphology[1][0] + ':'} /> {filteredMorphology[0]}
        </>
      );
    } else {
      for (let i = 0; i < filteredMorphology[0].length; i++) {
        jsxMarkup.push(
          <>
            &emsp;<b>Kelas Kata:</b>
            <br />
            &emsp;&emsp;
            <b innerHTML={filteredMorphology[1][i][0] + ':'} /> {filteredMorphology[0][i]}
          </>
        );
      }
    }

    return jsxMarkup;
  };

  const grammaticalCategories = () => {
    const jsxMarkup = [] as Array<JSX.Element>;

    if (filteredMorphology[2] === undefined) {
      return '';
    }

    if (typeof filteredMorphology[0] === 'string') {
      const innerJSXMarkup = [] as Array<JSX.Element>;
      for (let i = 0; i < filteredMorphology[2].length; i++) {
        innerJSXMarkup.push(
          <>
            &emsp;&emsp;
            <b innerHTML={filteredMorphology[3][i] + ':'} /> {filteredMorphology[2][i]}
            <br />
          </>
        );
      }
      jsxMarkup.push(
        <>
          &emsp;<b>Kategori Tata Bahasa:</b>
          <br />
          {innerJSXMarkup}
        </>
      );
    } else {
      for (let i = 0; i < filteredMorphology[0].length; i++) {
        const innerJSXMarkup = [] as Array<JSX.Element>;
        if (filteredMorphology[2][i].length > 0) {
          for (let j = 0; j < filteredMorphology[2][i].length; j++) {
            innerJSXMarkup.push(
              <>
                &emsp;&emsp;
                <b innerHTML={filteredMorphology[3][i][j] + ':'} />{' '}
                {filteredMorphology[2][i][j]}
                <br />
              </>
            );
          }
        } else {
          innerJSXMarkup.push(<></>);
        }

        if (filteredMorphology[2][i].length > 0) {
          jsxMarkup.push(
            <>
              &emsp;<b>Kategori Tata Bahasa:</b>
              <br />
              {innerJSXMarkup}
            </>
          );
        } else {
          jsxMarkup.push(<></>);
        }
      }
    }
    return jsxMarkup;
  };

  const displayedMorphology = () => {
    const sw = separatedWords();
    const pos = partOfSpeech();
    const gc = grammaticalCategories();
    const jsxMarkup = [] as Array<JSX.Element>;

    for (let i = 0; i < sw.length; i++) {
      jsxMarkup.push(
        <>
          {sw[i]}
          <div style="font-size: 0.95rem; padding: 0;">{pos[i]}</div>
          <div style="font-size: 0.95rem; padding: 0;">{gc[i]}</div>
        </>
      );
      if (i !== sw.length - 1) {
        jsxMarkup.push(<br />);
      }
    }

    return jsxMarkup;
  };

  return (
    <Popover trapFocus>
      <PopoverTrigger
        as={Text}
        cursor="pointer"
        css={{ direction: 'ltr' }}
        color="$blackAlpha10"
        _hover={{
          color: '$blackAlpha11',
        }}
        m="0.5rem 0"
        l
      >
        {filteredMorphology[4] !== undefined
          ? filteredMorphology[4]
          : filteredMorphology[0]}
      </PopoverTrigger>
      <PopoverContent maxW="fit-content">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="bold">{morphology}</PopoverHeader>
        <PopoverBody>{displayedMorphology}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
