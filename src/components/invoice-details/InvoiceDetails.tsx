import { Invoice } from '@/redux/features/invoicesSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { FocusTrap } from '@mui/base/FocusTrap';

type InvoiceDetailsProps = {
  openInvoice: Invoice;
  setOpenInvoice: () => void;
};

export default function InvoiceDetails({
  openInvoice,
  setOpenInvoice,
}: InvoiceDetailsProps) {
  return (
    <AnimatePresence>
      <FocusTrap open={!!openInvoice}>
        <motion.div
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, type: 'tween' }}
          key={`modal-${openInvoice.id}`}
          className="absolute left-0 top-0 w-full h-full flex bg-off-white dark:bg-blue-very-dark z-10 transition-colors duration-500"
        >
          <button onClick={() => setOpenInvoice()}>Go back</button>
        </motion.div>
      </FocusTrap>
    </AnimatePresence>
  );
}
