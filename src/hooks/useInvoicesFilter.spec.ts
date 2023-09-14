import { filtersReducer } from './useInvoicesFilter';
import { expect, test } from 'vitest';

const initialStateTrue = {
  draft: true,
  pending: true,
  paid: true,
};

const initialStateFalse = {
  draft: false,
  pending: false,
  paid: false,
};

test('Draft should be true.', () => {
  const initialState = initialStateFalse;

  expect(filtersReducer(initialState, { type: 'showDraft' })).toEqual({
    draft: true,
    pending: false,
    paid: false,
  });
});

test('Draft should be false.', () => {
  const initialState = initialStateTrue;

  expect(filtersReducer(initialState, { type: 'hideDraft' })).toEqual({
    draft: false,
    pending: true,
    paid: true,
  });
});

test('Draft should not be false if that means that no filter will be selected.', () => {
  const initialState = {
    draft: true,
    pending: false,
    paid: false,
  };

  expect(filtersReducer(initialState, { type: 'hideDraft' })).toEqual({
    draft: true,
    pending: false,
    paid: false,
  });
});

test('Pending should be true.', () => {
  const initialState = initialStateFalse;

  expect(filtersReducer(initialState, { type: 'showPending' })).toEqual({
    draft: false,
    pending: true,
    paid: false,
  });
});

test('Pending should be false.', () => {
  const initialState = initialStateTrue;

  expect(filtersReducer(initialState, { type: 'hidePending' })).toEqual({
    draft: true,
    pending: false,
    paid: true,
  });
});

test('Pending should not be false if that means that no filter will be selected.', () => {
  const initialState = {
    draft: false,
    pending: true,
    paid: false,
  };

  expect(filtersReducer(initialState, { type: 'hidePending' })).toEqual({
    draft: false,
    pending: true,
    paid: false,
  });
});

test('Paid should be true.', () => {
  const initialState = initialStateFalse;

  expect(filtersReducer(initialState, { type: 'showPaid' })).toEqual({
    draft: false,
    pending: false,
    paid: true,
  });
});

test('Paid should be false.', () => {
  const initialState = initialStateTrue;

  expect(filtersReducer(initialState, { type: 'hidePaid' })).toEqual({
    draft: true,
    pending: true,
    paid: false,
  });
});

test('Pending should not be false if that means that no filter will be selected.', () => {
  const initialState = {
    draft: false,
    pending: false,
    paid: true,
  };

  expect(filtersReducer(initialState, { type: 'hidePaid' })).toEqual({
    draft: false,
    pending: false,
    paid: true,
  });
});
