import React, { useState } from 'react';

const Contador: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contador: {count}</h2>
      <button className="btn btn-primary" onClick={incrementCount} style={{ marginRight: '10px' }}>
        Incrementar
      </button>
      <button className="btn btn-danger" onClick={decrementCount}>
        Decrementar
      </button>
    </div>
  );
};

export default Contador;
