interface ILoadedBible {
  bibleObject: Object;
  chosenBibleSourceName: string;
  chosenBibleBookNames: Array<string>;
  chosenBibleBookDetails: Array<string>;
}

type LoadedBibleContextType = {
  loadedBibleObject: ILoadedBible;
  downloadBible: (bibleObject: Object) => void;
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void;
} 
