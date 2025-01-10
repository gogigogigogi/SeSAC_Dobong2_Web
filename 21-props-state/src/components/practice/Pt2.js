import { useState } from 'react';

export default function Pt2() {
  const [comment, setComment] = useState([
    { writer: '민봉', title: '화이팅!!!' },
    { writer: '진우', title: '집에 가고 싶다...' },
    { writer: '규빈', title: '나는야 코딩 천재' },
  ]);

  const [inputWriter, setInputWriter] = useState(''); // 작성자 등록 input
  const [inputTitle, setInputTitle] = useState(''); // 제목 등록 input
  const [inputSearch, setInputSearch] = useState(''); // 검색어 input
  const [result, setResult] = useState([]); // 검색 결과에 대한 배열
  const [searchType, setSearchType] = useState('writer');

  const addComment = () => {
    let newComment = { writer: inputWriter, title: inputTitle };
    setComment([...comment, newComment]);
    setInputTitle('');
    setInputWriter('');
  };

  // 검색을 실행하는 함수
  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }
      return item;
    });
    setResult(searchResult);
  };

  // searchType에 따라
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor='writer'>작성자 : </label>
        <input
          type='text'
          name='writer'
          id='writer'
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />{' '}
        <label htmlFor='writer'>제목 : </label>
        <input
          type='text'
          name='title'
          id='title'
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />{' '}
        <button type='button' onClick={addComment}>
          작성
        </button>
      </form>
      {/* 검색 폼 */}
      <form>
        <select name='type' onChange={selectSearchType}>
          <option value={'writer'}>작성자</option>
          <option value={'title'}>제목</option>
        </select>
        <input
          type='text'
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder='검색어를 입력해주세요'
          name='search'
        />
        <button type='button' onClick={searchComment}>
          검색
        </button>
      </form>
      <div>작성 폼</div>
      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment?.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>검색 결과</h4>
      {result.length === 0 ? (
        <h3>검색 결과가 없어요😡</h3>
      ) : (
        <table border={1} style={{ width: '500px', margin: '0 auto' }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, idx) => {
              return (
                <tr key={idx + 1}>
                  <td>{idx + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
