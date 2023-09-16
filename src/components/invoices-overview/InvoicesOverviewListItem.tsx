import { Invoice } from '@/redux/features/invoicesSlice';
import { motion } from 'framer-motion';

type InvoicesOverviewListItemProps = {
  invoice: Invoice;
};

export default function InvoicesOverviewListItem({
  invoice,
}: InvoicesOverviewListItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.35 }}
      className="w-[full] p-6 mb-4 rounded-lg bg-white dark:bg-blue-dark shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)] transition-colors duration-500"
    >
      <div className="flex justify-between align-baseline w-full">
        <h2 className="heading-S text-off-black dark:text-white transition-colors duration-500">
          <span className="text-purple-light">#</span>
          {invoice.id}
        </h2>
        <p className="body text-gray dark:text-white transition-colors duration-500">
          {invoice.clientName}
        </p>
      </div>
    </motion.div>
  );
}
