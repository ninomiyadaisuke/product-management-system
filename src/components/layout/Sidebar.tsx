import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/future/image';
import { useLayout } from 'src/components/hooks/useLayout';
import { useBreakPoint } from 'src/components/hooks/useBreakPoint';
import { sidebarMenus } from 'src/lib/data';

import styles from 'src/styles/layout/sidebar.module.scss';

type Props = {
  linksTitle: string;
};

const Sidebar: FC<Props> = (props) => {
  const { linksTitle } = props;
  const { pathname } = useRouter();
  const { tablet } = useBreakPoint();
  const { drawerToggle, setDrawerToggle, miniSideActive, toggleButtonClicked, hoverEvent, unHoverEvent } = useLayout();

  const [openMenu, setOpenMenu] = useState(100);

  const overlayClassName = !drawerToggle && tablet ? styles.sidebar__overlay : '';

  const hoverSideAction = !toggleButtonClicked && miniSideActive && !tablet;

  const sidebarClassName = (() => {
    if (hoverSideAction) return styles.sidebar__mini;
    if (!drawerToggle && tablet) return styles.sidebar__open;
    if (drawerToggle && tablet) return styles.sidebar;
    return styles.sidebar__open;
  })();

  const dashboardClassName = (() => {
    if (hoverSideAction && pathname === '/') return styles.menu__mini_active;
    if (hoverSideAction && pathname !== '/') return styles.menu__mini;
    if (pathname === '/') return styles.menu__active;
    return styles.menu;
  })();

  const menuAccordionClassName = (menu: string) => {
    const className = ((title: string) => {
      if (hoverSideAction && title === linksTitle) return styles.menu__mini_active;
      if (hoverSideAction) return styles.menu__mini;
      if (title === linksTitle) return styles.menu__active;
      return styles.menus;
    })(menu);
    return className;
  };

  const menusClassName = (listId: number) => {
    const className = ((id: number) => {
      if (hoverSideAction) return styles.accordion;
      if (openMenu === id) return styles.accordion__clicked;
      return styles.accordion;
    })(listId);
    return className;
  };

  const listClassName = (listId: number) => {
    const className = ((id: number) => {
      if (hoverSideAction) return styles.list__mini;
      if (openMenu === id) return styles.list__active;
      return styles.list;
    })(listId);
    return className;
  };

  const dropDownClicked = (id: number) => {
    if (openMenu === id) {
      setOpenMenu(100);
    }
    if (openMenu !== id) {
      setOpenMenu(id);
    }
  };

  return (
    <>
      <div className={overlayClassName} onClick={() => setDrawerToggle((prev) => !prev)} />
      <div onMouseEnter={hoverEvent} onMouseLeave={unHoverEvent} className={sidebarClassName}>
        <ul>
          <li>
            <Link href={'/'}>
              <a className={dashboardClassName}>
                <Image src="/icons/dashboard.svg" alt="Image" width={18} height={18} />
                <span>Dashboard</span>
              </a>
            </Link>
          </li>
          {sidebarMenus.map((sidebarmenu) => (
            <li className={listClassName(sidebarmenu.id)} key={sidebarmenu.id}>
              <a onClick={() => dropDownClicked(sidebarmenu.id)} className={menuAccordionClassName(sidebarmenu.title)}>
                <Image src={sidebarmenu.imagePath} alt={`${sidebarmenu.title}-icon`} width={18} height={18} />
                <span>{sidebarmenu.title}</span>
                <span className={openMenu === sidebarmenu.id ? styles.menu__arrow_down : styles.menu__arrow}></span>
              </a>
              <ul className={menusClassName(sidebarmenu.id)}>
                {sidebarmenu.menus.map((menu) => (
                  <li key={menu.link}>
                    <Link href={menu.path}>
                      <a className={pathname === menu.path ? styles.accordion__link_active : styles.accordion__link}>
                        {menu.link}
                      </a>
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
