import { useEffect, useState } from 'react';
import '../style/chatting.css';
import Notice from './Notice';
import SpeechChat from './SpeechChat';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8080', { autoConnect: false });

export default function Chatting() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [msgInput, setMsgInput] = useState('');
  const [chatList, setChatList] = useState([
    {
      type: 'me',
      content: '내가 보낸 메세지',
    },
    {
      type: 'other',
      content: '다른 사람이 보낸 메세지',
    },
    {
      type: 'notice',
      content: '공지사항 메세지(입장, 퇴장)',
    },
  ]);

  // 메세지 전송시 사용되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 막기
  };

  useEffect(() => {
    initSocketConnect();

    // [문제점1]: newChatList 를 만들 때 chatList가 mount 된 시점의 chatList!!
    // socket.on('notice', (notice) => {
    //   const newChatList = [
    //     ...chatList, // 항상 초기값 배열
    //     {
    //       type: 'notice',
    //       content: notice,
    //     },
    //   ];
    //   setChatList(newChatList);
    // });
  }, []);

  useEffect(() => {
    // chatList가 변경될 때마다 이벤트 핸들러 재등록
    // 기존 chatList가 기준이 아닌 변경된 chatList 가 기준이 될 수 있도록 하기 위함
    // [해결1] >> [문제점2]: 이벤트 핸들러 재등록이 된다.

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

    // [해결2]
    return () => {
      console.log('이벤트 해제');
      socket.off('notice', noticeHandler);
    };
  }, [chatList]);

  return (
    <>
      <ul>
        <li>채팅 UI 만들기(실습2)</li>
        <li>입장 공지(실습3)</li>
      </ul>

      <div>
        <div className='container'>
          <header>코코아톡🍫</header>
          <section>
            {chatList.map((chat, key) =>
              chat.type === 'notice' ? (
                <Notice chat={chat} key={key} />
              ) : (
                <SpeechChat chat={chat} key={key} />
              )
            )}
          </section>
          <form className='msg-form' id='msg-form' onSubmit={handleSubmit}>
            <select id='dm-select'></select>
            <input
              type='text'
              placeholder='메세지 입력'
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button>전송</button>
          </form>
        </div>
      </div>
    </>
  );
}
