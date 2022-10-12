import { FC } from 'react';
import Image from 'next/future/image';
import { useAtom } from 'jotai';
import { drawerContext, toggleButtonContext, hoverActionContext } from 'src/contexts/layoutContext';
import { useBreakPoint } from 'src/components/hooks/useBreakPoint';

import styles from 'src/styles/layout/sidebar.module.scss';

const Sidebar: FC = () => {
  const [toggle, setToggle] = useAtom(toggleButtonContext);
  const [active, setActive] = useAtom(hoverActionContext);

  const [drawerToggle, setDrawerToggle] = useAtom(drawerContext);
  const { tablet } = useBreakPoint();
  // タブレットサイズ且つ、ハンバーガーボタンを押した時にoverlayを作動させる。
  const overlay = drawerToggle && tablet ? styles.sidebar__overlay : '';
  //ToggleButtonを押した時且つ、Logo & Sidebarをホバーしていない時にminiSideにする。
  const hoverSideAction = !toggle && !active && !tablet;

  const className = (() => {
    if (hoverSideAction) return styles.sidebar__mini;
    if (drawerToggle) return styles.sidebar__open;
    if (!drawerToggle) return styles.sidebar;
  })();

  return (
    <>
      <div className={overlay} onClick={() => setDrawerToggle(!drawerToggle)}></div>
      <div className={className} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            {/* <ul>
              <li>
                <a href="index.html">
                  <Image src="/icons/dashboard.svg" alt="Image" width={18} height={18} />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="submenu">
                <a>
                  <Image src="/icons/product.svg" alt="Image" width={18} height={18} />
                  <span>Product</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="productlist.html">Product List</a>
                  </li>
                  <li>
                    <a href="addproduct.html">Add Product</a>
                  </li>
                  <li>
                    <a href="categorylist.html">Category List</a>
                  </li>
                  <li>
                    <a href="addcategory.html">Add Category</a>
                  </li>
                  <li>
                    <a href="SubCategorylist.html">Sub Category List</a>
                  </li>
                  <li>
                    <a href="subaddcategory.html">Add Sub Category</a>
                  </li>
                  <li>
                    <a href="barcode.html">Print Barcode</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a>
                  <Image src="/icons/sales1.svg" alt="Image" width={18} height={18} />
                  <span>Sales</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="saleslist.html">Sales List</a>
                  </li>
                  <li>
                    <a href="pos.html">POS</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a>
                  <Image src="/icons/purchase1.svg" alt="Image" width={18} height={18} />
                  <span>Purchase</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="purchaselist.html">Purchase List</a>
                  </li>
                  <li>
                    <a href="addpurchase.html">Add Purchase</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a>
                  <Image src="/icons/users1.svg" alt="Image" width={18} height={18} />
                  <span>People</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="userlist.html">User List</a>
                  </li>
                  <li>
                    <a href="adduser.html">Add User</a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
