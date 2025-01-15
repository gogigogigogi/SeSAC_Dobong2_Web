import { useRef } from 'react';

export default function Practice3() {
  const inputRef = useRef();
  const randomNum1 = Math.round(Math.random() * 10);
  const randomNum2 = Math.round(Math.random() * 10);
  const randomOp = Math.floor(Math.random() * 3);
  const operand = ['+', '-', 'x'];

  let answer;
  switch (operand[randomOp]) {
    case '+':
      answer = randomNum1 + randomNum2;
      break;
    case '-':
      answer = randomNum1 - randomNum2;
      break;
    case 'x':
      answer = randomNum1 * randomNum2;
      break;
  }

  const handleAnswer = () => {
    if (!inputRef.current.value.trim().length) {
      inputRef.current.focus();
      return;
    }
    const isCorrect = +inputRef.current.value === answer;

    if (isCorrect) {
      alert(`정답입니다.`);
    } else {
      alert(`오답입니다. 정답은 ${answer}`);
      inputRef.current.focus();
    }
    inputRef.current.value = '';
  };

  return (
    <>
      <div>
        {randomNum1}
        {operand[randomOp]}
        {randomNum2}
      </div>
      <div>
        <input type='number' ref={inputRef} />
      </div>
      <div>
        <button onClick={handleAnswer}>정답 제출</button>
      </div>
    </>
  );
}
