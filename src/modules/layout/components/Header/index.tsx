import React from 'react';
import Container from '../Container';

import Logo from './Logo';
import MenuDesktop from './MenuDesktop';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <Container component="header">
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.menu}>
            <MenuDesktop />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
