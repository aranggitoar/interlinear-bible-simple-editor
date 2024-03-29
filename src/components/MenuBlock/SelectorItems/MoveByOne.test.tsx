// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { fireEvent, render } from 'solid-testing-library';
import { MoveForwardByOne, MoveBackwardByOne } from 'components/SelectorBlock/MoveByOne';
import { bibleData } from 'stores/BibleDataStore';
import { moveOneVerseForward } from 'stores/BibleDataActions';
import setupStore from 'tests/setup';

describe('<MoveForwardByOne />', () => {
  setupStore();
  test('renders', () => {
    const { container, unmount } = render(() => <MoveForwardByOne />);
    expect(container.innerHTML).toContain('›');
    unmount();
  });

  test('updates', () => {
    const { unmount, getByRole } = render(() => <MoveForwardByOne />);
    fireEvent.click(getByRole('button') as Element);
    expect(bibleData.bibleInfo.bibleVerseIndex).toEqual(1);
    unmount();
  });
});

describe('<MoveBackwardByOne />', () => {
  setupStore();
  test('renders', () => {
    const { container, unmount } = render(() => <MoveBackwardByOne />);
    expect(container.innerHTML).toContain('‹');
    unmount();
  });

  test('updates', () => {
    const { unmount, getByRole } = render(() => <MoveBackwardByOne />);
    moveOneVerseForward();
    moveOneVerseForward();
    fireEvent.click(getByRole('button') as Element);
    expect(bibleData.bibleInfo.bibleVerseIndex).toEqual(1);
    unmount();
  });
});
