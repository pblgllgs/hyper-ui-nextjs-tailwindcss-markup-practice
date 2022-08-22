import React from 'react';
import styles from './Markup.module.css';

const Markup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.nav}>navbar</div>
        <div className={styles.nav}>navbar</div>
        <div className={styles.nav}>navbar</div>
        <div className={styles.nav}>navbar</div>
      </div>
      <div className={styles.wrapperContainer}>
        <div className={styles.sidebar}>
          <div className={styles.hola1}>
            <div className={styles.hola}>Hola1</div>
            <div className={styles.hola}>Hola1</div>
          </div>
          <div className={styles.hola2}>
            <div className={styles.hola}>Hola2</div>
          </div>
          <div className={styles.hola3}>
            <div className={styles.hola}>Hola3</div>
            <div className={styles.hola}>Hola3</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.block1}>
            <div className={styles.wrapperBlock1}>
              <div className={styles.box}>
                <div className={styles.subBox}>Titulo</div>
                <div className={styles.subBox}>Content</div>
              </div>
              <div className={styles.box}>
                <div className={styles.subBox}>Titulo</div>
                <div className={styles.subBox}>Content</div>
              </div>
              <div className={styles.box}>
                <div className={styles.subBox}>Titulo</div>
                <div className={styles.subBox}>Content</div>
              </div>
            </div>
          </div>
          <div className={styles.block2}>
            <div>
              <div className={styles.hola}>block2</div>
            </div>
            <div>
              <div className={styles.hola}>block2</div>
            </div>
          </div>
          <div className={styles.block3}>
            <div className={styles.hola}>block3</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerWrapper}>footer</div>
      </div>
    </div>
  );
};

export default Markup;
