import React from 'react';
import Link from 'next/link';

import logoImg from '@/assets/images/logo.png';

import styles from './Logo.module.scss';

const Logo: React.FC = () => (
  <Link href="/" as="/">
    <a href="/">
      <img src={logoImg} className={styles.img} alt="logo" />
    </a>
  </Link>
);

export default Logo;
