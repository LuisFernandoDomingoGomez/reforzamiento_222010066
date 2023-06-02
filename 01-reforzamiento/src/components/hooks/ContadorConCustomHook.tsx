import React from 'react';
import useContador from './useContador';

const ContadorConCustomHook: React.FC = () => {
  const { count, incrementCount, decrementCount } = useContador(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contador con CustomHook: {count}</h2>
      <button className="btn btn-primary" onClick={incrementCount} style={{ marginRight: '10px' }}>
        Incrementar
      </button>
      <button className="btn btn-danger" onClick={decrementCount}>
        Decrementar
      </button>
    </div>
  );
};

export default ContadorConCustomHook;
