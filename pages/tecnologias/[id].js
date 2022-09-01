import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const TecnologiasPage = ({ tecnologia }) => {
  const [tecno, setTecno] = useState(tecnologia);
  useEffect(() => {
    setTecno(tecnologia);
  }, [tecnologia]);
  return (
    <section>
      {tecno && (
        <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <Image
                  className="absolute inset-0 object-cover w-full h-full"
                  src={tecno.image}
                  alt={tecno.name}
                  width={400}
                  height={400}
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  {tecno.name}
                </h2>
                <h2 className="text-xl font-bold sm:text-2xl">
                  {tecno.owner}
                </h2>

                <p className="mt-4 text-gray-600">{tecno.description}</p>
                <Link href={'/'} passHref>
                  <a
                    className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                    href=""
                  >
                    Doc Oficial
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TecnologiasPage;

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tecnologia?take=4`
  );
  const response = await resp.json();
  const paths = response.map((tec) => {
    return {
      params: {
        id: tec.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: 'blocking',
  };
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tecnologia/${id}`
  ); // your fetch function here
  const tecnologia = await resp.json();
  return {
    props: {
      tecnologia,
    },
  };
};
