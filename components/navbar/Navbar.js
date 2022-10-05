import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const handleGoToAdd = () => {
    router.push('/addTecnologia');
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <header>
          <div className="px-4 py-8 mx-auto max-w-screen-xl sm:py-12 sm:px-6 lg:px-8">
            <div className="sm:justify-between sm:items-center sm:flex">
              <div className={styles.title}>
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Bienvenido!
                  </h1>

                  <p className="mt-1.5 text-sm text-gray-500">
                    Vamos a conocer algo nuevo! 🎉
                  </p>
                </div>
              </div>
              <div className={styles.buttons}>
                <div className="flex flex-col mt-4 gap-4 sm:flex-row sm:mt-0 sm:items-center">
                  <button
                    className="inline-flex items-center justify-center px-5 py-3 text-gray-500 border border-gray-200 rounded-lg transition hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring"
                    type="button"
                  >
                    <Link href="/git" passHref>
                      <span className="text-sm font-medium">
                        {' '}
                        Ir al repositorio{' '}
                      </span>
                    </Link>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>

                  <button
                    className="block px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg transition hover:bg-indigo-700 focus:outline-none focus:ring"
                    type="button"
                    onClick={handleGoToAdd}
                  >
                    Agregar tecnología
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className={styles.nav}>
        <nav className="flex" aria-label="Breadcrumb">
          <ol
            role="list"
            className="flex overflow-hidden text-gray-700 border border-gray-200 rounded-lg"
          >
            <li className="flex items-center">
              <Link href="/">
                <a className="flex items-center h-10 px-4 bg-gray-100 transition-colors hover:text-gray-900">
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
              </Link>
            </li>

            <li className="relative flex items-center">
              <span className="absolute inset-y-0 w-4 h-10 bg-gray-100 -left-px clip">
                {' '}
              </span>
              <Link href="/tecnologias">
                <a className="flex items-center h-10 pl-8 pr-4 text-xs font-medium bg-white transition-colors hover:text-gray-900">
                  Tecnologias
                </a>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
