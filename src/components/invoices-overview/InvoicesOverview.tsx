'use client';

import useInvoicesFilter from '@/hooks/useInvoicesFilter';
import InvoicesOverviewBar from './InvoicesOverviewBar';
import InvoicesOverviewList from './InvoicesOverviewList';
import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import { Invoice } from '@/redux/features/invoicesSlice';
import InvoiceDetails from '../invoice-details/InvoiceDetails';

export default function InvoicesOverview() {
  const { filters, dispatch } = useInvoicesFilter();
  const invoices = useAppSelector((state) => state.invoices.value);
  const [openInvoice, setOpenInvoice] = useState<Invoice | null>(null);

  return (
    <>
      <main className="relative w-full px-6 tablet:px-9 desktop:px-12 pt-8 tablet:pt-14 desktop:pt-20 mx-auto max-w-[50rem]">
        <InvoicesOverviewBar filters={filters} dispatch={dispatch} />
        <InvoicesOverviewList
          filters={filters}
          invoices={invoices}
          setOpenInvoice={setOpenInvoice}
        />
        {openInvoice ? (
          <InvoiceDetails
            openInvoice={openInvoice}
            setOpenInvoice={() => setOpenInvoice(null)}
          />
        ) : null}
      </main>
    </>
  );
}
