import { useForm } from 'react-hook-form';

export default function Practice1() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onValid = (data) => {
    console.log(data);
  };
  const onInValid = (err) => {
    console.log(err);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        type='text'
        {...register('username', {
          required: '이름은 필수 항목입니다.',
        })}
      />
      {errors.name?.message}
      <br />
      <input
        type='number'
        {...register('age', {
          required: '나이는 필수 항목입니다.',
          min: {
            message: '0 이상의 숫자만 입력 가능',
            value: 0,
          },
        })}
      />{' '}
      {errors.age?.message}
      <br />
      <button type='submit'>제출</button>
    </form>
  );
}
