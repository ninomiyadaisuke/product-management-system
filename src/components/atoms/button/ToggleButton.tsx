import { FC } from 'react';
import { useLayout } from 'src/components/hooks/useLayout';

import styles from 'src/styles/atoms/button/toggle.module.scss';

type Props = {
  onClick: () => void;
};

const ToggleButton: FC<Props> = (props) => {
  const { onClick } = props;
  const { miniSideActive, toggleButtonClicked } = useLayout();

  const className = (() => {
    if (toggleButtonClicked) return `${styles.active}`;
    if (!toggleButtonClicked && miniSideActive) return `${styles.button}`;
  })();

  return <a onClick={onClick} className={className}></a>;
};

export default ToggleButton;
