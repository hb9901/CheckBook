import { useState } from "react";

function useStateInput(initialState) {
  const [state, setState] = useState(initialState);

  const handler = ({ target }) => {
    setState((prev) => {
      return { ...prev, [target.dataset.type]: target.value };
    });
  };

  return [state, handler];
}

export default useStateInput;
