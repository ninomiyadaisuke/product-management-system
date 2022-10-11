import { useCallback, SetStateAction, Dispatch } from 'react';

//boolean
export const useBooleanChangeEvent = (update: Dispatch<SetStateAction<boolean>>) => {
  return useCallback(
    (boolean: boolean) => {
      update(boolean);
    },
    [update],
  );
};
