import Head from 'next/head';
import { Banner, Section, Slider } from '../components';
import styles from '../styles/Home.module.css';

export default function Home({ response1, response2 }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tecnologias dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner />
        <Slider tecnos={response1} />
        <Section />
        <Slider tecnos={response2} />
      </main>
    </div>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const resp1 = await fetch(
    'https://hyper-ui-nextjs-tailwindcss-markup-practice-cqdout8za-pblgllgs.vercel.app/api/tecno?take=12&skip=0'
  );
  const response1 = await resp1.json();
  const resp2 = await fetch(
    'https://hyper-ui-nextjs-tailwindcss-markup-practice-cqdout8za-pblgllgs.vercel.app/api/tecno?take=12&skip=12'
  );
  const response2 = await resp2.json();
  console.log(response1);
  return {
    props: { response1, response2 },
  };
};
