import { createStore } from 'solid-js/store';

export const [globalSettings, setGlobalSettings] = createStore({
  viewBibleBy: 'verses' as 'verses' | 'chapters',
  fontSize: 16 as number,
});
