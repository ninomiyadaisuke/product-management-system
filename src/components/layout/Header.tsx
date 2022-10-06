import { FC } from 'react';
import { Logo } from 'src/components/atoms/images';
import { HamburgerButton } from 'src/components/atoms/button';
import { useBreakPoint } from 'src/components/hooks/useBreakPoint';
import Image from 'next/future/image';
import Link from 'next/link';
import styles from 'src/styles/layout/header.module.scss';

const Header: FC = () => {
  const { tablet } = useBreakPoint();
  return (
    <header className={styles.header}>
      {/* <Logo /> */}
      {tablet && (
        <div className={styles.header__hamburger}>
          <HamburgerButton />
        </div>
      )}

      {/* <!-- Header Menu --> */}
      <ul className="nav user-menu">
        {/* <!-- Search --> */}
        {/* <li className="nav-item">
          <div className="top-nav-search">
            <a href="javascript:void(0);" className="responsive-search">
              <i className="fa fa-search"></i>
            </a>
            <form action="#">
              <div className="searchinputs">
                <input type="text" placeholder="Search Here ..." />
                <div className="search-addon">
                  <span>
                    <Image src="/icons/closes.svg" alt="img" height={40} width={40} />
                  </span>
                </div>
              </div>
              <a className="btn" id="searchdiv">
                <Image src="/icons/search.svg" alt="img" height={40} width={40} />
              </a>
            </form>
          </div>
        </li> */}
        {/* <!-- /Search --> */}

        {/* <!-- Notifications --> */}
        {/* <li className="nav-item dropdown">
          <a href="javascript:void(0);" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
            <Image src="/icons/notification-bing.svg" alt="img" height={40} width={40} />{' '}
            <span className="badge rounded-pill">4</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href="javascript:void(0)" className="clear-noti">
                {' '}
                Clear All{' '}
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <Image alt="" src="/profiles/avatar-02.jpg" height={40} width={40} />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">John Doe</span> added new task{' '}
                          <span className="noti-title">Patient appointment booking</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <Image alt="" src="/profiles/avatar-03.jpg" height={40} width={40} />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Tarah Shropshire</span> changed the task name
                          <span className="noti-title">Appointment booking with payment gateway</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <Image alt="" src="/profiles/avatar-06.jpg" height={40} width={40} />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Misty Tison</span> added{' '}
                          <span className="noti-title">Domenic Houston</span> and{' '}
                          <span className="noti-title">Claire Mapes</span>
                          to project <span className="noti-title">Doctor available module</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <Image alt="" src="/profiles/avatar-17.jpg" height={40} width={40} />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Rolland Webber</span> completed task{' '}
                          <span className="noti-title">Patient and Doctor video conferencing</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <Image alt="" src="/profiles/avatar-13.jpg" height={40} width={40} />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Bernardo Galaviz</span> added new task{' '}
                          <span className="noti-title">Private chat module</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">2 days ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="activities.html">View all Notifications</a>
            </div>
          </div>
        </li> */}
        {/* <!-- /Notifications --> */}

        {/* <li className="nav-item dropdown has-arrow main-drop">
          <a href="javascript:void(0);" className="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
            <span className="user-img">
              <Image src="/profiles/avator1.jpg" alt="" height={40} width={40} />
              <span className="status online"></span>
            </span>
          </a>
          <div className="dropdown-menu menu-drop-user">
            <div className="profilename">
              <div className="profileset">
                <span className="user-img">
                  <Image src="/profiles/avator1.jpg" alt="" height={40} width={40} />
                  <span className="status online"></span>
                </span>
                <div className="profilesets">
                  <h6>John Doe</h6>
                  <h5>Admin</h5>
                </div>
              </div>
              <hr className="m-0" />
              <a className="dropdown-item" href="profile.html">
                {' '}
                <i className="me-2" data-feather="user"></i> My Profile
              </a>
              <a className="dropdown-item" href="generalsettings.html">
                <i className="me-2" data-feather="settings"></i>Settings
              </a>
              <hr className="m-0" />
              <a className="dropdown-item logout pb-0" href="signin.html">
                <Image src="/icons/log-out.svg" className="me-2" alt="img" height={40} width={40} />
                Logout
              </a>
            </div>
          </div>
        </li> */}
      </ul>
      {/* <!-- /Header Menu --> */}

      {/* <!-- Mobile Menu --> */}
      {/* <div className="dropdown mobile-user-menu">
        <a
          href="javascript:void(0);"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="profile.html">
            My Profile
          </a>
          <a className="dropdown-item" href="settings.html">
            Settings
          </a>
          <a className="dropdown-item" href="index.html">
            Logout
          </a>
        </div>
      </div> */}
      {/* <!-- /Mobile Menu --> */}
    </header>
  );
  {
    /* <!-- Header --> */
  }
};

export default Header;
