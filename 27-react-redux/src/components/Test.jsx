import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const number = useSelector((state) => {
    return state;
  });
  console.log(number);
  const dispatch = useDispatch();

  return (
    <>
      <h4>state값 가져오기</h4>
      <p>store에 저장 되어있는 number state : {number}</p>

      <h4>state 값 변경하기</h4>
      <button
        onClick={() => {
          dispatch({ type: 'increase' });
        }}
      >
        number state +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrease' });
        }}
      >
        number state -1
      </button>
    </>
  );
}
