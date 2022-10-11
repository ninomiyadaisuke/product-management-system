import { FC } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import styles from 'src/styles/atoms/images/logo.module.scss';

type Props = {
  size: 'l' | 's';
};

const Logo: FC<Props> = (props) => {
  const { size } = props;
  const path = size === 'l' ? '/logo.png' : '/logo-small.png';

  return (
    <div className="header-left active">
      <Link href={'/'}>
        <a className={styles.logo}>
          <Image src={path} height={size === 'l' ? 42 : 30} width={size === 'l' ? 140 : 30} alt="logo" />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
