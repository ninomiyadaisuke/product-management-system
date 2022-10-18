import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { toggleButtonContext, hoverActionContext, drawerContext } from 'src/contexts/layoutContext';

export const useLayout = () => {
  const [toggleButtonClicked, setToggleButtonClicked] = useAtom(toggleButtonContext);
  const [miniSideActive, setMiniSideActive] = useAtom(hoverActionContext);
  const [drawerToggle, setDrawerToggle] = useAtom(drawerContext);

  const hoverEvent = useCallback(() => {
    setMiniSideActive(true);
  }, [setMiniSideActive]);

  const unHoverEvent = useCallback(() => {
    setMiniSideActive(false);
  }, [setMiniSideActive]);

  return {
    toggleButtonClicked,
    setToggleButtonClicked,
    miniSideActive,
    setMiniSideActive,
    drawerToggle,
    setDrawerToggle,
    hoverEvent,
    unHoverEvent,
  };
};
