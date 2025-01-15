import { useRef } from 'react';

export default function Practice2() {
  const inputRef = useRef();
  const divRef = useRef();

  function handleApply() {
    divRef.current.style = `background-color : ${inputRef.current.value}`;
    inputRef.current.value = '';
  }
  return (
    <>
      <div ref={divRef}>
        <input type='text' ref={inputRef} />
        <div>
          <button onClick={handleApply}>색 적용</button>
        </div>
      </div>
    </>
  );
}
