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
      if (state.pending === true || state.paid === true)
        return {
          ...state,
          draft: false,
        };
      return state;
    case 'showPending':
      return {
        ...state,
        pending: true,
      };
    case 'hidePending':
      if (state.draft === true || state.paid === true)
        return {
          ...state,
          pending: false,
        };
      return state;
    case 'showPaid':
      return {
        ...state,
        paid: true,
      };
    case 'hidePaid':
      if (state.draft === true || state.pending === true)
        return {
          ...state,
          paid: false,
        };
      return state;
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
