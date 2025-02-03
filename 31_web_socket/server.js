const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
// console.log(server); // 서버 객체

function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  // console.log('timestamp', timestamp);

  const randomString = Math.random().toString(36).substring(2);
  // console.log('randomString', randomString);

  return timestamp + randomString;
}

// console.log('id', generateUniqueId());
// console.log('abcdef'.substring(2));
// console.log('abcdefgh'.substring(2, 5));
const sockets = [];
const wsServer = new ws.Server({ server });
wsServer.on('connection', (socket, req) => {
  console.log(socket); // 연결된 하나의 클라이언트에 대한 정보
  const clientId = generateUniqueId();
  console.log(`클라이언트 id : [${clientId}] 연결됨`);
  sockets.push(socket);
});
