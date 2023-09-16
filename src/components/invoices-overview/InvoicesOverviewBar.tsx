'use client';

import React, { Dispatch, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { FilterState, FiltersAction } from '@/hooks/useInvoicesFilter';
import { motion } from 'framer-motion';

type InvoicesOverviewBarProps = {
  filters: FilterState;
  dispatch: Dispatch<FiltersAction>;
};

export default function InvoicesOverviewBar({
  filters,
  dispatch,
}: InvoicesOverviewBarProps) {
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const filterMenuButtonRef = useRef<HTMLButtonElement>(null);
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const draftFilterCheckboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (
        filterMenuRef.current !== null &&
        filterMenuButtonRef.current !== null &&
        filterMenuOpen &&
        !filterMenuRef.current.contains(e.target as Node)
      ) {
        if (filterMenuButtonRef.current.contains(e.target as Node)) {
          e.stopPropagation();
        }
        setFilterMenuOpen(false);
      }
    });

    document.body.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && filterMenuOpen) {
        e.preventDefault();
        setFilterMenuOpen(false);
      }
    });

    return () => {
      document.body.removeEventListener('click', (e) => {
        if (
          filterMenuRef.current !== null &&
          filterMenuButtonRef.current !== null &&
          filterMenuOpen &&
          !filterMenuRef.current.contains(e.target as Node)
        ) {
          if (filterMenuButtonRef.current.contains(e.target as Node)) {
            e.stopPropagation();
          }
          setFilterMenuOpen(false);
        }
      });

      document.body.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && filterMenuOpen) {
          e.preventDefault();
          setFilterMenuOpen(false);
        }
      });

      document.body.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape' && filterMenuOpen) {
          e.preventDefault();
          setFilterMenuOpen(false);
        }
      });
    };
  }, [filterMenuOpen]);

  const invoices = useAppSelector((state) => state.invoices.value);

  return (
    <div className="w-full flex justify-between pb-8 tablet:pb-12 desktop:pb-16">
      <div>
        <h1 className="mb-1 heading-L text-off-black dark:text-white transition-colors duration-500">
          Invoices
        </h1>
        <p className="body text-gray">
          {invoices.length === 0
            ? 'There are no invoices'
            : invoices.length === 1
            ? 'There is 1 invoice in total'
            : `There are ${invoices.length} invoices in total`}
        </p>
      </div>
      <div className="relative h-fit flex gap-10">
        <button
          ref={filterMenuButtonRef}
          className="flex items-center gap-2 heading-S-Variant font-semibold"
          onClick={() => setFilterMenuOpen(!filterMenuOpen)}
        >
          <span className="text-off-black dark:text-white transition-colors duration-500 tablet:hidden">
            Filter
          </span>
          <span className="text-off-black dark:text-white transition-colors duration-500 hidden tablet:inline">
            Filter by status
          </span>
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              filterMenuOpen && 'rotate-180'
            } transition-transform duration-500`}
          >
            <path
              d="M1 1L5.2279 5.2279L9.4558 1"
              stroke="#7C5DFA"
              strokeWidth="2"
            />
          </svg>
        </button>
        {filterMenuOpen ? (
          <motion.div
            initial={{ scale: 0, y: -75 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0, type: 'tween' }}
            ref={filterMenuRef}
            className="absolute top-12 left-[-2.3rem] tablet:left-[-0.4rem] px-6 flex flex-col gap-2 justify-center shadow-[0px_10px_20px_0px_rgba(72,84,159,0.25)] dark:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)] h-[8rem] rounded-lg bg-white dark:bg-blue-medium transition-all duration-500"
          >
            <label
              className={`relative group w-fit flex items-center ${
                filters.draft && !filters.pending && !filters.paid
                  ? `cursor-not-allowed`
                  : 'cursor-pointer'
              }`}
            >
              <input
                ref={draftFilterCheckboxRef}
                type="checkbox"
                defaultChecked={filters.draft}
                className="appearance-none bg-purple-very-light group-hover:bg-purplish-white group-hover:checked:bg-purple-dark rounded-[0.25rem] w-4 h-4 mr-2 transition-colors duration-500 cursor-pointer checked:bg-purple-dark disabled:bg-gray group-hover:disabled:bg-gray disabled:cursor-not-allowed"
                onClick={() =>
                  dispatch(
                    filters.draft
                      ? { type: 'hideDraft' }
                      : { type: 'showDraft' }
                  )
                }
                disabled={!filters.pending && !filters.paid}
              ></input>
              {filters.draft ? (
                <motion.svg
                  initial={{ scale: 0, y: -5 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.25, type: 'tween' }}
                  className="absolute left-[3px]"
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 4.49976L3.62425 6.62402L8.96995 1.27832"
                    stroke="white"
                    strokeWidth="2"
                  />
                </motion.svg>
              ) : null}
              <span className="heading-S text-off-black dark:text-white transition-colors duration-500">
                Draft
              </span>
            </label>
            <label
              className={`relative group w-fit flex items-center ${
                !filters.draft && filters.pending && !filters.paid
                  ? `cursor-not-allowed`
                  : 'cursor-pointer'
              }`}
            >
              <input
                type="checkbox"
                defaultChecked={filters.pending}
                className="appearance-none bg-purple-very-light group-hover:bg-purplish-white group-hover:checked:bg-purple-dark rounded-[0.25rem] w-4 h-4 mr-2 transition-colors duration-500 cursor-pointer checked:bg-purple-dark disabled:bg-gray group-hover:disabled:bg-gray disabled:cursor-not-allowed"
                onClick={() =>
                  dispatch(
                    filters.pending
                      ? { type: 'hidePending' }
                      : { type: 'showPending' }
                  )
                }
                disabled={!filters.draft && !filters.paid}
              ></input>
              {filters.pending ? (
                <motion.svg
                  initial={{ scale: 0, y: -5 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.25, type: 'tween' }}
                  className="absolute left-[3px]"
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 4.49976L3.62425 6.62402L8.96995 1.27832"
                    stroke="white"
                    strokeWidth="2"
                  />
                </motion.svg>
              ) : null}
              <span className="heading-S text-off-black dark:text-white transition-colors duration-500">
                Pending
              </span>
            </label>
            <label
              className={`relative group w-fit flex items-center ${
                !filters.draft && !filters.pending && filters.paid
                  ? `cursor-not-allowed`
                  : 'cursor-pointer'
              }`}
            >
              <input
                type="checkbox"
                defaultChecked={filters.paid}
                className="appearance-none bg-purple-very-light group-hover:bg-purplish-white group-hover:checked:bg-purple-dark rounded-[0.25rem] w-4 h-4 mr-2 transition-colors duration-500 cursor-pointer checked:bg-purple-dark disabled:bg-gray group-hover:disabled:bg-gray disabled:cursor-not-allowed"
                onClick={() =>
                  dispatch(
                    filters.paid ? { type: 'hidePaid' } : { type: 'showPaid' }
                  )
                }
                disabled={!filters.draft && !filters.pending}
              ></input>
              {filters.paid ? (
                <motion.svg
                  initial={{ scale: 0, y: -5 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.25, type: 'tween' }}
                  className="absolute left-[3px]"
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 4.49976L3.62425 6.62402L8.96995 1.27832"
                    stroke="white"
                    strokeWidth="2"
                  />
                </motion.svg>
              ) : null}
              <span className="heading-S text-off-black dark:text-white transition-colors duration-500">
                Paid
              </span>
            </label>
          </motion.div>
        ) : null}
        <button className="h-[2.75rem] tablet:h-12 pl-2 pr-4 flex items-center gap-4 rounded-3xl bg-purple-dark hover:bg-purple-medium transition-colors duration-500">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="white" />
            <path
              d="M17.3131 21.0229V17.3131H21.0229V14.7328H17.3131V11.0229H14.7328V14.7328H11.0229V17.3131H14.7328V21.0229H17.3131Z"
              fill="#7C5DFA"
            />
          </svg>
          <span className="heading-S-Variant text-white tablet:hidden">
            New
          </span>
          <span className="heading-S-Variant text-white hidden tablet:inline">
            New Invoice
          </span>
        </button>
      </div>
    </div>
  );
}
