import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8080', { autoConnect: false });

export default function Practice1() {
  const events = ['bye', 'study', 'hello'];
  const [fromServerStr, setFromServerStr] = useState('');

  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  const clickHandler = (str) => {
    socket.emit('sendStr', str, (res) => {
      setFromServerStr(res);
    });
  };

  const emitToServer = (eventName) => {
    socket.emit(eventName, eventName);
  };

  useEffect(() => {
    initSocketConnect();
    socket.on('bye2', (str) => {
      setFromServerStr(str);
    });
    socket.on('study2', (str) => {
      setFromServerStr(str);
    });
    socket.on('hello2', (str) => {
      setFromServerStr(str);
    });

    return () => {
      socket.off('bye2');
      socket.off('study2');
      socket.off('study2');
    };
  }, []);

  // 이벤트 핸들러가 중복 등록될 수 있기

  return (
    <div>
      <h3>실습1</h3>
      {events.map((event) => {
        return (
          <button
            key={event}
            onClick={() => {
              emitToServer(event);
            }}
          >
            {event}
          </button>
        );
      })}
      <button onClick={() => clickHandler('hello')}>hello</button>
      <button onClick={() => clickHandler('study')}>study</button>
      <button onClick={() => clickHandler('bye')}>bye</button>
      <h3>server : {fromServerStr}</h3>
    </div>
  );
}
