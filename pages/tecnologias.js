import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Card } from '../components';
import styles from '../styles/Tecnologias.module.css';

const TecnologiasPage = ({ response }) => {
  const [tecno, setTecno] = useState(response);

  const handleClickOne = async () => {
    const resp = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/v1/tecnologia?&take=${4}&skip=${0}`
    );
    const response = await resp.json();
    setTecno(response);
  };

  const handleClickTwo = async () => {
    const resp = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/v1/tecnologia?&take=${4}&skip=${4}`
    );
    const response = await resp.json();
    setTecno(response);
  };

  const handleClickThre = async () => {
    const resp = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/v1/tecnologia?&take=${4}&skip=${8}`
    );
    const response = await resp.json();
    setTecno(response);
  };

  return (
    <div className=" flex flex-col ">
      <div className={styles.row1}>
        {tecno &&
          tecno.map((tec, idx) => {
            return <Card key={idx} tec={tec} />;
          })}
      </div>

      <div className={styles.row2}>
        <button onClick={handleClickOne}>
          <div className="flex flex-row justify-center items-center">
            <Image
              src="/static/look_1.svg"
              alt="play"
              width={'48px'}
              height={'48px'}
            />
          </div>
        </button>
        <button onClick={handleClickTwo}>
          <div className="flex flex-row justify-center items-center">
            <Image
              src="/static/looks_2.svg"
              alt="play"
              width={'48px'}
              height={'48px'}
            />
          </div>
        </button>
        <button onClick={handleClickThre}>
          <div className="flex flex-row justify-center items-center">
            <Image
              src="/static/looks_3.svg"
              alt="play"
              width={'48px'}
              height={'48px'}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default TecnologiasPage;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tecnologia`
  );
  const response = await resp.json();
  return {
    props: {
      response,
    },
  };
};
