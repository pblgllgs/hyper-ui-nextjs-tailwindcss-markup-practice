import Link from 'next/link';
import React from 'react';
import styles from './Section.module.css';

const Section = () => {
  return (
    <div className={styles.container}>
      <section className="text-white bg-gray-900">
        <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Comienza tu aprendizaje
            </h2>

            <p className="mt-4 text-gray-300">
              Es normal caer en el error de pensar que lo desconocido es algo
              dificil de implementar. Lee la documentación oficial, revisa
              páginas de internet, foros y plataformas de desarrollo, te darás
              cuenta que hay ayuda en todas las lenguas y lenguajes de
              programación. He aquí algunos lugares que frecuento diariamente.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href={'/dev.to'} passHref>
              <a className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h3 className="mt-4 text-xl font-bold text-white">
                  DEV Community
                </h3>

                <p className="mt-1 text-sm text-gray-300">
                  A constructive and inclusive social network for software
                  developers. With you every step of your journey.
                </p>
              </a>
            </Link>
            <Link href={'/stackoverflow'} passHref>
              <a className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h3 className="mt-4 text-xl font-bold text-white">
                  Stack Overflow
                </h3>

                <p className="mt-1 text-sm text-gray-300">
                  Stack Overflow es un sitio de preguntas y respuestas para
                  programadores profesionales y aficionados. Es el sitio
                  emblemático de la red Stack Exchange, ​ creado en 2008 por
                  Jeff Atwood y Joel Spolsky.​​ Contiene preguntas y respuestas
                  sobre una amplia gama de temas de programación
                </p>
              </a>
            </Link>
            <Link href={'/logrocket'} passHref>
              <a className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h3 className="mt-4 text-xl font-bold text-white">
                  LogRocket Blog
                </h3>

                <p className="mt-1 text-sm text-gray-300">
                  LogRocket helps you understand problems affecting your users,
                  so that you can get back to building great software.
                </p>
              </a>
            </Link>
            <Link href="/ganbeta" passHref>
              <a className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h3 className="mt-4 text-xl font-bold text-white">
                  Ganbeta:dev
                </h3>

                <p className="mt-1 text-sm text-gray-300">
                  Pagína con contenido de desarrollo web, cloud y temas
                  relacionados con la programación en español
                </p>
              </a>
            </Link>
            <Link href="/infoq" passHref>
              <a className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h3 className="mt-4 text-xl font-bold text-white">InfoQ</h3>

                <p className="mt-1 text-sm text-gray-300">
                  Software is changing the world, and our mission is to help dev
                  teams adopt new technologies and practices. InfoQ provides
                  software engineers with the opportunity to share experiences
                  gained using innovator and early adopter stage techniques and
                  technologies with the wider industry
                </p>
              </a>
            </Link>
            <Link href="/medium" passHref>
              <a className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h3 className="mt-4 text-xl font-bold text-white">Medium</h3>

                <p className="mt-1 text-sm text-gray-300">
                  The best ideas can change who we are. Medium is where those
                  ideas take shape, take off, and spark powerful conversations.
                  We’re an open platform where over 100 million readers come to
                  find insightful and dynamic thinking.
                </p>
              </a>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <a
              className="inline-flex items-center px-8 py-3 mt-8 text-white bg-pink-600 border border-pink-600 rounded hover:bg-transparent active:text-pink-500 focus:outline-none focus:ring"
              href="/get-started"
            >
              <span className="text-sm font-medium"> Get Started </span>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
