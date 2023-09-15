'use client';

import useInvoicesFilter from '@/hooks/useInvoicesFilter';
import InvoicesOverviewBar from './InvoicesOverviewBar';
import InvoicesOverviewList from './InvoicesOverviewList';

export default function InvoicesOverview() {
  const { filters, dispatch } = useInvoicesFilter();

  return (
    <main className="w-full px-6 tablet:px-9 desktop:px-12 pt-8 tablet:pt-14 desktop:pt-20 mx-auto max-w-[50rem]">
      <InvoicesOverviewBar filters={filters} dispatch={dispatch} />
      <InvoicesOverviewList />
    </main>
  );
}
