const express = require('express');
const path = require('path');
const http = require('http')
const port = process.env.PORT || 3000; 
const socket = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', `You said ${msg}`);
  });
});

server.listen(port, () => {
  console.log('Socket IO server listening at port %d', port);
});
