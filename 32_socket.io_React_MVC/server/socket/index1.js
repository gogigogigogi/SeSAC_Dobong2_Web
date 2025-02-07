const socketIO = require('socket.io');

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: 'http://localhost:3000',
    },
  });

  io.on('connection', (socket) => {
    console.log('연결 클라이언트 소켓 id는 ', socket.id);

    socket.on('test', (str) => {
      console.log('str', str);
      socket.emit('test2', '메세지 잘 받았습니다.');
    });

    socket.on('bye', (str) => {
      console.log('client : ', str);
      socket.emit('bye2', '잘가요');
    });

    socket.on('study', (str) => {
      console.log('client : ', str);
      socket.emit('study2', '공부하세요');
    });

    socket.on('hello', (str) => {
      console.log('client : ', str);
      socket.emit('hello2', '안녕하세요');
    });

    socket.on('sendStr', (str, cb) => {
      console.log('str', str);
      let res;
      switch (str) {
        case 'hello':
          res = `${str} : 안녕`;
          break;
        case 'study':
          res = `${str} : 하자`;
          break;
        case 'bye':
          res = `${str} : 잘가`;
          break;
        default:
          break;
      }
      cb(res);
    });
  });
}

module.exports = socketHandler;
