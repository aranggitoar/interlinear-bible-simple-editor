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


import React from 'react';
import { useState, createContext, FC, ReactNode } from 'react';

export const LoadedBibleContext = createContext<LoadedBibleContextType | null>(null);

const LoadedBibleProvider: FC<ReactNode> = ({ children }) => {
  const [loadedBibleObject, setLoadedBibleObject] = useState<Object>({});
  const [loadedBibleFileName, setLoadedBibleFileName] = useState<string>('');
  const [loadedBibleBookNames, setLoadedBibleBookNames] = useState<Array<string>>([]);
  const [displayedBibleInfo, setDisplayedBibleInfo] = useState<Array<string>>([]);

  const updateUploadedBibleObject = (uploadedBibleObject: Object) => {
    setLoadedBibleObject(uploadedBibleObject);
  };

  const updateUploadedBibleFileName = (uploadedBibleFileName: string) => {
    setLoadedBibleFileName(uploadedBibleFileName);
  };

  const updateUploadedBibleBookNames = (uploadedBibleBookNames: Array<string>) => {
    setLoadedBibleBookNames(uploadedBibleBookNames);
  };

  const updateDisplayedBibleInfo = (newDisplayedBibleInfo: Array<string>) => {
    setDisplayedBibleInfo(newDisplayedBibleInfo);
  };

  return (
    <LoadedBibleContext.Provider value={{
      loadedBibleObject, loadedBibleFileName, loadedBibleBookNames, displayedBibleInfo, updateUploadedBibleObject, updateUploadedBibleFileName, updateUploadedBibleBookNames, updateDisplayedBibleInfo
    }}>
      {children}
    </LoadedBibleContext.Provider>
  );
};

export default LoadedBibleProvider;
