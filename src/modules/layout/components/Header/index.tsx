import React from 'react';

import Container from '../Container';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header: React.FC = () => {
  return (
    <Container as="header">
      <HeaderDesktop />
      <HeaderMobile />
    </Container>
  );
};

export default Header;
