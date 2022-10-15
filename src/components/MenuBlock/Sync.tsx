// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { invoke } from '@tauri-apps/api';
import { JSX } from 'solid-js';
import toast from 'solid-toast';
import { Menu, MenuTrigger, Button, MenuContent, MenuItem } from '@hope-ui/solid';
import { CaretDown, Cloud, CloudArrowDown, CloudArrowUp } from 'phosphor-solid';
import { BibleDataObjectType } from 'types/BibleData';
import { bibleData } from 'stores/BibleDataStore';

export default ({
  loadBibleFromParsedJSON,
}: {
  loadBibleFromParsedJSON: (bibleObject: BibleDataObjectType, fileName?: string) => void;
}): JSX.Element => {
  // TODO: Add the steps for creating changelogs.
  // Syncing with upstream repository. Steps:
  // 1. Check if the repo exists locally,
  // 2a. If it does, check if it is updated,
  // 2b. If it doesn't, clone and load the repo,
  // 3a. If it is updated, load the file
  // 3b. If it is not updated, update the repo, then load the file
  const download = () => {
    toast.loading('Memeriksa apakah ada pembaruan ..', { id: 'update-sync' });
    invoke('exists').then((res) => {
      // @ts-ignore
      if (res.message === true) {
        invoke('has_changes').then((res) => {
          toast.remove('update-sync');
          // @ts-ignore
          if (res.message === true) {
            toast.error(
              'Ada pembaruan yang belum Anda unggah! Silahkan pilih "Unggah" terlebih dahulu.'
            );
          } else {
            invoke('pull')
              .then((res) => {
                toast.remove('update-sync');
                // @ts-ignore
                if (res.message) {
                  toast.success('Terjemahan sudah terbarui!');
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
                }
              })
              .catch((err) => {
                toast.remove('update-sync');
                toast.error('Terjadi sebuah kesalahan, error log: ' + err.message);
              });
          }
        });
      } else {
        toast.loading('Mengunduh terjemahan sekarang ..', { id: 'clone-sync' });
        invoke('clone')
          .then(() => {
            toast.remove('clone-sync');
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
          })
          .catch((err) => {
            toast.remove('clone-sync');
            // @ts-ignore
            toast.error('Terjadi sebuah kesalahan, error: ' + err.message);
          });
      }
    });
  };

  const upload = () => {
    toast.loading('Menyimpan pembaruan sebelum mengunggah ..', {
      id: 'save-sync',
    });
    const bible = JSON.stringify(bibleData.bibleObject);
    invoke('save', {
      bible,
    })
      .then(() => {
        toast.remove('save-sync');
        toast.success('Terjemahan berhasil disimpan untuk pengunggahan!');
        toast.loading('Mengunggah pembaruan ..', {
          id: 'push-sync',
        });
      })
      .catch((err) => {
        toast.remove('save-sync');
        toast.error('Terjadi sebuah kesalahan, error: ' + err.message);
      });
    invoke('commit', { message: 'Pembaruan.' })
      .then(() =>
        invoke('push')
          .then(() => {
            toast.remove('push-sync');
            toast.success('Terjemahan berhasil diunggah!');
          })
          .catch((err) => {
            toast.error('Terjadi sebuah kesalahan, error: ' + err.message);
          })
      )
      .catch((err) => toast.error('Terjadi sebuah kesalahan, error: ' + err.message));
  };

  return (
    <Menu>
      <MenuTrigger
        as={Button}
        variant="outline"
        colorScheme="neutral"
        rightIcon={<CaretDown size={12} weight="bold" />}
        leftIcon={<Cloud size={20} weight="light" />}
      >
        Sinkronisasi
      </MenuTrigger>
      <MenuContent maxW="$30">
        <MenuItem
          onSelect={download}
          icon={<CloudArrowDown size={18} weight="light" />}
          iconSpacing="0.75rem"
        >
          Unduh file
        </MenuItem>
        <MenuItem
          onSelect={upload}
          icon={<CloudArrowUp size={18} weight="light" />}
          iconSpacing="0.75rem"
        >
          Unggah file
        </MenuItem>
      </MenuContent>
    </Menu>
  );
};
