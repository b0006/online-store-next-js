import React from 'react';
import { Hidden } from 'react-grid-system';

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
          <Hidden xs sm md lg>
            <div className={styles.menu}>
              <MenuDesktop />
            </div>
          </Hidden>
        </div>
      </div>
    </Container>
  );
};

export default Header;
