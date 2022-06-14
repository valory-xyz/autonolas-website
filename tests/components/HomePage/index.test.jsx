/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import { render } from '@testing-library/react';
import HomePage from 'components/HomePage';

describe.skip('<HomePage />', () => {
  it('works', () => {
    expect.hasAssertions();
    const { getByTestId } = render(<HomePage />);
    const element = getByTestId('home-page');
    expect(element).toBeInTheDocument();
  });
});
