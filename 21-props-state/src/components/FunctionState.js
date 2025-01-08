import { useState } from 'react';

export default function FunctionState() {
  // 2. state를 사용해서 화면을 변경함
  // const [apple, setApple] = useState('사과');
  // return (
  //   <div>
  //     <div>{apple}</div>
  //     <button
  //       onClick={() => {
  //         setApple('apple');
  //       }}
  //     >
  //       영어로 변경
  //     </button>
  //   </div>
  // );

  // 3. vanilla JS 사과 > apple > 사과 > apple
  // const toggleHandler = () => {
  //   const name = document.querySelector('.state');
  //   name.innerText = name.innerText === '사과' ? 'apple' : '사과';
  // };
  // return (
  //   <div>
  //     <div className='state'>사과</div>
  //     <button onClick={toggleHandler}>변경</button>
  //   </div>
  // );

  //
  const [showEnglish, setShowEnglish] = useState(true);
  const changeLang2 = () => {
    setShowEnglish(!showEnglish);
  };
  return (
    <div>
      <div>{showEnglish ? 'apple' : '사과'}</div>
      <button onClick={changeLang2}>변경</button>
    </div>
  );
}
