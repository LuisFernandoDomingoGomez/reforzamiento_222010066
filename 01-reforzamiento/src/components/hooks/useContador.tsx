import { useState } from 'react';

const useContador = (initialValue: number) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return {
    count,
    incrementCount,
    decrementCount,
  };
};

export default useContador;
