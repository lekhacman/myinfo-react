import React from 'react';
import { App } from './App';
import { render } from '@testing-library/react';

describe('App', function() {
  it('should render', function() {
    const props = {
      goToSingPass: jest.fn(),
    };
    const { getByText } = render(<App {...props} />);

    expect(getByText(/MyInfo Demo Application/i)).toBeInTheDocument();
  });
});
