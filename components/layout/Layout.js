import React from 'react';
import styles from './Layout.module.css';
import { Footer, Navbar } from '../../components';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
