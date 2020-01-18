import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />)
});

test("both scoreboards are rendered", () => {
  const {getByText} = render(<App />)
  getByText(/LIONS/i)
  getByText(/tigers/i)
  //^ getByText will only pass if their is only 1 match
  //^ Failing due to multiple text matches
})
test("both scoreboards are rendered", () => {
  const {getAllByText} = render(<App />)
  getAllByText(/LIONS/i)
  getAllByText(/tigers/i)
  //^ getAllByText will pass with multiple matches
  //How would we know that it is bringing back the scoreboards?
})
test("both scoreboards are rendered", () => {
  const {getByTestId} = render(<App />)
  getByTestId(/lions-scoreboard/i)
  getByTestId(/tigers-scoreboard/i)
  //^ Add data-testid="lions-scoreboard" on the h2 element
  //^ Add data-testid="tigers-scoreboard" on the h2 element
})
