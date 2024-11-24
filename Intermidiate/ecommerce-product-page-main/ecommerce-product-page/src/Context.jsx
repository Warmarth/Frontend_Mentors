import { createContext, useState } from "react";

export const countContext = createContext();

function CountProvider({ children }) {
  let [count, setCount] = useState(null);
  const [picked, setPicked] = useState(0);
  const handleMinus = () => {
    return picked <= 0 ? 0 : setPicked(picked - 1);
  };
  const handlePlus = () => {
    return setPicked(picked + 1);
  };
  const submiter = () => {
    if (picked > 0) {
      setCount(picked);
    }
  };

  const reset = () => {
    setCount(null);
    setPicked(0);
  };

  return (
    <countContext.Provider
      value={{
        count,
        picked,
        setCount,
        handleMinus,
        handlePlus,
        submiter,
        reset,
      }}
    >
      {children}
    </countContext.Provider>
  );
}

export default CountProvider;
