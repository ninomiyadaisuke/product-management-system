import { FC } from 'react';
import { useLayout } from 'src/components/hooks/useLayout';

import styles from 'src/styles/atoms/button/toggle.module.scss';

const ToggleButton: FC = () => {
  const { miniSideActive, toggleButtonClicked, setToggleButtonClicked } = useLayout();

  const className = (() => {
    if (toggleButtonClicked) return styles.active;
    if (!toggleButtonClicked && !miniSideActive) return styles.button;
  })();

  return <a onClick={() => setToggleButtonClicked((prev) => !prev)} className={className}></a>;
};

export default ToggleButton;
