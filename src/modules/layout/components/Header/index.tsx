import React from 'react';
import { Hidden, Visible } from 'react-grid-system';

import Container from '../Container';
import CartMobile from './CartMobile';
import HeaderDesktop from './HeaderDesktop';

const Header: React.FC = () => {
  return (
    <Container component="header">
      <Hidden xs sm md lg>
        <HeaderDesktop />
      </Hidden>
      <Visible xs sm md lg>
        <CartMobile />
      </Visible>
    </Container>
  );
};

export default Header;
