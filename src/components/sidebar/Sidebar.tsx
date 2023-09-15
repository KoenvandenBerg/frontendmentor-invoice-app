'use client';

import useTheme from '@/hooks/useTheme';
import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { HiUser } from 'react-icons/hi2';

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex-shrink-0 bg-[#373B53] dark:bg-blue-dark w-full h-[4.5rem] tablet:h-[5rem] desktop:w-[6.4375rem] desktop:h-full desktop:rounded-r-[1.25rem] flex justify-between desktop:flex-col transition-colors duration-500">
      <div
        className=" flex items-center justify-center w-auto h-full desktop:w-full desktop:h-auto"
        aria-hidden
      >
        <svg
          width="103"
          height="103"
          viewBox="0 0 103 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-full desktop:w-full desktop:h-auto"
        >
          <path
            d="M0 0H83C94.0457 0 103 8.9543 103 20V83C103 94.0457 94.0457 103 83 103H0V0Z"
            fill="#7C5DFA"
          />
          <mask
            id="mask0_0_8894"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="103"
            height="103"
          >
            <path
              d="M0 0H83C94.0457 0 103 8.9543 103 20V83C103 94.0457 94.0457 103 83 103H0V0Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_0_8894)">
            <path
              d="M103 52H20C8.95431 52 0 60.9543 0 72V135C0 146.046 8.95431 155 20 155H103V52Z"
              fill="#9277FF"
            />
          </g>
        </svg>
        <svg
          width="40"
          height="38"
          viewBox="0 0 40 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute scale-75 tablet:scale-90 desktop:scale-100"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6942 0.292175L20 18.9999L29.3058 0.292175C35.6645 3.64073 40 10.314 40 17.9999C40 29.0456 31.0457 37.9999 20 37.9999C8.9543 37.9999 0 29.0456 0 17.9999C0 10.314 4.33546 3.64073 10.6942 0.292175Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex desktop:flex-col justify-center items-center">
        <button
          onClick={() => toggleTheme()}
          className="flex-shrink-0 mr-8 desktop:mr-0 desktop:mb-8"
          aria-label={
            theme === 'light' ? 'Switch to dark mode.' : 'Switch to light mode.'
          }
        >
          <DarkModeSwitch
            onChange={() => {}}
            checked={theme === 'light'}
            size="20"
            sunColor="currentColor"
            moonColor="currentColor"
            className="desktop:w-[26px] desktop:h-auto  text-purple-light dark:text-[#858BB2] hover:text-off-white hover:dark:text-off-white transition-colors duration-500"
            aria-hidden
          />
        </button>
        <div className="flex-shrink-0 w-[1px] h-full desktop:w-full desktop:h-[1px] mr-6 tablet:mr-8 desktop:mr-0 desktop:mb-6 bg-purple-light dark:bg-[#858BB2] opacity-20"></div>
        <button
          className="flex-shrink-0 flex items-center justify-center rounded-full w-8 h-8 desktop:w-10 desktop:h-10 tablet: mr-6 tablet:mr-8 desktop:mr-0 desktop:mb-6 bg-purple-light dark:bg-[#858BB2] hover:bg-off-white hover:dark:bg-off-white transition-all duration-500"
          aria-label="Open user menu."
        >
          <HiUser
            size="24"
            aria-hidden
            className="scale-75 tablet:scale-[85%] desktop:scale-100 fill-[#373B53] dark:fill-blue-dark transition-colors duration-500"
          />
        </button>
      </div>
    </div>
  );
}
