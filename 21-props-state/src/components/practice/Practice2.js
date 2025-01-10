import { useState } from 'react';

export const Practice2 = () => {
  const [userInfo, setUserInfo] = useState({ name: '', title: '' });
  const [searchInfo, setSearchInfo] = useState({ author: '', word: '' });
  const [userList, setUserList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const handleUserInfoChange = (e) => {
    setUserInfo((preState) => {
      return {
        ...preState,
        [e.target.dataset.name]: e.target.value,
      };
    });
  };

  const handleSearchChange = (e) => {
    setSearchInfo((preState) => {
      return {
        ...preState,
        [e.target.dataset.name]: e.target.value,
      };
    });
  };

  const handleAdd = () => {
    setUserList((preState) => {
      return [
        ...preState,
        {
          id: userList.length === 0 ? 1 : userList[userList.length - 1].id + 1,
          name: userInfo.name,
          title: userInfo.title,
        },
      ];
    });
    setUserInfo({ name: '', title: '' });
  };

  const handleFilterSearch = () => {
    const newList = userList.filter((user) => {
      return user.name === searchInfo.author && user.title === searchInfo.word;
    });
    setFilteredList(newList);
  };

  const handleAllSearch = () => {
    setFilteredList(userList);
  };
  return (
    <div>
      <fieldset>
        <label>
          작성자 :
          <input
            type='text'
            data-name='name'
            value={userInfo.name}
            onChange={handleUserInfoChange}
          />
        </label>
        <label>
          제목 :
          <input
            type='text'
            data-name='title'
            value={userInfo.title}
            onChange={handleUserInfoChange}
          />
        </label>
        <button onClick={handleAdd}>작성</button>
      </fieldset>
      <div>
        <select data-name='author' onChange={handleSearchChange}>
          <option value='null'>작성자</option>
          {userList?.map((user) => {
            return <option key={user.id}>{user.name}</option>;
          })}
        </select>
        <input
          type='text'
          data-name='word'
          placeholder='검색어'
          onChange={handleSearchChange}
        />
        <button onClick={handleFilterSearch}>검색</button>
        <button onClick={handleAllSearch}>전체</button>
      </div>
      <div>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <td>번호</td>
              <td>제목</td>
              <td>작성자</td>
            </tr>
          </thead>
          <tbody>
            {userList?.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* #### */}
      <div>
        {filteredList.length === 0 ? (
          '검색 결과가 없습니다.'
        ) : (
          <table border={1} cellSpacing={0}>
            <thead>
              <tr>
                <td>번호</td>
                <td>제목</td>
                <td>작성자</td>
              </tr>
            </thead>
            <tbody>
              {filteredList?.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
