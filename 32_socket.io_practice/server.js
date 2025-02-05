const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = 8080;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

io.on('connection', (socket) => {
  console.log('연결된 클라이언트 id : ', socket.id);
  // [실습3] 입장1
  // 나를 제외한 모든 클라이언트에게 입장 공지문 발송
  socket.broadcast.emit('notice', `${socket.id}님이 입장하셨습니다.`);

  // [4-2] 하나의 클라이언트로부터 메세지를 받아서
  // 전체 클라이언트에게 전달
  socket.on('send', (msg) => {
    console.log(`${socket.id} : ${msg}`);
    io.emit('message', { id: socket.id, message: msg });
  });
});
