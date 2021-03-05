import React from 'react';
import { Hidden, Visible } from 'react-grid-system';

import Icon from '../../../common/components/Icon';
import Container from '../Container';
import Logo from './Logo';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

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
        <div className={styles.right}>
          <Hidden xs sm md lg>
            <div className={styles.icons}>
              <Icon className={styles.icon} type="person" />
              <Icon className={styles.icon} type="favorite" />
              <Icon className={styles.icon} type="cart" />
            </div>
          </Hidden>
          <Visible xs sm md lg>
            <MenuMobile />
          </Visible>
        </div>
      </div>
    </Container>
  );
};

export default Header;
