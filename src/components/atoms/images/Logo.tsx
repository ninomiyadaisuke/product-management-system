import { FC } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
type Props = {
  size: 'l' | 's';
};

const Logo: FC<Props> = (props) => {
  const { size } = props;
  const path = size === 'l' ? '/logo.png' : '/logo-small.png';
  const height = size === 'l' ? 42 : 30;
  const width = size === 'l' ? 140 : 30;

  return (
    <div className="header-left active">
      <Link href={'/'}>
        <a>
          <Image src={path} height={height} width={width} alt="logo" priority />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
