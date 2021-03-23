import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

import SvgIcon, { TIconList } from '../../../../../common/components/SvgIcon';

import styles from './MenuItem.module.scss';

interface IProps {
  icon: TIconList;
  title: string;
  href?: string;
}

const MenuItem: React.FC<IProps> = ({ icon, title, href }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={cn(styles['menu-item__button'], styles['menu-item__button_active'])} href={href}>
          <SvgIcon className={styles['menu-item__icon']} kind={icon} />
          <span>{title}</span>
        </a>
      </Link>
    );
  }

  return (
    <button className={cn(styles['menu-item__button'], styles['menu-item__button_active'])} type="button">
      <SvgIcon className={styles['menu-item__icon']} kind={icon} />
      <span>{title}</span>
    </button>
  );
};

export default MenuItem;
