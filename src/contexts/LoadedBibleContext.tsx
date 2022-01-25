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


import * as React from 'react';

export const LoadedBibleContext = React.createContext<LoadedBibleContextType | null>(null);

const LoadedBibleProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [loadedBibleObject, setLoadedBibleObject] = React.useState<ILoadedBible>(
    {
      bibleObject: {},
      chosenBibleSourceName: 'morphhb.js',
      chosenBibleBookNames: [],
      chosenBibleBookDetails: ['', '0', '0'],
    },
  );

  const downloadBible = (bibleObject: Object) => {
    return JSON.stringify(bibleObject);
  }

  const updateUploadedBible = (newlyLoadedBibleObject: ILoadedBible) => {
    const newBibleObject: ILoadedBible = {
      bibleObject: newlyLoadedBibleObject.bibleObject,
      chosenBibleSourceName: newlyLoadedBibleObject.chosenBibleSourceName,
      chosenBibleBookNames: newlyLoadedBibleObject.chosenBibleBookNames,
      chosenBibleBookDetails: newlyLoadedBibleObject.chosenBibleBookDetails,
    }
    setLoadedBibleObject(newBibleObject);
  };

  return (
    <LoadedBibleContext.Provider value={{ loadedBibleObject, downloadBible, updateUploadedBible }}>
      {children}
    </LoadedBibleContext.Provider>
  );
};

export default LoadedBibleProvider;
