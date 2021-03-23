import React from 'react';
import { Hidden, Visible } from 'react-grid-system';

import Container from '../Container';
import CartMobile from './CartMobile';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header: React.FC = () => {
  return (
    <Container component="header">
      <Hidden xs sm md lg>
        <HeaderDesktop />
      </Hidden>
      <Visible xs sm md lg>
        <HeaderMobile />
        <CartMobile />
      </Visible>
    </Container>
  );
};

export default Header;
