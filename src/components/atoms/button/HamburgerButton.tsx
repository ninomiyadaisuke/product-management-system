import { FC } from 'react';
import { useLayout } from 'src/components/hooks/useLayout';
import styles from 'src/styles/atoms/button/hamburger.module.scss';

const HamburgerButton: FC = () => {
  const { drawerToggle, setDrawerToggle } = useLayout();

  return (
    <div className={styles.hamburger}>
      <input
        type="checkbox"
        onChange={() => setDrawerToggle((prev) => !prev)}
        checked={!drawerToggle}
        placeholder="dsff"
      />
      <div></div>
    </div>
  );
};

export default HamburgerButton;
