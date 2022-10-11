// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { JSX } from 'solid-js';
import { invoke } from '@tauri-apps/api';
import toast from 'solid-toast';
import { Button, Menu, MenuTrigger, MenuContent, MenuItem } from '@hope-ui/solid';
import { CaretDown, Cloud, DesktopTower, FloppyDisk } from 'phosphor-solid';
import { bibleData } from 'stores/BibleDataStore';

export default (): JSX.Element => {
  const saveToSyncronized = () => {
    toast.loading('Menyimpan terjemahan ..', {
      id: 'save',
    });
    invoke('save', {
      bible: JSON.stringify(bibleData.bibleObject),
    })
      .then(() => {
        toast.remove('save');
        toast.success('Terjemahan berhasil disimpan!');
      })
      .catch((err) => {
        toast.remove('save');
        toast.error('Terjadi sebuah kesalahan, error: ' + err.message);
      });
  };

  const saveToFile = () => {
    const hiddenElement = document.createElement('a');
    hiddenElement.href = `data:attachment/text,${encodeURI(
      JSON.stringify(bibleData.bibleObject)
    )}`;
    hiddenElement.target = '_blank';
    hiddenElement.download = bibleData.bibleFileName as string;
    hiddenElement.click();
  };

  return (
    <Menu>
      <MenuTrigger
        as={Button}
        variant="outline"
        colorScheme="neutral"
        rightIcon={<CaretDown size={12} weight="bold" />}
        leftIcon={<FloppyDisk size={20} weight="light" />}
      >
        Simpan
      </MenuTrigger>
      <MenuContent maxW="$30">
        <MenuItem
          onSelect={saveToFile}
          disabled={bibleData.bibleObject.Matthew === undefined ? true : false}
          icon={<DesktopTower size={18} weight="light" />}
          iconSpacing="0.75rem"
        >
          Ke file lokal
        </MenuItem>
        <MenuItem
          onSelect={saveToSyncronized}
          disabled={bibleData.bibleObject.Matthew === undefined ? true : false}
          icon={<Cloud size={18} weight="light" />}
          iconSpacing="0.75rem"
        >
          Ke hasil sinkronisasi
        </MenuItem>
      </MenuContent>
    </Menu>
  );
};
