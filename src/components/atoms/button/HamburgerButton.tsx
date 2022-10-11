import { FC } from 'react';

import styles from 'src/styles/atoms/button/hamburger.module.scss';

const HamburgerButton: FC = () => {
  return (
    <div className={styles.hamburger}>
      <input type="checkbox" placeholder="dsff" />
      <div></div>
    </div>
  );
};

export default HamburgerButton;
