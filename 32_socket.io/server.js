const express = require('express');
const app = express();
const PORT = 8080;

// socket.io 의 소켓이 http 모듈로 생성된 서버에만 동작하기 때문에
// http 모듈로 서버를 생성해야 한다.
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

// 미들웨어 설정
app.set('view engine', 'ejs');

// api
app.get('/', (req, res) => {
  res.render('client');
});
app.get('/p1', (req, res) => {
  res.render('practice1');
});
app.get('/chat', (req, res) => {
  res.render('rooms');
});

// socket 코드 작성
io.on('connection', (socket) => {
  // console.log(socket);
  console.log(socket.id);

  // -----
  // [on과 emit 사용해보기]
  // 1. clinet > server > client
  socket.on('event_name', (arg1, arg2, arg3, cb) => {
    console.log('[event_name]:: ', arg1, arg2, arg3);
    cb(arg1, arg2, arg3);
  });

  // 2. client > server
  socket.on('cb_test', (arg, cb) => {
    console.log('[cb_test]:: ', arg);
    console.log(cb); //undefined
  });

  // 3-1. server > client, 클라이언트 전체에게
  io.emit('entire_client', '전체에게 보냅니다!');
  // 3-2. server > client, 클라이언트 하나에게
  socket.emit('one_client', '하나의 클라이언트에게 보냅니다!');

  /// ----- 채팅 만들기 -----
  // ver1. 나의 메세지가 나에게만 보임
  socket.on('new_message1', (arg, cb) => {
    console.log('[new_message1]::', arg);
    cb(arg); // 나에게만 데이터를 전달
  });

  // ver2. 나의 메세지가 모두에게 보이도록
  socket.on('new_message2', (arg) => {
    console.log('[new_message2]:: ', arg);
    io.emit('message_render', arg);
  });

  // ------- 실습문제 1
  socket.on('click', (arg, cb) => {
    console.log('client : ' + arg);
    switch (arg) {
      case 'hello':
        cb(`${arg} : 안녕`);
        break;
      case 'study':
        cb(`${arg} : 공부하자`);
        break;
      case 'bye':
        cb(`${arg} : 잘가라`);
        break;
      default:
        break;
    }
  });

  // ------ 방있는 채팅 -------
  // console.log('방열기전 socket.rooms : ', socket.rooms);
  // console.log('저장전', socket.room); // undefined

  // 방이 없을 때는, {socket.id} 정보만 들어와 있음
  socket.on('join', (roomname) => {
    // 2. 서버에서 방열기
    // console.log('룸이름은', roomname);

    // join() : 같은 방에 들어가 있는 사람들끼리 통신할 수 있도록 해준다.
    socket.join(roomname); // 방열기

    // 다른 곳에서도 roomname을 확인할 수 있도록 socket 객체에 임의로 room으로 값을 할당
    socket.room = roomname;

    // console.log('방연후 socket.rooms : ', socket.rooms);
    // { 'g55PotAJ_l8_dM0pAAAF', '123' }

    // 3-1. 입장 알림 메세지 모두에게 전송, server -> client
    // io.to(roomname).emit('userjoin', `[${socket.id}]님 입장`);
    // 3-2. 입장 알림 메세지 나를 제외하고 전송, server -> client
    // broadcast : 내가 제외됨
    socket.broadcast.to(roomname).emit('userjoin', `[${socket.id}]님 입장`);
  });

  // 6. client > server, 전체 클라이언트에게 메세지 보내기
  socket.on('message', (msg) => {
    console.log('클라이언트의 메세지', msg);

    // 내가 포함된 방? >> socket.room
    console.log('내가 포함된 방의 이름', socket.room);

    // 나 포함 전체에게 메세지 전달
    io.to(socket.room).emit('message_toAll', msg, socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
