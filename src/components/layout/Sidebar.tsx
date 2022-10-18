import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { useLayout } from 'src/components/hooks/useLayout';
import { useBreakPoint } from 'src/components/hooks/useBreakPoint';
import { sidebarMenus } from 'src/lib/data';

import styles from 'src/styles/layout/sidebar.module.scss';

const Sidebar: FC = () => {
  const { toggleButtonClicked, miniSideActive, drawerToggle, setDrawerToggle, hoverEvent, unHoverEvent } = useLayout();
  const [arrowDrop, setArrowDrop] = useState(false);
  const [openMenu, setOpenMenu] = useState(100);
  const { tablet } = useBreakPoint();
  // タブレットサイズ且つ、ハンバーガーボタンを押した時にoverlayを作動させる。
  const overlay = drawerToggle && tablet ? styles.sidebar__overlay : '';
  //ToggleButtonを押した時且つ、HeaderLogo & Sidebarをホバーしていない時にminiSideにする。
  const hoverSideAction = !toggleButtonClicked && !miniSideActive && !tablet;

  const className = (() => {
    if (hoverSideAction) return styles.sidebar__mini;
    if (drawerToggle) return styles.sidebar__open;
    if (!drawerToggle) return styles.sidebar;
  })();

  const dropDownClicked = (id: number) => {
    if (openMenu === id && miniSideActive) {
      setOpenMenu(100);
    }
    if (openMenu !== id) {
      setOpenMenu(id);
    }
  };

  return (
    <>
      <div className={overlay} onClick={() => setDrawerToggle(!drawerToggle)}></div>
      <div className={className} onMouseEnter={hoverEvent} onMouseLeave={unHoverEvent}>
        <ul className={styles.menus}>
          <li>
            <Link href={'/'}>
              <a className={styles.menus__link}>
                <Image className={styles.menus__icon} src="/icons/dashboard.svg" alt="Image" width={18} height={18} />
                {miniSideActive && <span>Dashboard</span>}
                {toggleButtonClicked && !miniSideActive && <span>Dashboard</span>}
              </a>
            </Link>
          </li>
          {/* {sidebarMenus.map((sidebarmenu) => (
            <li
              key={sidebarmenu.id}
              onClick={() => dropDownClicked(sidebarmenu.id)}
              className={openMenu === sidebarmenu.id ? styles.menus__sub_open : styles.menus__sub}
            >
              <a className={styles.menus__link}>
                <Image src={sidebarmenu.imagePath} alt={`${sidebarmenu.title}-icon`} width={18} height={18} />
                {active && (
                  <>
                    <span>{sidebarmenu.title}</span>
                    <span
                      className={openMenu === sidebarmenu.id ? styles.menus__arrow_drop : styles.menus__arrow}
                    ></span>
                  </>
                )}
                {toggle && !active && (
                  <>
                    <span>{sidebarmenu.title}</span>
                    <span
                      className={openMenu === sidebarmenu.id ? styles.menus__arrow_drop : styles.menus__arrow}
                    ></span>
                  </>
                )}
              </a>
              <ul className={openMenu === sidebarmenu.id ? styles.menus__dropdown_clicked : styles.menus__dropdown}>
                {sidebarmenu.menus.map((menu) => (
                  <li key={menu.link}>
                    <Link href={menu.path}>
                      <a>{menu.link}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))} */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

// onClick={() => dropDownClick(sidebarmenu.id)}
