// Get the translation result from the HTML.
export function getTranslationResult(verseLength: number) {
  let arrayOfResult = [] as Array<string>;
  for (let i = 0; verseLength > i; i++) {
    // @ts-ignore // property exists
    arrayOfResult.push(document.getElementById('target-language-' + i).value);
  }
  return arrayOfResult;
}
