import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './Breadcrumbs.module.scss';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  links: Array<{
    label: string;
    href: string;
  }>;
}

const Breadcrumbs: React.FC<IProps> = ({ links, className, ...rest }) => {
  return (
    <div className={cn(className, styles.breadcrumbs)} {...rest}>
      {links.map((link, index) => (
        <Link key={link.href} href={link.href}>
          <a
            href={link.href}
            className={cn(styles.breadcrumbs__item, { [styles.breadcrumbs__item_active]: index === links.length - 1 })}
          >
            {link.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
