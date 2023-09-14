import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type Invoice = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
};

export type InvoicesState = {
  value: Invoice[];
};

const initialState: InvoicesState = {
  value: [],
};

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    addInvoice: (state, action: PayloadAction<Invoice>) => {
      const index = state.value.findIndex((invoice) => {
        return invoice.id === action.payload.id;
      });

      if (index === -1) {
        state.value.push(action.payload);
      }
    },
    removeInvoice: (state, action: PayloadAction<Invoice['id']>) => {
      state.value = state.value.filter(
        (invoice) => invoice.id !== action.payload
      );
    },
    editInvoice: (state, action: PayloadAction<Invoice>) => {
      const index = state.value.findIndex((invoice) => {
        return invoice.id === action.payload.id;
      });

      if (index !== -1) {
        state.value.splice(index, 1, action.payload);
      }
    },
  },
});

export const { addInvoice, removeInvoice, editInvoice } = invoicesSlice.actions;

export const selectInvoices = (state: RootState) => state.invoices.value;

export default invoicesSlice.reducer;
