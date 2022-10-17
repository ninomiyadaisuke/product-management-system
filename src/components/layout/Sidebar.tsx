import { FC, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { useAtom } from 'jotai';
import { drawerContext, toggleButtonContext, hoverActionContext } from 'src/contexts/layoutContext';
import { useBreakPoint } from 'src/components/hooks/useBreakPoint';
import { sidebarMenus } from 'src/lib/data';

import styles from 'src/styles/layout/sidebar.module.scss';

const Sidebar: FC = () => {
  const [arrowDrop, setArrowDrop] = useState(false);
  const [menuClicked, setMenuClicked] = useState(100);
  const [toggle] = useAtom(toggleButtonContext);
  const [active, setActive] = useAtom(hoverActionContext);
  const divRef = useRef<HTMLDivElement>(null);
  const divNode = divRef.current;

  const [drawerToggle, setDrawerToggle] = useAtom(drawerContext);
  const { tablet } = useBreakPoint();
  // タブレットサイズ且つ、ハンバーガーボタンを押した時にoverlayを作動させる。
  const overlay = drawerToggle && tablet ? styles.sidebar__overlay : '';
  //ToggleButtonを押した時且つ、HeaderLogo & Sidebarをホバーしていない時にminiSideにする。
  const hoverSideAction = !toggle && !active && !tablet;

  const className = (() => {
    if (hoverSideAction) return styles.sidebar__mini;
    if (drawerToggle) return styles.sidebar__open;
    if (!drawerToggle) return styles.sidebar;
  })();

  const dropDownClicked = (id: number) => {
    if (menuClicked === id && active) {
      setMenuClicked(100);
    }
    if (menuClicked !== id) {
      setMenuClicked(id);
    }
  };
  const handleClick = () => {
    divNode?.classList.toggle(styles.active);
  };

  return (
    <>
      <div className={overlay} onClick={() => setDrawerToggle(!drawerToggle)}></div>
      <div
        className={className}
        ref={divRef}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <ul className={styles.menus}>
          <li>
            <Link href={'/'}>
              <a className={styles.menus__link}>
                <Image className={styles.menus__icon} src="/icons/dashboard.svg" alt="Image" width={18} height={18} />
                {active && <span>Dashboard</span>}
                {toggle && !active && <span>Dashboard</span>}
              </a>
            </Link>
          </li>
          {sidebarMenus.map((sidebarmenu) => (
            <li
              key={sidebarmenu.id}
              onClick={() => dropDownClicked(sidebarmenu.id)}
              className={menuClicked === sidebarmenu.id ? styles.menus__sub_open : styles.menus__sub}
            >
              <a className={styles.menus__link}>
                <Image src={sidebarmenu.imagePath} alt={`${sidebarmenu.title}-icon`} width={18} height={18} />
                {active && (
                  <>
                    <span>{sidebarmenu.title}</span>
                    <span
                      className={menuClicked === sidebarmenu.id ? styles.menus__arrow_drop : styles.menus__arrow}
                    ></span>
                  </>
                )}
                {toggle && !active && (
                  <>
                    <span>{sidebarmenu.title}</span>
                    <span
                      className={menuClicked === sidebarmenu.id ? styles.menus__arrow_drop : styles.menus__arrow}
                    ></span>
                  </>
                )}
              </a>
              <ul className={menuClicked === sidebarmenu.id ? styles.menus__dropdown_clicked : styles.menus__dropdown}>
                {sidebarmenu.menus.map((menu) => (
                  <li key={menu.link}>
                    <Link href={menu.path}>
                      <a>{menu.link}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

// onClick={() => dropDownClick(sidebarmenu.id)}
