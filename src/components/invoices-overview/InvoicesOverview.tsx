'use client';

import useInvoicesFilter from '@/hooks/useInvoicesFilter';
import InvoicesOverviewBar from './InvoicesOverviewBar';
import InvoicesOverviewList from './InvoicesOverviewList';
import { useAppSelector } from '@/redux/hooks';

export default function InvoicesOverview() {
  const { filters, dispatch } = useInvoicesFilter();
  const invoices = useAppSelector((state) => state.invoices.value);

  return (
    <main className="w-full px-6 tablet:px-9 desktop:px-12 pt-8 tablet:pt-14 desktop:pt-20 mx-auto max-w-[50rem]">
      <InvoicesOverviewBar filters={filters} dispatch={dispatch} />
      <InvoicesOverviewList filters={filters} invoices={invoices} />
    </main>
  );
}
