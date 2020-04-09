

import { createSelector } from 'reselect';

export const counterSelector = state => state.counterReducer.counter;

export const getResult = createSelector(
  counterSelector,
  (counter) => {
    counter = counter * 2 + 3;
    return counter;
  }
);
