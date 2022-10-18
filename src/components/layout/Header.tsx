import { FC, useCallback } from 'react';
import { useLayout } from 'src/components/hooks/useLayout';
import { Logo } from 'src/components/atoms/images';
import { HamburgerButton, ToggleButton } from 'src/components/atoms/button';
import { NavSearch } from 'src/components/atoms/input';
import { useBreakPoint } from 'src/components/hooks/useBreakPoint';

import styles from 'src/styles/layout/header.module.scss';

const Header: FC = () => {
  const { toggleButtonClicked, setToggleButtonClicked, miniSideActive, setMiniSideActive, hoverEvent, unHoverEvent } =
    useLayout();

  const { tablet } = useBreakPoint();

  const handleClick = useCallback(() => {
    setToggleButtonClicked((prev) => !prev);
  }, [setToggleButtonClicked]);

  const logoSizeChecked = !toggleButtonClicked && !miniSideActive && !tablet ? 's' : 'l';

  const className = (() => {
    if (!miniSideActive && !toggleButtonClicked && tablet) return styles.header__logo;
    if (!miniSideActive && !toggleButtonClicked) return styles.header__logo_small;
    return styles.header__logo;
  })();

  return (
    <header className={styles.header}>
      <div onMouseEnter={hoverEvent} onMouseLeave={unHoverEvent} className={className}>
        <Logo size={logoSizeChecked} />
        <ToggleButton onClick={handleClick} />
      </div>
      <div className={styles.header__hamburger}>
        <HamburgerButton />
      </div>
      <ul>
        <li className={styles.header__item}>
          <NavSearch />
        </li>
      </ul>
      <a className={styles.header__ellipsis}>
        <i className="fa fa-ellipsis-v"></i>
      </a>
    </header>
  );
};

export default Header;
