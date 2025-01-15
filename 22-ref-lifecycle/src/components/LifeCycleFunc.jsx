import { useEffect, useState } from 'react';

const MyComponent = ({ number }) => {
  const [text, setText] = useState('');
  /* 
    useEffect(effect, [,dependency_array])
    - effect : 콜백 함수
    - dependency_array(의존성 배열):
      의존성 배열에 있는 데이터가 변하면 콜백 함수 실행
      - [] : Mount 되었을때만 동작
      - 생략 : Mount, update 시 항상 동작
      - [data] : Mount, data가 update 되었을 떄 동작
  */
  // Mount 시점에서 실행
  useEffect(() => {
    console.log('mount 되었어요!!');
  }, []);

  // Unmount 시점에 실행
  useEffect(() => {
    return () => {
      console.log('unmount 될거에요!');
    };
  }, []);

  // update 시점에서 실행
  useEffect(() => {
    console.log('어떤값이 update 되었어요!!');
  }, [text, number]);

  // 특정 state 업데이트
  useEffect(() => {
    console.log('text update 되었어요!!');
  }, [text]);
  return (
    <>
      <p>MyComponent: {number}</p>
      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
};

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };
  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>on/off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};

export default LifeCycleFunc;
