import Image from 'next/image';
import Link from 'next/link';
import styles from './Slider.module.css';

const Slider = ({tecnos}) => {
  console.log(tecnos);
  return (
    <div className={styles.container}>
      {tecnos.map((img, idx) => {
        return (
          <div key={idx} className={styles.image}>
            <Link href={`/tecnologias/${img.id}`}>
              <Image src={img.image} alt={img} width={100} height={100} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
