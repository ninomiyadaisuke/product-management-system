import { FC, ReactNode } from 'react';
import { useAtomValue } from 'jotai';
import { toggleButtonContext } from 'src/contexts/layoutContext';
import Head from 'next/head';
import { Header, Sidebar } from 'src/components/layout';

import styles from 'src/styles/layout/layout.module.scss';

type Props = {
  children: ReactNode;
  pageTitle: string;
  title?: string;
  subTitle?: string;
};

const Layout: FC<Props> = (props) => {
  const { children, title, subTitle, pageTitle } = props;

  const toggle = useAtomValue(toggleButtonContext);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <Sidebar />
      <main className={toggle ? styles.layout : styles.active}>
        <div className={styles.layout__content}>
          {title && subTitle && (
            <div className="page-header">
              <div className="page-title">
                <h4>{title}</h4>
                <h6>{subTitle}</h6>
              </div>
            </div>
          )}
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
