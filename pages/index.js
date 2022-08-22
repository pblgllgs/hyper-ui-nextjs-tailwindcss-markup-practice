import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div className={styles.sudoku}>
          <div className={styles.columnaUno}>
            <div className={styles.box123}>
              <div className={styles.number}>1</div>
              <div className={styles.number}>2</div>
              <div className={styles.number}>3</div>
            </div>
            <div className={styles.box456}>
              <div className={styles.number}>4</div>
              <div className={styles.number}>5</div>
              <div className={styles.number}>6</div>
            </div>
            <div className={styles.box789}>
              <div className={styles.number}>7</div>
              <div className={styles.number}>8</div>
              <div className={styles.number}>9</div>
            </div>
            <div className={styles.box123}>
              <div className={styles.number}>1</div>
              <div className={styles.number}>2</div>
              <div className={styles.number}>3</div>
            </div>
            <div className={styles.box456}>
              <div className={styles.number}>4</div>
              <div className={styles.number}>5</div>
              <div className={styles.number}>6</div>
            </div>
            <div className={styles.box789}>
              <div className={styles.number}>7</div>
              <div className={styles.number}>8</div>
              <div className={styles.number}>9</div>
            </div>
            <div className={styles.box123}>
              <div className={styles.number}>1</div>
              <div className={styles.number}>2</div>
              <div className={styles.number}>3</div>
            </div>
            <div className={styles.box456}>
              <div className={styles.number}>4</div>
              <div className={styles.number}>5</div>
              <div className={styles.number}>6</div>
            </div>
            <div className={styles.box789}>
              <div className={styles.number}>7</div>
              <div className={styles.number}>8</div>
              <div className={styles.number}>9</div>
            </div>
          </div>
          <div className={styles.columnaDos}>
            <div className={styles.box123}>
              <div className={styles.number}>1</div>
              <div className={styles.number}>2</div>
              <div className={styles.number}>3</div>
            </div>
            <div className={styles.box456}>
              <div className={styles.number}>4</div>
              <div className={styles.number}>5</div>
              <div className={styles.number}>6</div>
            </div>
            <div className={styles.box789}>
              <div className={styles.number}>7</div>
              <div className={styles.number}>8</div>
              <div className={styles.number}>9</div>
            </div>
            <div className={styles.box123}>
              <div className={styles.number}>1</div>
              <div className={styles.number}>2</div>
              <div className={styles.number}>3</div>
            </div>
            <div className={styles.box456}>
              <div className={styles.number}>4</div>
              <div className={styles.number}>5</div>
              <div className={styles.number}>6</div>
            </div>
            <div className={styles.box789}>
              <div className={styles.number}>7</div>
              <div className={styles.number}>8</div>
              <div className={styles.number}>9</div>
            </div>
            <div className={styles.box123}>
              <div className={styles.number}>1</div>
              <div className={styles.number}>2</div>
              <div className={styles.number}>3</div>
            </div>
            <div className={styles.box456}>
              <div className={styles.number}>4</div>
              <div className={styles.number}>5</div>
              <div className={styles.number}>6</div>
            </div>
            <div className={styles.box789}>
              <div className={styles.number}>7</div>
              <div className={styles.number}>8</div>
              <div className={styles.number}>9</div>
            </div>
          </div>
          <div className={styles.columnaTres}>
            <div className={styles.box123}>
              <div className={styles.number}>1</div>
              <div className={styles.number}>2</div>
              <div className={styles.number}>3</div>
            </div>
            <div className={styles.box456}>
              <div className={styles.number}>4</div>
              <div className={styles.number}>5</div>
              <div className={styles.number}>6</div>
            </div>
            <div className={styles.box789}>
              <div className={styles.number}>7</div>
              <div className={styles.number}>8</div>
              <div className={styles.number}>9</div>
            </div>
            <div className={styles.box123}>
              <div className={styles.number}>1</div>
              <div className={styles.number}>2</div>
              <div className={styles.number}>3</div>
            </div>
            <div className={styles.box456}>
              <div className={styles.number}>4</div>
              <div className={styles.number}>5</div>
              <div className={styles.number}>6</div>
            </div>
            <div className={styles.box789}>
              <div className={styles.number}>7</div>
              <div className={styles.number}>8</div>
              <div className={styles.number}>9</div>
            </div>
            <div className={styles.box123}>
              <div className={styles.number}>1</div>
              <div className={styles.number}>2</div>
              <div className={styles.number}>3</div>
            </div>
            <div className={styles.box456}>
              <div className={styles.number}>4</div>
              <div className={styles.number}>5</div>
              <div className={styles.number}>6</div>
            </div>
            <div className={styles.box789}>
              <div className={styles.number}>7</div>
              <div className={styles.number}>8</div>
              <div className={styles.number}>9</div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}