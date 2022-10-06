import { FC } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="header-left active">
      <Link href={'/'}>
        <a className="logo">
          <Image src="/logo.png" height={40} width={120} alt="logo" />
        </a>
      </Link>
      <Link href={'/'}>
        <a className="logo-small">
          <Image src="/logo-small.png" alt="" height={40} width={40} />
        </a>
      </Link>
      <a id="toggle_btn"></a>
    </div>
  );
};

export default Logo;
