import { FC } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

type Props = {
  size: 'l' | 's';
};

const Logo: FC<Props> = (props) => {
  const { size } = props;
  const path = size === 'l' ? '/logo.png' : '/logo-small.png';
  // 42 140 30 30
  return (
    <div className="header-left active">
      <Link href={'/'}>
        <a className="logo">
          <Image src={path} height={size === 'l' ? 42 : 30} width={size === 'l' ? 140 : 30} alt="logo" />
        </a>
      </Link>
      {/* <Link href={'/'}>
        <a className="logo-small">
          <Image src="/logo-small.png" alt="" height={40} width={40} />
        </a>
      </Link>
      <a id="toggle_btn"></a> */}
    </div>
  );
};

export default Logo;
