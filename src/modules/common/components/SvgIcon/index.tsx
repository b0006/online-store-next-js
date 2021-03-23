import React from 'react';

import CartIcon from '../../../../assets/icons/cart.svg';
import ArrowLeftIcon from '../../../../assets/icons/arrow-left.svg';
import CloseIcon from '../../../../assets/icons/close.svg';
import FavoriteIcon from '../../../../assets/icons/favorite.svg';
import HomeIcon from '../../../../assets/icons/home.svg';
import MenuIcon from '../../../../assets/icons/menu.svg';
import PersonIcon from '../../../../assets/icons/person.svg';
import RestingIcon from '../../../../assets/icons/resting.svg';

export const ICON_LIST = {
  cart: CartIcon,
  ['arrow-left']: ArrowLeftIcon,
  close: CloseIcon,
  favorite: FavoriteIcon,
  home: HomeIcon,
  menu: MenuIcon,
  person: PersonIcon,
  resting: RestingIcon,
};

interface IProps extends React.SVGAttributes<SVGElement> {
  kind: keyof typeof ICON_LIST;
}

const SvgIcon: React.FC<IProps> = ({ kind, ...rest }) => {
  if (!kind) {
    return null;
  }

  const Icon = ICON_LIST[kind];
  return <Icon {...rest} />;
};

export default SvgIcon;
