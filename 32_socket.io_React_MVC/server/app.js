const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
// const socketIo = require('socket.io'); >> 이동
const socketHandler = require('./socket/index3'); // 추가
const indexRouter = require('./routes');
const PORT = 8080;

const server = http.createServer(app);
// const io = socketIo(server); >> 이동

socketHandler(server);

app.use(cors());

const prefix = '/api';
app.use(prefix, indexRouter);
server.listen(PORT, () => {
  console.log('server is open!! Port is ', PORT);
});
