import { produce } from 'solid-js/store';
import { referenceData, setReferenceData } from './ReferenceDataStore';
import * as T from 'types/ReferenceData';

export const addReferenceDataItem = (
  newReferenceTitle: string,
  newReferenceContent: string | T.VerseReferenceInfoType
) =>
  setReferenceData(
    produce((s) => {
      const uuidParts = () =>
        (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      const newUUID = (
        uuidParts() +
        uuidParts() +
        '-' +
        uuidParts() +
        '-' +
        uuidParts().substring(0, 3) +
        '-' +
        uuidParts() +
        '-' +
        uuidParts() +
        uuidParts() +
        uuidParts()
      ).toLowerCase();

      console.log(s);

      s.push({
        title: newReferenceTitle,
        content: newReferenceContent,
        uuid: newUUID,
      } as T.ReferenceDataType);
    })
  );

export const deleteReferenceDataItem = (uuid: string) =>
  setReferenceData(
    produce((s) => {
      const referenceDataIndex = s.findIndex(
        (referenceDataItem) => referenceDataItem.uuid === uuid
      );

      s.splice(referenceDataIndex, 1);
    })
  );
