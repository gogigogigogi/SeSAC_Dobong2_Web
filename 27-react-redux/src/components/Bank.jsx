import { useDispatch, useSelector } from 'react-redux';
import { depositAction, withdrawAction } from '../store/module/bankReducer';
import { useForm } from 'react-hook-form';

export default function Bank() {
  const { balance, isLowZero } = useSelector((state) => {
    return state.bank;
  });
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onDepositValid = (data) => {
    console.log(data);
    dispatch(depositAction(data.money));
  };
  const onDepositInValid = (err) => {
    console.log(err);
  };

  const onWithdrawValid = (data) => {
    console.log(data);
    dispatch(withdrawAction(data.money));
  };
  const onWithdrawInValid = (err) => {
    console.log(err);
  };
  return (
    <>
      <h2>코딩온 은행</h2>
      <p>잔액 : {balance.toLocaleString()}원</p>
      {isLowZero && <p>출금액이 잔액보다 큼</p>}
      <input
        type='number'
        {...register('money', {
          required: '입력값이 필요합니다.',
          min: {
            value: 0,
            message: '0원 이상을 입력하세요',
          },
        })}
      />
      <button onClick={handleSubmit(onDepositValid, onDepositInValid)}>
        입금
      </button>
      <button onClick={handleSubmit(onWithdrawValid, onWithdrawInValid)}>
        출금
      </button>
    </>
  );
}
