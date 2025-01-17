import { useReducer, useState } from 'react';

const BANK_ACTION_TYPE = {
  deposit: 'deposit',
  withdraw: 'withdraw',
};

// dispatch의 요구사항인 action이 reducer의 두번째 인자로 들어온다.
// action = { type, payload }
const reducer = (prevState, action) => {
  console.log('dispatch 함수가 호출되면, reducer 동작!!');
  console.log('prevState', prevState);
  console.log('action', action);

  switch (action.type) {
    case BANK_ACTION_TYPE.deposit:
      return prevState + action.payload;
    case BANK_ACTION_TYPE.withdraw:
      const result = prevState - action.payload;
      if (result <= 0) return 0;
      return result;
    default:
      return prevState;
  }
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>useReducer 사용하기</h2>
      <p>현재 잔고 : {money}원</p>
      <input
        type='number'
        value={number}
        step={1000}
        min={0}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: BANK_ACTION_TYPE.deposit, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: BANK_ACTION_TYPE.withdraw, payload: number });
        }}
      >
        출금
      </button>
    </>
  );
}
