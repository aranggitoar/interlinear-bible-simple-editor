// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { JSX } from 'solid-js';
import { invoke } from '@tauri-apps/api';
import toast from 'solid-toast';
import { Button, Menu, MenuTrigger, MenuContent, MenuItem } from '@hope-ui/solid';
import { CaretDown, Cloud, DesktopTower, FolderOpen } from 'phosphor-solid';
import { BibleDataObjectType } from 'types/BibleData';

export default ({
  loadBibleFromParsedJSON,
}: {
  loadBibleFromParsedJSON: (bibleObject: BibleDataObjectType, fileName?: string) => void;
}): JSX.Element => {
  const loadFromSyncronized = () => {
    toast.loading('Memuat terjemahan ..', {
      id: 'load',
    });
    invoke('load')
      .then((res) => {
        // @ts-ignore // property "message" of "res" exists
        loadBibleFromParsedJSON(JSON.parse(res.message));
        toast.remove('load');
        toast.success('Terjemahan berhasil dimuat!');
      })
      .catch((err) => {
        toast.remove('load');
        toast.error('Terjadi sebuah kesalahan, error: ' + err.message);
      });
  };

  const loadFromFile = (event: Event): void => {
    event.preventDefault();

    const fileReader = new FileReader();
    // @ts-ignore // property "files" of "event.target" exists
    fileReader.readAsText(event.target.files[0], 'UTF-8');

    fileReader.onload = (fileReaderEvent) => {
      // @ts-ignore // property "result" of "currentTarget" exists
      const bibleObject = Object.assign(JSON.parse(fileReaderEvent.currentTarget.result));

      loadBibleFromParsedJSON(bibleObject);
    };
  };

  return (
    <Menu>
      <MenuTrigger
        as={Button}
        variant="outline"
        colorScheme="neutral"
        rightIcon={<CaretDown size={12} weight="bold" />}
        leftIcon={<FolderOpen size={20} weight="light" />}
      >
        Muat
      </MenuTrigger>
      <MenuContent maxW="$30">
        <MenuItem
          onSelect={() => {
            const clickEvent = new MouseEvent('click', {
              view: window,
              bubbles: false,
              cancelable: false,
            });

            document.querySelector('#loadFromFile')?.dispatchEvent(clickEvent);
          }}
          icon={<DesktopTower size={18} weight="light" />}
          iconSpacing="0.75rem"
        >
          Dari file lokal
          <input
            style={{ display: 'none' }}
            id="loadFromFile"
            type="file"
            onChange={loadFromFile}
          />
        </MenuItem>
        <MenuItem
          onSelect={loadFromSyncronized}
          icon={<Cloud size={18} weight="light" />}
          iconSpacing="0.75rem"
        >
          Dari hasil sinkronisasi
        </MenuItem>
      </MenuContent>
    </Menu>
  );
};
