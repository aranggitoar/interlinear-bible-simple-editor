interface ILoadedBible {
  bibleObject: Object;
  chosenBibleSourceName: string;
  chosenBibleBookNames: Array<string>;
  chosenBibleBookDetails: Array<string>;
}

interface ILoadedVerse {
  arrayOfTargetWords: Array<string>;
  arrayOfOriginalWords: Array<string>;
  arrayOfStrongs: Array<string>;
  arrayOfMorphologies: Array<string>;
  chosenBibleBookDetails: Array<string>;
}

type LoadedBibleContextType = {
  loadedBibleObject: ILoadedBible;
  downloadBible: (bibleObject: Object) => void;
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void;
} 

type Props = {
  loadedBibleObject: ILoadedBible;
  updateUploadedBible?: (newlyLoadedBibleObject: ILoadedBible) => void;
}

type VerseDataProps = {
  loadedBibleVerse: ILoadedVerse;
  verseIndex: number;
}
