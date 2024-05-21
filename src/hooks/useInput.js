import { useState } from "react";

function useInput(initialState) {
  const [value, setValue] = useState(initialState);

  const handler = ({target}) => {
    setValue((prev)=>{
      return {...prev, [target.className]: target.value}
    })
  }

  return [value, handler];
}

export default useInput