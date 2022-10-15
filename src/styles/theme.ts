// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { HopeThemeConfig } from '@hope-ui/solid';
import { sage } from '@radix-ui/colors';

export const config: HopeThemeConfig = {
  lightTheme: {
    colors: {
      primary1: sage.sage1,
      primary2: sage.sage2,
      primary3: sage.sage3,
      primary4: sage.sage4,
      primary5: sage.sage5,
      primary6: sage.sage6,
      primary7: sage.sage7,
      primary8: sage.sage8,
      primary9: sage.sage9,
      primary10: sage.sage10,
      primary11: sage.sage11,
      primary12: sage.sage12,
    },
  },
  components: {
    Select: {
      baseStyle: {
        trigger: {
          width: '150px',
        },
        content: {
          height: '40vh',
        },
        listbox: {
          height: '100%',
          minHeight: '100%',
        },
        placeholder: {
          fontFamily: 'sans-serif',
        },
        optionText: {
          fontFamily: 'sans-serif',
        },
        singleValue: {
          fontFamily: 'sans-serif',
        },
      },
    },
    Button: {
      baseStyle: {
        group: {
          fontFamily: 'sans-serif',
        },
      },
    },
    Menu: {
      baseStyle: {
        trigger: {
          fontFamily: 'sans-serif',
        },
        content: {
          fontFamily: 'sans-serif',
        },
        itemText: {
          fontFamily: 'sans-serif',
        },
      },
    },
  },
};
