// Filter the displayed strongs data.
export function filterDisplayedStrongsData(strongsData: string) {
  let filteredStrongsData = strongsData as string;
  if (/\//.test(strongsData)) {
    let temp = strongsData.split('/');
    if (temp.length === 3) {
      filteredStrongsData = temp[2];
    } else {
      filteredStrongsData = temp[1];
    }
  }

  filteredStrongsData = filteredStrongsData.replace('H', '');

  return filteredStrongsData;
}
