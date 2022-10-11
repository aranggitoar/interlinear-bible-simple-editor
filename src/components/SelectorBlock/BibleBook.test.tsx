// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { fireEvent, render } from 'solid-testing-library';
import BibleBook from 'components/SelectorBlock/BibleBook';
import setupStore from 'tests/setup';

describe('<BibleBook />', () => {
  setupStore();
  test('renders', () => {
    const { container, unmount } = render(() => <BibleBook />);
    expect(container.innerHTML).toContain('Luke');
    unmount();
  });

  test('updates', async () => {
    const { unmount, getByRole } = render(() => <BibleBook />);
    fireEvent.change(getByRole('combobox') as Element, {
      target: { value: 'Romans' },
    });
    expect((getByRole('option', { name: 'Roma' }) as HTMLOptionElement).selected).toBe(
      true
    );
    unmount();
  });
});
