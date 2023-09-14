'use client';

import { useReducer } from 'react';

const initialState = {
  draft: true,
  pending: true,
  paid: true,
};

export type FilterState = typeof initialState;

export type FiltersActionType =
  | 'showDraft'
  | 'hideDraft'
  | 'showPending'
  | 'hidePending'
  | 'showPaid'
  | 'hidePaid';

type FiltersAction = {
  type: FiltersActionType;
};

export const filtersReducer = (state: FilterState, action: FiltersAction) => {
  switch (action.type) {
    case 'showDraft':
      return {
        ...state,
        draft: true,
      };
    case 'hideDraft':
      return {
        ...state,
        draft: false,
      };
    case 'showPending':
      return {
        ...state,
        pending: true,
      };
    case 'hidePending':
      return {
        ...state,
        pending: false,
      };
    case 'showPaid':
      return {
        ...state,
        paid: true,
      };
    case 'hidePaid':
      return {
        ...state,
        paid: false,
      };
    default:
      return state;
  }
};

export default function useInvoicesFilter() {
  const [filters, dispatch] = useReducer(filtersReducer, initialState);

  return {
    filters,
    dispatch,
  };
}
