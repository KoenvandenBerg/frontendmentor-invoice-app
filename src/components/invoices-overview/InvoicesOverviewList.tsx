import { FilterState } from '@/hooks/useInvoicesFilter';
import { Invoice } from '@/redux/features/invoicesSlice';
import InvoicesOverviewListItem from './InvoicesOverviewListItem';
import { AnimatePresence, motion } from 'framer-motion';

type InvoicesOverviewListProps = {
  filters: FilterState;
  invoices: Invoice[];
};

function getInvoicesToRender(invoices: Invoice[], filters: FilterState) {
  return invoices.filter((invoice) => {
    if (filters.draft && invoice.status === 'draft') {
      return true;
    }
    if (filters.pending && invoice.status === 'pending') {
      return true;
    }
    if (filters.paid && invoice.status === 'paid') {
      return true;
    }
    return false;
  });
}

export default function InvoicesOverviewList({
  filters,
  invoices,
}: InvoicesOverviewListProps) {
  return (
    <motion.div layout>
      <AnimatePresence initial={false}>
        {invoices.length > 0 ? (
          getInvoicesToRender(invoices, filters).map((invoice, index) =>
            index === 0 ? (
              <InvoicesOverviewListItem invoice={invoice} key={invoice.id} />
            ) : (
              <InvoicesOverviewListItem invoice={invoice} key={invoice.id} />
            )
          )
        ) : (
          <p>No Invoices</p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
