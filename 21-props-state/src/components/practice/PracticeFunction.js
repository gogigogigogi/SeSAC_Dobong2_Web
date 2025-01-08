import { useState } from 'react';

export default function PracticeFunction() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 2);
  };
  return (
    <div>
      <div>{number}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}
