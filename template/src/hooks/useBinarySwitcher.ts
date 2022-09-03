import { useCallback, useState } from 'react';


type BinarySwitcher = (
  initialValue?: boolean,
) => [
  boolean,
  () => void,
  () => void,
  () => void
];

export const useBinarySwitcher: BinarySwitcher = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const switchOn = useCallback(() => setValue(true), []);
  const switchOff = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(value => !value), []);
  return [value, switchOn, switchOff, toggle];
};
