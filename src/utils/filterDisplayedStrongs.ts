/*

Interlinear Bible Simple Editor is a multiplatform interlinear bible translation software.
Copyright (C) 2022  Aranggi J. Toar

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; only version 2 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA. 

*/

// Filter the displayed strongs data.
export const filterDisplayedStrongs = (data: string): string => {
  let filteredStrongs = data as string;

  if (filteredStrongs[0] === 'G') {
    if (filteredStrongs.indexOf('&') > -1) {
      filteredStrongs = filteredStrongs.replace('&', ' & ');
    }
    filteredStrongs = filteredStrongs.replace(/[G]/g, '');
  } else if (filteredStrongs[0] === 'H') {
    // The Strongs number for OSHB is always with a forward slash, but the Strongs number is always last
    if (/\//.test(data)) {
      const temp = data.split('/');
      const [, posTwo, posThree] = temp;
      if (temp.length === 3) {
        filteredStrongs = posThree;
      } else {
        filteredStrongs = posTwo;
      }
    }
    filteredStrongs = filteredStrongs.replace('H', '');
  }

  return filteredStrongs;
};

