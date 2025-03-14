import { useState, useCallback } from 'react';

export const useBinaryState = (initialState = false) => {
  const [value, setValue] = useState(initialState);

  const turnOn = useCallback(() => setValue(true), []);
  const turnOff = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((v) => !v), []);

  return {
    value,
    turnOff,
    turnOn,
    toggle,
  };
};
