import { useState } from 'react';
import { Card } from '../components';
import styles from '../styles/Tecnologias.module.css';

const TecnologiasPage = ({ response }) => {
  const [tecno, setTecno] = useState(response);

  // const buttons = [1, 2, 3, 4, 5, 6];

  // const handleClick = async (valor) => {
  //   let skip = 0;
  //   switch (valor) {
  //     case 1:
  //       skip = 0;
  //       break;
  //     case 2:
  //       skip = 5;
  //       break;
  //     case 3:
  //       skip = 10;
  //       break;
  //     case 4:
  //       skip = 15;
  //       break;
  //     case 5:
  //       skip = 20;
  //       break;
  //     case 6:
  //       skip = 25;
  //       break;
  //     default:
  //       skip = 0;
  //       break;
  //   }
  //   const resp = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tecnologia?&take=5&skip=${skip}`
  //   );
  //   const response = await resp.json();
  //   setTecno(response);
  // };

  return (
    <div className="">
      <div className={styles.row1}>
        {tecno &&
          tecno.map((tec, idx) => {
            return <Card key={idx} tec={tec} />;
          })}
      </div>

      {/* <div className={styles.row2}>
        {buttons.map((button, idx) => {
          return (
            <button key={idx} onClick={() => handleClick(button)}>
              <div className="flex flex-row justify-center items-center">
                <Image
                  src={`/static/looks_${button}.svg`}
                  alt="play"
                  width={'48px'}
                  height={'48px'}
                />
              </div>
            </button>
          );
        })}
      </div> */}
    </div>
  );
};

export default TecnologiasPage;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tecnologia?&take=100`
  );
  const response = await resp.json();
  return {
    props: {
      response,
    },
  };
};
