import socketio from 'socket.io-client';

// const dotenv = require('dotenv');
// dotenv.config();

const socket = socketio(
  'http://192.168.15.15:3333', //process.env.BACKEND_URL,
  {
    autoConnect: false,
  },
);

function subscribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
