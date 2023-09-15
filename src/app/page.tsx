'use client';

import InvoicesOverview from '@/components/invoices-overview/InvoicesOverview';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <Provider store={store}>
      <InvoicesOverview />
    </Provider>
  );
}
