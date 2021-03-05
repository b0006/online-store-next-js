import React from 'react';
import Link from 'next/link';

import logoImg from '@/assets/images/logo.png';

const Logo: React.FC = () => (
  <Link href="/">
    <a href="/">
      <img src={logoImg} alt="logo" />
    </a>
  </Link>
);

export default Logo;
