import { useState } from 'react';

export const HandlerEx3 = () => {
  const [isShow, setIsShow] = useState(true);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <button onClick={handleShow}> {isShow ? '사라져라' : '보여라'}</button>
      <h2>{isShow ? '안녕하세요' : ''}</h2>
    </div>
  );
};
