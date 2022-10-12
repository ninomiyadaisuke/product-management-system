import { FC, useCallback, useState } from 'react';
import { useAtom } from 'jotai';
import { hoverActionContext, toggleButtonContext } from 'src/contexts/layoutContext';
import { Logo } from 'src/components/atoms/images';
import { HamburgerButton, ToggleButton } from 'src/components/atoms/button';
import { NavSearch } from 'src/components/atoms/input';
import { useBreakPoint } from 'src/components/hooks/useBreakPoint';

import styles from 'src/styles/layout/header.module.scss';

const Header: FC = () => {
  const [toggle, setToggle] = useAtom(toggleButtonContext);
  const [active, setActive] = useAtom(hoverActionContext);
  const { tablet } = useBreakPoint();

  const handleClick = useCallback(() => {
    setToggle((prev) => !prev);
  }, [setToggle]);

  const logoSizeChecked = !toggle && !active && !tablet ? 's' : 'l';

  const className = (() => {
    if (!active && !toggle && tablet) return styles.header__logo;
    if (!active && !toggle) return styles.header__logo_small;
    return styles.header__logo;
  })();

  return (
    <header className={styles.header}>
      <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className={className}>
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
