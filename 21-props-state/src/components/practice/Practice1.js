import { useState } from 'react';

export const Practice1 = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    setUserInfo((preState) => {
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
          id: userList.length === 0 ? 0 : userList[userList.length - 1].id + 1,
          name: userInfo.name,
          email: userInfo.email,
        },
      ];
    });
    setUserInfo({ name: '', email: '' });
  };
  const handleKeyDown = (e) => {
    if (e.type === 'keydown' && e.key === 'Enter') {
      handleAdd();
    }
  };
  const handleRemove = (id) => {
    const newList = userList.filter((user) => {
      return user.id !== id;
    });
    setUserList(newList);
  };
  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='이름'
          data-name='name'
          value={userInfo.name}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='이메일'
          data-name='email'
          value={userInfo.email}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAdd}>등록</button>
      </div>
      <ul>
        {userList?.map((user) => {
          return (
            <li
              onDoubleClick={() => handleRemove(user.id)}
              key={user.id}
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                listStyle: 'none',
              }}
            >
              <span>
                {user.name} : {user.email}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
