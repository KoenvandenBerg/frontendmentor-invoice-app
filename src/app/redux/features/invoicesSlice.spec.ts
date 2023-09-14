import reducer, {
  addInvoice,
  removeInvoice,
  editInvoice,
  InvoicesState,
} from './invoicesSlice';
import { test, expect } from 'vitest';

test('Initial state should be an empty array.', () => {
  expect(reducer(undefined, { type: undefined }).value).toEqual([]);
});

test('Invoice with a unique id should be added.', () => {
  const previousState: InvoicesState = {
    value: [],
  };

  expect(reducer(previousState, addInvoice(testInvoice1)).value).toEqual([
    testInvoice1,
  ]);
});

test('Invoice without a unique id should not be added.', () => {
  const previousState: InvoicesState = {
    value: [testInvoice1],
  };

  expect(reducer(previousState, addInvoice(testInvoice1)).value).toEqual([
    testInvoice1,
  ]);
});

test('Invoice should be deleted when given a valid id.', () => {
  const previousState = {
    value: [testInvoice1],
  };

  expect(reducer(previousState, removeInvoice(testInvoice1.id)).value).toEqual(
    []
  );
});

test('No invoice should be deleted when given an invalid id.', () => {
  const previousState = {
    value: [testInvoice1],
  };

  expect(reducer(previousState, removeInvoice('2')).value).toEqual([
    testInvoice1,
  ]);
});

test('Invoice should be edited when given a valid id.', () => {
  const previousState = {
    value: [testInvoice1],
  };

  expect(reducer(previousState, editInvoice(testInvoice1Edited)).value).toEqual(
    [testInvoice1Edited]
  );
});

const testInvoice1 = {
  id: '1',
  createdAt: 'test',
  paymentDue: 'test',
  description: 'test',
  paymentTerms: 1,
  clientName: 'test',
  clientEmail: 'test',
  status: 'test',
  senderAddress: {
    street: 'test',
    city: 'test',
    postCode: 'test',
    country: 'test',
  },
  clientAddress: {
    street: 'test',
    city: 'test',
    postCode: 'test',
    country: 'test',
  },
  items: [
    {
      name: 'test',
      quantity: 1,
      price: 10,
      total: 10,
    },
  ],
  total: 10,
};

const testInvoice1Edited = {
  id: '1',
  createdAt: 'edited',
  paymentDue: 'test',
  description: 'test',
  paymentTerms: 1,
  clientName: 'test',
  clientEmail: 'test',
  status: 'test',
  senderAddress: {
    street: 'test',
    city: 'test',
    postCode: 'test',
    country: 'test',
  },
  clientAddress: {
    street: 'test',
    city: 'test',
    postCode: 'test',
    country: 'test',
  },
  items: [
    {
      name: 'test',
      quantity: 1,
      price: 10,
      total: 10,
    },
  ],
  total: 10,
};
