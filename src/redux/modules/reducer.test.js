import createRootReducer from './reducer'
import { createBrowserHistory } from 'history'

it('should createRootReducer', function() {
  expect(createRootReducer(createBrowserHistory())).toBeDefined()
})
