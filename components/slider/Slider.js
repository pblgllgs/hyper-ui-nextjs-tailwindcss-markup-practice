import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Slider.module.css';

const Slider = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      const resp = await fetch(
        'http://localhost:3001/api/v1/tecnologia?take=12'
      );
      const response = await resp.json();
      const imgs = response.map((img) => {
        return {
          id: img.id,
          img: img.image,
        };
      });
      setImages(imgs);
    };
    getImages();
  });
  return (
    <div className={styles.container}>
      {images.map((img, idx) => {
        return (
          <div key={idx} className={styles.image}>
            <Link href={`/tecnologias/${img.id}`}>
              <Image src={img.img} alt={img} width={100} height={100} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
