import { FC, useCallback, useState } from 'react';
import { Logo } from 'src/components/atoms/images';
import { HamburgerButton, ToggleButton } from 'src/components/atoms/button';
import { useBooleanChangeEvent } from 'src/components/hooks/customHooks';
import { NavSearch } from 'src/components/atoms/input';
import { useBreakPoint } from 'src/components/hooks/useBreakPoint';
import Image from 'next/future/image';
import Link from 'next/link';
import styles from 'src/styles/layout/header.module.scss';

const Header: FC = () => {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState(true);
  const { tablet } = useBreakPoint();

  const handleClick = useCallback(() => {
    setToggle((prev) => !prev);
  }, [setToggle]);

  return (
    <header className={styles.header}>
      <div
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className={!active && !toggle ? styles.header__logo_small : styles.header__logo}
      >
        <Logo size={!toggle && !active ? 's' : 'l'} />
        <ToggleButton onClick={handleClick} toggle={toggle} active={active} />
      </div>

      <div className={styles.header__hamburger}>
        <HamburgerButton />
      </div>

      {/* <ToggleButton /> */}
      {/* <!-- Header Menu --> */}
      <ul>
        {/* <!-- Search --> */}
        <li className={styles.header__item}>
          <NavSearch />
        </li>
        {/* <!-- /Search --> */}
      </ul>
      {/* <!-- /Header Menu --> */}

      {/* <!-- Mobile Menu --> */}
      <a className={styles.header__ellipsis}>
        <i className="fa fa-ellipsis-v"></i>
      </a>
      {/* <!-- /Mobile Menu --> */}
    </header>
  );
  {
    /* <!-- Header --> */
  }
};

export default Header;
