import { useState } from "react";

export const useToggle = (initialState = null) => {
  const [state, setState] = useState(initialState);

  const toggle = (value) => {
    setState((current) => (current === value ? null : value));
  };

  return [state, toggle];
};
