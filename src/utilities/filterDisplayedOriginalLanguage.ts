// Filter the displayed original language data.
export function filterDisplayedOriginalLanguage(originalLanguageData: string) {
  let filteredOriginalLanguageData = originalLanguageData;
  if (/\//.test(originalLanguageData)) {
    filteredOriginalLanguageData = originalLanguageData.replace(/\//g, '');
  }
  return filteredOriginalLanguageData;
}
