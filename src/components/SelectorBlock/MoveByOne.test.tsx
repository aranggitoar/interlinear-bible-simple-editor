import { fireEvent, render } from 'solid-testing-library';
import { MoveForwardByOne, MoveBackwardByOne } from 'components/SelectorBlock/MoveByOne';
import { bibleData } from 'stores/bibleDataStore';
import { moveOneVerseForward } from 'stores/bibleDataActions';
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
