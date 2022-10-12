import { FC } from 'react';
import { useAtom } from 'jotai';
import { drawerContext } from 'src/contexts/layoutContext';

import styles from 'src/styles/atoms/button/hamburger.module.scss';

const HamburgerButton: FC = () => {
  const [drawerToggle, setDrawerToggle] = useAtom(drawerContext);

  return (
    <div className={styles.hamburger}>
      <input
        type="checkbox"
        onChange={() => setDrawerToggle(!drawerToggle)}
        checked={drawerToggle}
        placeholder="dsff"
      />
      <div></div>
    </div>
  );
};

export default HamburgerButton;
