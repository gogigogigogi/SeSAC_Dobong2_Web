const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = 8080;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat_dm_practice');
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const nickInfo = {};
// {socketId : nickname, ... ,}

io.on('connection', (socket) => {
  // [닉네임 사용] - 2
  socket.on('checkNick', (nickname) => {
    // { H7HpO5gESv7XTft5AAAH: '소고기' }
    if (Object.values(nickInfo).indexOf(nickname) > -1) {
      // 중복된 닉네임일 때
      // (1) 입장 실패
      socket.emit('error', '이미 존재하는 닉네임입니다.');
    } else {
      // 중복되지 않는 닉네임
      nickInfo[socket.id] = nickname; // 현재 클라이언트 닉네임 정보 넣기

      // (2) 입력한 내 닉네임 정보를 클라이언트로 전달
      socket.emit('entrySuccess', nickname);

      // (3) 입장 성공, 입장알림 메세지 전체에게 전달
      socket.broadcast.emit('notice', `${nickname}님이 입장하셨습니다.`);

      // (4) 입장 성공, 나를 포함한 전체 client 에게 전체 닉네임 정보 전달
      io.emit('updateNicks', nickInfo);
    }
  });

  // console.log('연결된 클라이언트 id : ', socket.id);
  // [실습3] 입장1
  // 나를 제외한 모든 클라이언트에게 입장 공지문 발송
  // socket.broadcast.emit('notice', `${socket.id}님이 입장하셨습니다.`);

  // [4-2] 하나의 클라이언트로부터 메세지를 받아서
  // 전체 클라이언트에게 전달
  socket.on('send', (msg) => {
    // console.log(`${socket.id} : ${msg}`);
    io.emit('message', { id: nickInfo[socket.id], message: msg });
  });

  // 특정 클라이언트에게 전달
  socket.on('whisper', (msg, target) => {
    console.log('target은', target);
    let targetClientId = Object.keys(nickInfo).find((clientId) => {
      return nickInfo[clientId] === target;
    });

    socket.broadcast
      .to(targetClientId)
      .emit('whisper', target, nickInfo[socket.id], msg);
    socket.emit('whisper', target, nickInfo[socket.id], msg);
  });

  // [클라이언트 연결 종료( 퇴장시 )]
  socket.on('disconnect', (reason) => {
    console.log(reason);
    io.emit('notice', `${nickInfo[socket.id]}님이 퇴장하셨습니다.`);

    // nickInfo에서 연결 종료한 클라이언트의 정보를 삭제
    delete nickInfo[socket.id]; // 객체에서 특정 데이터 삭제 구문

    io.emit('updateNicks', nickInfo);
  });
});
