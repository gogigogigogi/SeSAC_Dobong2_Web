import { useState } from 'react';

export const Alphabet = () => {
  const [list, setList] = useState([
    { id: 1, alpha: 'a' },
    { id: 2, alpha: 'b' },
    { id: 3, alpha: 'c' },
    { id: 4, alpha: 'd' },
    { id: 5, alpha: 'e' },
  ]);
  const [input, setInput] = useState('');
  function addAlpha() {
    const newList = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      alpha: input,
    });
    setList(newList);
    setInput('');
  }

  function changeInput(e) {
    setInput(e.target.value);
  }

  function activeEnter(e) {
    console.log(e);
    console.log(e.currentTarget);

    if (e.type === 'keydown' && e.key === 'Enter') {
      addAlpha();
    }
  }

  function deleteAlpha(id) {
    const newAlpha = list.filter((alpha, i) => {
      return alpha.id !== id;
    });
    setList(newAlpha);
  }
  return (
    <div>
      <h2>alphabet</h2>
      <input
        type='text'
        value={input}
        onChange={changeInput}
        onKeyDown={activeEnter}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {list?.map((el) => {
          return (
            <li key={el.id} onDoubleClick={() => deleteAlpha(el.id)}>
              {el.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
