import { useState } from 'react';

function ChangeObj({ objArr }) {
  const [order, setOrder] = useState(0);

  const handleChange = () => {
    if (order === objArr.length - 1) {
      return setOrder(0);
    }
    setOrder(order + 1);
  };

  return (
    <div>
      <div>이름:{objArr[order].name}</div>
      <div>나이:{objArr[order].age}</div>
      <div>별명:{objArr[order].nickName}</div>
      <button onClick={handleChange}>멤버 바꾸기</button>
    </div>
  );
}

export function PororoObj() {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '7',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '5',
      nickName: '공주님',
    },
    {
      name: '크롱',
      age: '4',
      nickName: '장난꾸러기',
    },
  ];

  return (
    <div>
      <ChangeObj objArr={pororoObjArr} />
    </div>
  );
}
