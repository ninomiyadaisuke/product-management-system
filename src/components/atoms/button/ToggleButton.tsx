import { FC, useState } from 'react';

import styles from 'src/styles/atoms/button/toggle.module.scss';

type Props = {
  onClick: () => void;
  toggle: boolean;
  active: boolean;
};

const ToggleButton: FC<Props> = (props) => {
  const { onClick, toggle, active } = props;

  const className = (() => {
    if (toggle) return `${styles.active}`;
    if (active && !toggle) return `${styles.button}`;
  })();

  return <a onClick={onClick} className={className}></a>;
};

export default ToggleButton;
