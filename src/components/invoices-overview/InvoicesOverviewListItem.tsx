import { Invoice } from '@/redux/features/invoicesSlice';
import { motion } from 'framer-motion';
import Link from 'next/link';

type InvoicesOverviewListItemProps = {
  invoice: Invoice;
};

export default function InvoicesOverviewListItem({
  invoice,
}: InvoicesOverviewListItemProps) {
  function formatPaymentDueDate(date = new Date(invoice.paymentDue)) {
    const formattedDate = date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });

    return formattedDate;
  }

  return (
    <>
      {/** Breakpoint: > tablet */}
      <Link href={`#`}>
        <motion.div
          layout
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.35 }}
          className="hidden tablet:block relative w-[full] h-[4.5rem] p-6 mb-4 rounded-lg bg-white dark:bg-blue-dark shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)] transition-colors duration-500"
        >
          <div className="relative flex items-center w-full">
            <h2 className="heading-S mr-7 text-off-black dark:text-white transition-colors duration-500">
              <span className="text-purple-light">#</span>
              {invoice.id}
            </h2>
            <p className="body absolute left-[5.5rem] text-gray dark:text-grayish-white transition-colors duration-500">
              Due {formatPaymentDueDate()}
            </p>
            <p className="body absolute left-[13rem] text-gray dark:text-white transition-colors duration-500">
              {invoice.clientName}
            </p>
            <p className="absolute heading-S right-[9.75rem] text-off-black dark:text-white transition-colors duration-500">
              &#163;{' '}
              {invoice.total.toLocaleString('en-GB', {
                minimumFractionDigits: 2,
              })}
            </p>
            <span
              className={`absolute right-[1.5rem] w-[6.5rem] h-[2.5rem] rounded-md flex justify-center items-center gap-2 ${
                invoice.status === 'draft'
                  ? 'bg-[#f3f3f5] dark:bg-[#292c44]'
                  : invoice.status === 'pending'
                  ? 'bg-[#fff8f0] dark:bg-[#2b2736]'
                  : 'bg-[#f3fcf9] dark:bg-[#1f2b3f]'
              } ${
                invoice.status === 'draft'
                  ? 'text-[#373B53] dark:text-[#DFE3FA]'
                  : invoice.status === 'pending'
                  ? 'text-[#FF8F00]'
                  : 'text-[#33D69F]'
              } transition-colors duration-500`}
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="currentcolor" />
              </svg>
              <p className="heading-S text-current first-letter:uppercase ">
                {invoice.status}
              </p>
            </span>
            <svg
              className="absolute right-0"
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L1 9" stroke="#7C5DFA" stroke-width="2" />
            </svg>
          </div>
        </motion.div>
      </Link>

      {/** Breakpoint: > listBreakpoint, < tablet */}
      <Link href={`#`}>
        <motion.div
          layout
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.35 }}
          className="hidden listBreakpoint:flex tablet:hidden relative items-center w-[full] h-[6rem] p-6 mb-4 rounded-lg bg-white dark:bg-blue-dark shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)] transition-colors duration-500"
        >
          <div className="relative flex items-center w-full">
            <h2 className="heading-S mr-7 text-off-black dark:text-white transition-colors duration-500">
              <span className="text-purple-light">#</span>
              {invoice.id}
            </h2>
            <div className="flex flex-col gap-1 absolute left-[5.5rem]">
              <p className="body  text-gray dark:text-grayish-white transition-colors duration-500">
                Due {formatPaymentDueDate()}
              </p>
              <p className="body text-gray dark:text-white transition-colors duration-500">
                {invoice.clientName}
              </p>
            </div>
            <p className="absolute heading-S right-[8rem] text-off-black dark:text-white transition-colors duration-500">
              &#163;{' '}
              {invoice.total.toLocaleString('en-GB', {
                minimumFractionDigits: 2,
              })}
            </p>
            <span
              className={`absolute right-0 w-[6.5rem] h-[2.5rem] rounded-md flex justify-center items-center gap-2 ${
                invoice.status === 'draft'
                  ? 'bg-[#f3f3f5] dark:bg-[#292c44]'
                  : invoice.status === 'pending'
                  ? 'bg-[#fff8f0] dark:bg-[#2b2736]'
                  : 'bg-[#f3fcf9] dark:bg-[#1f2b3f]'
              } ${
                invoice.status === 'draft'
                  ? 'text-[#373B53] dark:text-[#DFE3FA]'
                  : invoice.status === 'pending'
                  ? 'text-[#FF8F00]'
                  : 'text-[#33D69F]'
              } transition-colors duration-500`}
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="currentcolor" />
              </svg>
              <p className="heading-S text-current first-letter:uppercase ">
                {invoice.status}
              </p>
            </span>
          </div>
        </motion.div>
      </Link>

      {/** Breakpoint: < listBreakpoint */}
      <Link href={`#`}>
        <motion.div
          layout
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.35 }}
          className=" listBreakpoint:hidden flex flex-col justify-between w-[full] h-[8.375rem] p-6 mb-4 rounded-lg bg-white dark:bg-blue-dark shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)] transition-colors duration-500"
        >
          <div className="relative flex justify-between items-center">
            <h2 className="heading-S mr-7 text-off-black dark:text-white transition-colors duration-500">
              <span className="text-purple-light">#</span>
              {invoice.id}
            </h2>
            <p className="body text-gray dark:text-white transition-colors duration-500">
              {invoice.clientName}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <p className="body text-gray dark:text-grayish-white transition-colors duration-500">
                Due {formatPaymentDueDate()}
              </p>
              <p className="heading-S text-off-black dark:text-white transition-colors duration-500">
                &#163;{' '}
                {invoice.total.toLocaleString('en-GB', {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <span
              className={` w-[6.5rem] h-[2.5rem] rounded-md flex justify-center items-center gap-2 ${
                invoice.status === 'draft'
                  ? 'bg-[#f3f3f5] dark:bg-[#292c44]'
                  : invoice.status === 'pending'
                  ? 'bg-[#fff8f0] dark:bg-[#2b2736]'
                  : 'bg-[#f3fcf9] dark:bg-[#1f2b3f]'
              } ${
                invoice.status === 'draft'
                  ? 'text-[#373B53] dark:text-[#DFE3FA]'
                  : invoice.status === 'pending'
                  ? 'text-[#FF8F00]'
                  : 'text-[#33D69F]'
              } transition-colors duration-500`}
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="currentcolor" />
              </svg>
              <p className="heading-S text-current first-letter:uppercase ">
                {invoice.status}
              </p>
            </span>
          </div>
        </motion.div>
      </Link>
    </>
  );
}
