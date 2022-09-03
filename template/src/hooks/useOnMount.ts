import { useEffect } from 'react';


export const useOnMount = (func: () => void) => {
  useEffect(
    () => {
      func();
    },
    []
  );
};
