export type PropsAll = {
  loadedBibleObject: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void
}

export type PropsLoad = {
  loadedBibleObject: ILoadedBible,
}

export type PropsUpdate = {
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void
}
