import { FC, useState } from 'react';
import Image from 'next/future/image';
import styles from 'src/styles/atoms/input/navSearch.module.scss';

const NavSearch: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.search}>
      <div className={show ? styles.search__input_show : styles.search__input}>
        <input type="text" placeholder="Search Here ..." />

        <span onClick={() => setShow(false)}>
          <Image src="/icons/closes.svg" alt="img" height={12} width={12} />
        </span>
      </div>

      <Image
        onClick={() => setShow(true)}
        className={styles.search__icon}
        src="/icons/search.svg"
        alt="img"
        height={24}
        width={24}
      />
    </div>
  );
};

export default NavSearch;
