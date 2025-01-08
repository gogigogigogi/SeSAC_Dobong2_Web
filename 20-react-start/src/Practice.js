import React from 'react';

export const Practice = () => {
  const name = 'butter';
  const animal = 'cat';

  const a = 20;
  const b = 10;
  return (
    <div>
      <h1>실습 1</h1>
      <h2>
        제 반려 동물의 이름은 {name}입니다. {name}은 {animal}입니다.
      </h2>
      <br />
      <h1>실습 2</h1>
      <h2>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</h2>
      <br />
      <h1>실습 3</h1>
      <h2>{a > b && 'a가 b보다 큽니다'}</h2>
    </div>
  );
};
