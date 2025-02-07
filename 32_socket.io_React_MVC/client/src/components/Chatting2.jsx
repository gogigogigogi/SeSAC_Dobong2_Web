import { useEffect, useMemo, useState } from 'react';
import '../style/chatting.css';
import Notice from './Notice';
import SpeechChat from './SpeechChat';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8080', { autoConnect: false });

export default function Chatting2() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [nickName, setNickName] = useState(null); // 나의 닉네임 저장
  const [nickNameInput, setNickNameInput] = useState(''); // nickname input value 관리

  const [dmTo, setDmTo] = useState('all'); // select value 관리
  const [userList, setUserList] = useState({}); // 현재 접속된 user 정보
  // {socket.id : nickname, ...}

  const [msgInput, setMsgInput] = useState('');
  const [chatList, setChatList] = useState([
    {
      type: 'me',
      content: '내가 보낸 메세지',
    },
    {
      type: 'other',
      content: '다른 사람이 보낸 메세지',
      name: '다른사람 닉네임',
      isDm: true,
    },
    {
      type: 'notice',
      content: '공지사항 메세지(입장, 퇴장)',
    },
  ]);

  // 메세지 전송시 사용되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 막기
    if (!msgInput.trim().length) return setMsgInput('');

    const sendData = {
      myNick: nickName, // 내 닉네임
      dmTo: dmTo, // 누구에게 메세지를 보낼지, "all", "socket.id"
      msg: msgInput,
    };
    console.log(sendData);
    socket.emit('send', sendData);
    setMsgInput('');
  };

  useEffect(() => {
    // initSocketConnect();
  }, []);

  useEffect(() => {
    const noticeHandler = (notice) => {
      const newChatList = [
        ...chatList, // 변경된 배열
        {
          type: 'notice',
          content: notice,
        },
      ];
      setChatList(newChatList);
    };

    socket.on('notice', noticeHandler);
    console.log('이벤트 등록');

    const messageHandler = (data) => {
      console.log(data);
      const content = `${data.isDm ? '[DM]' : ''} ${data.message}`;
      const type = data.nick === nickName ? 'me' : 'other';
      const newChatList = [
        ...chatList,
        {
          type,
          content,
          isDm: data.isDm,
          name: data.nick,
        },
      ];
      setChatList(newChatList);
      // data : {nick, messagem isDm}
    };
    socket.on('message', messageHandler);
    // [해결2]
    return () => {
      console.log('이벤트 해제');
      socket.off('notice', noticeHandler);
      socket.off('message', messageHandler);
    };
  }, [chatList]);

  /////////////
  const join = () => {
    initSocketConnect();

    // 닉네임 사용 1. 중복체크를 위해 닉네임을 서버로 전송
    socket.emit('checkNick', nickNameInput);
  };

  useEffect(() => {
    socket.on('error', (errmsg) => {
      alert(errmsg);
    });
    socket.on('entrySuccess', (myNick) => {
      // nickName의 초기값 null,
      // 입장에 성공하면 nickName:string
      setNickName(myNick);
    });

    // 현재 접속한 클라이언트 정보를 모두 받아서
    // state로 관리
    socket.on('updateNicks', (nickInfo) => {
      setUserList(nickInfo);
    });
  }, []);

  // const userOptions = [];

  // for (let key in userList) {
  //   if (key !== socket.id) {
  //     userOptions.push(<option value={key}>{userList[key]}</option>);
  //   }
  // }

  // 현재 Chatting3 컴포넌트에느 6개의 state가 있음!
  // 6개의 state가 변경될때 마다 for 문이 매번 실행 -> 성능에 악영향
  // userList라는 state가 변경될 때만 다시 memoization 실행!
  // 다른 state가 변경될 때는 메모리에 저장된 값을 가져다 쓴다!!!
  const userOptions = useMemo(() => {
    const options = [];
    console.log(userList);
    for (let key in userList) {
      if (key !== socket.id) {
        options.push(<option value={key}>{userList[key]}</option>);
      }
    }
    return options;
  }, [userList]);

  // userOptions = [<option value="asdsafqw">allie</option>, ...]

  return (
    <>
      <ul>
        <li>메세지 보내기</li>
        <li>dm 보내기</li>
      </ul>
      {!nickName ? (
        <div className='entry-box'>
          <input
            type='text'
            id='nickname'
            value={nickNameInput}
            onChange={(e) => {
              setNickNameInput(e.target.value);
            }}
            placeholder='닉네임을 입력해주세요'
          />
          <button onClick={join}>채팅방 입장하기</button>
        </div>
      ) : (
        <div>
          <div className='container'>
            <header>코코아톡🍫 : {nickName}</header>
            <section>
              {chatList.map((chat, key) =>
                chat.type === 'notice' ? (
                  <Notice chat={chat} key={key} />
                ) : (
                  <SpeechChat chat={chat} key={key} />
                )
              )}
              <div></div>
            </section>
            <form className='msg-form' id='msg-form' onSubmit={handleSubmit}>
              <select id='dm-select' onChange={(e) => setDmTo(e.target.value)}>
                <option value='all'>전체</option>
                {userOptions}
              </select>
              <input
                type='text'
                placeholder='메세지 입력'
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
              />
              <button onClick={handleSubmit}>전송</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
