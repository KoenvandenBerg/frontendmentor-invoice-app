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
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.35 }}
      className="w-full p-6 bg-white mb-4"
    >
      InvoicesOverviewListItem
    </motion.div>
  );
}
