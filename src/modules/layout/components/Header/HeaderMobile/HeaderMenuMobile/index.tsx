import React, { useState } from 'react';
import cn from 'classnames';

import SvgIcon from '../../../../../common/components/SvgIcon';
import { categoryMock } from '../../../../../../mock';

import styles from './HeaderMenuMobile.module.scss';

interface IProps {
  isShowedMenu: boolean;
  onClose: () => void;
}

// const LevelMenu: React.FC<any> = ({ data, categoryId, level }) => {
//   if (categoryId === null) {
//     return (
//       <ul>
//         {data.map((node) => (
//           <li key={node.id}>{node.title}</li>
//         ))}
//       </ul>
//     );
//   }

//   return null;

//   // return data.map((node) => {
//   //   if (node.id !== categoryId) {
//   //     return null;
//   //   }
//   //   console.log(node);
//   // });
// };

const HeaderMenuMobile: React.FC<IProps> = ({ isShowedMenu, onClose }) => {
  // const [currentCategory, setCurrentCategory] = useState<number | null>(null);
  // const [levelMenu, setLevelMenu] = useState(0);

  return (
    <div
      className={cn(styles['menu-mobile'], {
        [styles['menu-mobile_show']]: isShowedMenu,
      })}
    >
      <div className={styles['menu-mobile__header']}>
        <button type="button" onClick={onClose}>
          <SvgIcon kind="chevron" />
        </button>
      </div>
      <div>
        {/* <LevelMenu data={categoryMock} categoryId={currentCategory} level={levelMenu} /> */}
      </div>
    </div>
  );
};

export default HeaderMenuMobile;
