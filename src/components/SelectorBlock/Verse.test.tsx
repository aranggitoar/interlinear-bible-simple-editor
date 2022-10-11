// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

import { fireEvent, render } from 'solid-testing-library';
import Verse from 'components/SelectorBlock/Verse';
import setupStore from 'tests/setup';

describe('<Verse />', () => {
  setupStore();
  test('renders', () => {
    const { container, unmount } = render(() => <Verse />);
    expect(container.innerHTML).toContain('25');
    unmount();
  });

  test('updates', () => {
    const { unmount, getByRole } = render(() => <Verse />);
    fireEvent.change(getByRole('combobox') as Element, { target: { value: '9' } });
    expect((getByRole('option', { name: '10' }) as HTMLOptionElement).selected).toBe(
      true
    );
    unmount();
  });
});
