import { FC, useState } from 'react';

import styles from 'src/styles/atoms/button/toggle.module.scss';

const ToggleButton: FC = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return <a onClick={handleClick} className={toggle ? styles.active : styles.button}></a>;
};

export default ToggleButton;
