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
