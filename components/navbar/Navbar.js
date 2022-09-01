import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className="flex" aria-label="Breadcrumb">
        <ol
          role="list"
          className="flex overflow-hidden text-gray-700 border border-gray-200 rounded-lg"
        >
          <li className="flex items-center">
            <a
              className="flex items-center h-10 px-4 bg-gray-100 transition-colors hover:text-gray-900"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>

              <span className="ml-1.5 font-medium text-xs"> Home </span>
            </a>
          </li>

          <li className="relative flex items-center">
            <span className="absolute inset-y-0 w-4 h-10 bg-gray-100 -left-px clip">
              {' '}
            </span>

            <a
              className="flex items-center h-10 pl-8 pr-4 text-xs font-medium bg-white transition-colors hover:text-gray-900"
              href="/tecnologias"
            >
              Tecnologias
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Navbar;
