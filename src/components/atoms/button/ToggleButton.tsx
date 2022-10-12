import { FC, useState } from 'react';
import { useAtomValue } from 'jotai';
import { toggleButtonContext, hoverActionContext } from 'src/contexts/layoutContext';

import styles from 'src/styles/atoms/button/toggle.module.scss';

type Props = {
  onClick: () => void;
};

const ToggleButton: FC<Props> = (props) => {
  const { onClick } = props;
  const toggle = useAtomValue(toggleButtonContext);
  const active = useAtomValue(hoverActionContext);

  const className = (() => {
    if (toggle) return `${styles.active}`;
    if (active && !toggle) return `${styles.button}`;
  })();

  return <a onClick={onClick} className={className}></a>;
};

export default ToggleButton;
