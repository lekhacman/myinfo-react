import { render } from '@testing-library/react';
import React from 'react';
import Root from './Root';
import { createBrowserHistory } from 'history';
import configStore from '../redux/create';

it('should render Homepage', function() {
  const history = createBrowserHistory();
  const { getByText } = render(
    <Root store={configStore(history)} history={history} />
  );
  const linkElement = getByText(/MyInfo Demo Application/i);
  expect(linkElement).toBeInTheDocument();
});
