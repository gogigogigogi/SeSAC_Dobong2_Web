import { useState } from 'react';

export const HandlerEx4 = () => {
  const [number, setNumber] = useState(0);
  const handleIncrease = () => {
    setNumber(number + 1);
  };
  const handleDecreasee = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <div>
        <span>{number}</span>
        <span>{number > 7 ? '😡' : '😄'}</span>
      </div>
      <button onClick={handleIncrease}>1 증가</button>
      <button onClick={handleDecreasee}>1 감소</button>
    </div>
  );
};
