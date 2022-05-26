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


interface ILoadedWord {
  targetWord: string;
  originalWord: string;
  strongs: string;
  morphology: string;
}

type LoadedBibleContextType = {
  loadedBibleObject: Object;
  loadedBibleFileName: string;
  loadedBibleBookNames: Array<string>;
  displayedBibleInfo: Array<string>;
  updateUploadedBibleObject: (uploadedBibleObject: Object) => void;
  updateUploadedBibleFileName: (uploadedBibleFileName: string) => void;
  updateUploadedBibleBookNames: (uploadedBibleBookNames: Array<string>) => void;
  updateDisplayedBibleInfo: (newDisplayedBibleInfo: Array<string>) => void;
} 

type MenuProps = Omit<LoadedBibleContextType, "loadedBibleBookNames" | "displayedBibleInfo">

type FileLoadHandlerMenuProps = Omit<MenuProps, "loadedBibleObject" | "loadedBibleFileName">

type FileSaveHandlerMenuProps = Pick<MenuProps, "loadedBibleObject" | "loadedBibleFileName">

type BibleBookSelectorProps = Pick<LoadedBibleContextType, "loadedBibleBookNames" | "displayedBibleInfo" | "updateDisplayedBibleInfo">

type NonBibleBookSelectorProps = Pick<LoadedBibleContextType, "loadedBibleObject" | "displayedBibleInfo" | "updateDisplayedBibleInfo">

type TranslationColumnProps = Pick<LoadedBibleContextType, "loadedBibleObject" | "displayedBibleInfo" | "updateUploadedBibleObject">

type TranslationRowProps = {
  wordIndex: number;
} & TranslationColumnProps
